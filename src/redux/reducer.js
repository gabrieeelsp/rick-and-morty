
import {
    ADD_FAV,
    REMOVE_FAV, 
    GET_CHARACTER,
    CLEAN_CHARACTER,

    SET_FILTER_FAV,
    SET_ORDER_FAV,

    APPLY_FILTER_AND_ORDER,
    GET_CHARACTERS_DISCOVER,
    SET_FILTER_GENDER_DISCOVER,
    SET_FILTER_STATUS_DISCOVER,
    SET_FILTER_SPECIE_DISCOVER,
    SET_FILTER_NAME_DISCOVER,
    SET_PAGE_DISCOVER,
    } from "./actions"

const initialState = {
    character: null,
    myFavorites: [],

    allFavorites: [],
    orderFav: 'none',
    filterFav: 'All',

    discoverCharacters: {
        results: [],
        info: {
            pages: 1
        }
    },
    filterGenderDisc: 'All',
    filterStatusDisc: 'All',
    filterSpecieDisc: 'All',
    filterNameDisc: '',
    pageDisc: 1,
}

const applyFilterOrder = (filter, order, array) => {
    let newArray = [...array];
    if ( filter !== 'All') {
        newArray = newArray.filter((item) => item.gender === filter);
    }

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

        case GET_CHARACTERS_DISCOVER:
            return {...state, discoverCharacters: action.payload};
        
        case SET_FILTER_GENDER_DISCOVER:
            return {...state, filterGenderDisc: action.payload, pageDisc: 1}
        
        case SET_FILTER_STATUS_DISCOVER:
            return {...state, filterStatusDisc: action.payload, pageDisc: 1}
        case SET_FILTER_SPECIE_DISCOVER:
            return {...state, filterSpecieDisc: action.payload, pageDisc: 1}
        case SET_FILTER_NAME_DISCOVER:
            return {...state, filterNameDisc: action.payload, pageDisc: 1}
        case SET_PAGE_DISCOVER:  
            return {...state, pageDisc: action.payload}
            
        default:
            return {...state}
    }
}

export default rootReducer;