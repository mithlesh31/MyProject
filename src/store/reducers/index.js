import {combineReducers} from 'redux';
import vehiclesReducer from './vehiclesReducer';
import planetsReducer from './planetsReducer';

const rootReducer = combineReducers({
    vehicles: vehiclesReducer,
    planets: planetsReducer
});

export default rootReducer;
