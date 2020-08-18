import produce from "immer";
import { FETCH_VEHICLES_SUCCESS, SELECT_VEHICLE, CLEAN_VEHICLE } from "../actions/vehicles";
import store from "../store";
// Initial State
const initialState = {
  vehicleList: [],
  selectedVehicles: {}
};

// Redux:
const vehiclesReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FETCH_VEHICLES_SUCCESS:
        draft.vehicleList = action.data;
        break;
      case SELECT_VEHICLE:
        draft.selectedVehicles[String(action.index)] = action.vehicle;
        break;
      case CLEAN_VEHICLE:
        draft.selectedVehicles = {}
        break;
      default: {
        return draft;
      }
    }
  });
// Exports
export default vehiclesReducer;
