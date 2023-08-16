import { useSelector, useDispatch } from "react-redux";
import { applyFilterAndOrder, removeFav } from "../../redux/actions";
import Cards from "../../components/Cards/Cards";

import style from './FavoritesView.module.css'
import { useEffect } from "react";

const FavoritesView = () => {
    const myFavorites = useSelector((state) => state.myFavorites);
    const dispatch = useDispatch();
    const onClose = (id) => {
        dispatch(removeFav(id))
    }

    useEffect(() => {
        dispatch(applyFilterAndOrder());
    },[])

    return (
        <>
            <Cards characters={myFavorites} onClose={onClose} />
        </>
    )
}

export default FavoritesView;