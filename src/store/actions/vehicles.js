export const FETCH_VEHICLES_REQUEST = "app/vehicles/FETCH_VEHICLES_REQUEST";
export const FETCH_VEHICLES_SUCCESS = "app/vehicles/FETCH_VEHICLES_SUCCESS";

export const SELECT_VEHICLE = "app/vehicles/SELECT_VEHICLE";
export const CLEAN_VEHICLE = "app/vehicles/CLEAN_VEHICLE";

export const fetchVehiclesRequest = () => {
    return ({
        type: FETCH_VEHICLES_REQUEST
    })
}

export const fetchVehiclesSuccess = (data) => {
    return ({
        type: FETCH_VEHICLES_SUCCESS,
        data
    })
}

export const selectVehicle = (vehicle, index) => {
    return ({
        type: SELECT_VEHICLE,
        vehicle,
        index
    })
}

export const cleanVehicle = () => {
    return ({
        type: CLEAN_VEHICLE
    })
}