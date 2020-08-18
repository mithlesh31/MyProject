import { fork, all } from "redux-saga/effects";
import vehicleSaga from "./vehiclesSaga";
import planetsSaga from "./planetsSaga";


export default function* rootSaga() {
    yield all([fork(vehicleSaga), fork(planetsSaga)])
}