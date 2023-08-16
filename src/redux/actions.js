export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";

export const GET_CHARACTER = "GET_CHARACTER";
export const CLEAN_CHARACTER = 'CLEAN_CHARACTER';

export const SET_FILTER_FAV = 'SET_FILTER_FAV';
export const SET_ORDER_FAV = 'SET_ORDER_FAV';

export const APPLY_FILTER_AND_ORDER = 'APPLY_FILTER_AND_ORDER';

export const applyFilterAndOrder = () => {
    return {type: APPLY_FILTER_AND_ORDER}
}

export const setFilterFav = (gender) => {
    return {type: SET_FILTER_FAV, payload: gender}
}

export const setOrderFav = (order) => {
    return {type: SET_ORDER_FAV, payload: order}
}
export const addFav = (character) => {
    return {
        type: ADD_FAV, 
        payload: character
    }
}

export const removeFav = (id) => {
    return {
        type: REMOVE_FAV,
        payload: id
    }
}


export const getCharacter = (id) => {
    return (dispatch) => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then((resp) => resp.json())
            .then((data) => dispatch({type: GET_CHARACTER, payload: data}))
    }
}

export const cleanCharacter = () => {
    return {type: CLEAN_CHARACTER}
}