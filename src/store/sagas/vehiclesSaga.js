import {
    delay,
    all,
    fork,
    takeLatest,
    put,
    call
  } from "redux-saga/effects";
  import Axios from "axios";

import * as actions from "../actions/vehicles";
import constant from "../../utils/constant";

function* fetchVehiclesRequestSaga(action) {
    try {
      const res = yield call(
        Axios.get,
        constant.apiRoutes.getVehicles
      );
      console.log("dfdf", res)
      if (res.statusText === "OK") {
        yield put(actions.fetchVehiclesSuccess(res.data));
      } else {
        console.log("error", res.error);
      }
    } catch (error) {
      console.log("error", error);
    }
}

  
export function* watchFetchVehiclesRequest() {
    yield takeLatest(
        actions.FETCH_VEHICLES_REQUEST,
        fetchVehiclesRequestSaga
    );
}

export default function* rootSaga() {
    yield all([
        fork(watchFetchVehiclesRequest)
    ]);
}
  