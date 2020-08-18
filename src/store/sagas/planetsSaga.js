import {
    delay,
    all,
    fork,
    takeLatest,
    put,
    call
  } from "redux-saga/effects";
  import Axios from "axios";

import * as actions from "../actions/planets";
import * as vehicleActions from "../actions/vehicles";
import constant from "../../utils/constant";

function* fetchPlanetsRequestSaga(action) {
    try {
      const res = yield call(
        Axios.get,
        constant.apiRoutes.getPlanets
      );
      console.log("dfdf", res)
      if (res.statusText === "OK") {
        yield put(actions.fetchPlanetsSuccess(res.data));
      } else {
        console.log("error", res.error);
      }
    } catch (error) {
      console.log("error", error);
    }
}

function* findFalconeRequestSaga(action) {
  try {
    const resToken = yield call(
      Axios.post,
      constant.apiRoutes.getToken,
      {},
      {
        headers: {"Accept" : "application/json"}
      }
    );
    if(resToken.statusText === "OK") {
      const res = yield call(
        Axios.post,
        constant.apiRoutes.findFalcone,
        {...action.data, token: resToken.data.token},
        {
          headers: {"Accept" : "application/json", "Content-Type" :"application/json"}
        }
      );
      console.log("dfdf", res)
      if (res.statusText === "OK" && res.data.status === "success") {
        yield action.resolve()
        yield put(actions.findFalconeSuccess(res.data.planet_name));
      } else {
        yield action.reject();
        console.log("error", res.error);
      }
    } else {
      console.log("error", resToken.error);
    }
  } catch (error) {
    yield action.reject();
    console.log("error", error);
  }
}

function* resetAllRequestSaga() {
  try {
    yield put(vehicleActions.cleanVehicle());
    yield put(actions.cleanPlanet());
  } catch (error) {
    console.log("error", error);
  }
}

  
export function* watchFetchPlanetsRequest() {
    yield takeLatest(
        actions.FETCH_PLANETS_REQUEST,
        fetchPlanetsRequestSaga
    );
}

export function* watchFindFalconeRequest() {
  yield takeLatest(
      actions.FIND_FALCONE_REQUEST,
      findFalconeRequestSaga
  );
}

export function* watchResetAllRequest() {
  yield takeLatest(
      actions.RESET_ALL_REQUEST,
      resetAllRequestSaga
  );
}


export default function* rootSaga() {
    yield all([
        fork(watchFetchPlanetsRequest),
        fork(watchFindFalconeRequest),
        fork(watchResetAllRequest)
    ]);
}
  