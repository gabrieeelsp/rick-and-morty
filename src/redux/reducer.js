import { act } from "react-dom/test-utils";
import {
    ADD_FAV,
    REMOVE_FAV, 
    GET_CHARACTER,
    CLEAN_CHARACTER,

    SET_FILTER_FAV,
    SET_ORDER_FAV,

    APPLY_FILTER_AND_ORDER
    } from "./actions"

const initialState = {
    character: null,
    myFavorites: [],

    allFavorites: [],
    orderFav: 'none',
    filterFav: 'All',
}

const applyFilterOrder = (filter, order, array) => {
    let newArray = [...array];
    console.log(filter)
    if ( filter !== 'All') {
        newArray = newArray.filter((item) => item.gender === filter);
    }
    console.log(newArray)
    console.log(order)
    if ( order !== 'none' ) {
        
        return newArray.sort((a, b) => {
            return order === 'ASC' ? a.id - b.id : b.id - a.id;
        }) 
    }
    return newArray;
}
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return {...state, myFavorites: [...state.myFavorites, action.payload], allFavorites: [...state.allFavorites, action.payload] }
        
        case REMOVE_FAV:
            const newFavorites = state.allFavorites.filter(item => item.id !== Number(action.payload));
            return {...state, myFavorites: applyFilterOrder(state.filterFav, state.orderFav, newFavorites), allFavorites: newFavorites }

        case GET_CHARACTER:
            return {...state, character: action.payload}

        case CLEAN_CHARACTER:
            return {...state, character: null}
        
        case SET_FILTER_FAV:
            return {...state, filterFav: action.payload, myFavorites: applyFilterOrder(action.payload, state.orderFav, state.allFavorites)} 

        case SET_ORDER_FAV:
            return {...state, orderFav: action.payload, myFavorites: applyFilterOrder(state.filterFav, action.payload, state.allFavorites)} 
        
        case APPLY_FILTER_AND_ORDER:
            return {...state, myFavorites: applyFilterOrder(state.filterFav, state.orderFav, state.allFavorites)}

        default:
            return {...state}
    }
}

export default rootReducer;