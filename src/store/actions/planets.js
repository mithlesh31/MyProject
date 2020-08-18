export const FETCH_PLANETS_REQUEST = "app/planets/FETCH_PLANETS_REQUEST";
export const FETCH_PLANETS_SUCCESS = "app/planets/FETCH_PLANETS_SUCCESS";

export const SELECT_PLANET = "app/planets/SELECT_PLANET";

export const FIND_FALCONE_REQUEST = "app/planets/FIND_FALCONE_REQUEST";
export const FIND_FALCONE_SUCCESS = "app/planets/FIND_FALCONE_SUCCESS";

export const RESET_ALL_REQUEST = "app/planets/RESET_ALL_REQUEST";
export const CLEAN_PLANET = "app/planets/CLEAN_PLANET";

export const fetchPlanetsRequest = () => {
    return ({
        type: FETCH_PLANETS_REQUEST
    })
}

export const fetchPlanetsSuccess = (data) => {
    return ({
        type: FETCH_PLANETS_SUCCESS,
        data
    })
}

export const findFalconeRequest = (data, resolve, reject) => {
    return ({
        type: FIND_FALCONE_REQUEST,
        data, resolve, reject
    })
}

export const findFalconeSuccess = (planet) => {
    return ({
        type: FIND_FALCONE_SUCCESS,
        planet
    })
}

export const selectPlanet = (planet, index) => {
    return ({
        type: SELECT_PLANET,
        planet,
        index
    })
}

export const resetAllRequest = () => {
    return ({
        type: RESET_ALL_REQUEST
    })
}

export const cleanPlanet = () => {
    return ({
        type: CLEAN_PLANET
    })
}