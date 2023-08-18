export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";

export const GET_CHARACTER = "GET_CHARACTER";
export const CLEAN_CHARACTER = 'CLEAN_CHARACTER';

export const SET_FILTER_FAV = 'SET_FILTER_FAV';
export const SET_ORDER_FAV = 'SET_ORDER_FAV';

export const APPLY_FILTER_AND_ORDER = 'APPLY_FILTER_AND_ORDER';

export const SET_FILTER_GENDER_DISCOVER = 'SET_FILTER_GENDER_DISCOVER';
export const SET_FILTER_STATUS_DISCOVER = 'SET_FILTER_STATUS_DISCOVER';
export const SET_FILTER_SPECIE_DISCOVER = 'SET_FILTER_SPECIE_DISCOVER';
export const SET_FILTER_NAME_DISCOVER = 'SET_FILTER_NAME_DISCOVER';
export const SET_PAGE_DISCOVER = 'SET_PAGE_DISCOVER';

export const GET_CHARACTERS_DISCOVER = "GET_CHARACTERS_DISCOVER";
export const CLEAN_CHARACTERS_DISCOVER = 'CLEAN_CHARACTERS_DISCOVER';

export const setFilterGenderDiscover = (gender) => {
    return {type: SET_FILTER_GENDER_DISCOVER, payload: gender}
}
export const setFilterStatusDiscover = (status) => {
    return {type: SET_FILTER_STATUS_DISCOVER, payload: status}
}
export const setFilterSpecieDiscover = (specie) => {
    return {type: SET_FILTER_SPECIE_DISCOVER, payload: specie}
}

export const setFilterNameDiscover = (name) => {
    return {type: SET_FILTER_NAME_DISCOVER, payload: name}
}

export const setPageDiscover = (page) => {
    return {type: SET_PAGE_DISCOVER, payload: page}
}

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

export const getCharactersDiscover = (gender, status, specie, name, page) => {
    return (dispatch) => {
            const genderSearch = gender === 'All' ? '' : gender;
            const statusSearch = status === 'All' ? '' : status;
            const specieSearch = specie === 'All' ? '' : specie;
            const nameSearch = name ? name : '';
            const pageSearch = page ? page : 1;
           fetch(`https://rickandmortyapi.com/api/character?gender=${genderSearch}&status=${statusSearch}&species=${specieSearch}&name=${nameSearch}&page=${pageSearch}`)
            .then((resp) => resp.json())
            .then((data) => {
                if ( data.error ) {
                    dispatch({type: GET_CHARACTERS_DISCOVER, payload:{
                        info: {
                            pages: 1,
                        }, results: []
                    }})
                }else {
                    dispatch({type: GET_CHARACTERS_DISCOVER, payload:data})
                }
            });
    }
}

export const cleanCharactersDiscover = () => {
    return {type: CLEAN_CHARACTERS_DISCOVER};
}