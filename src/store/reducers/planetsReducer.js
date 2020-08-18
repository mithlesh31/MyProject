import produce from "immer";
import { FETCH_PLANETS_SUCCESS, SELECT_PLANET, FIND_FALCONE_SUCCESS, CLEAN_PLANET } from "../actions/planets";
// Initial State
const initialState = {
  planetList: [],
  selectedPlanets: {},
  foundPlanet: null
};

// Redux:
const planetsReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FETCH_PLANETS_SUCCESS:
        draft.planetList = action.data;
        break;
      case SELECT_PLANET:
        draft.selectedPlanets[String(action.index)] = action.planet;
        break;
      case FIND_FALCONE_SUCCESS:
        draft.foundPlanet = action.planet;
        break;
      case CLEAN_PLANET:
        draft.selectedPlanets = {};
        draft.foundPlanet = null;
        break;
      default: {
        return draft;
      }
    }
  });
// Exports
export default planetsReducer;
