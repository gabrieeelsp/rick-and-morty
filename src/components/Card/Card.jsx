import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { AiFillHeart, AiOutlineHeart, AiOutlineCloseCircle } from 'react-icons/ai';

import { addFav, removeFav } from '../../redux/actions';

import style from './Card.module.css'

function Card (props) {
    const [load, setLoad] = useState(false);
    const {
        id, 
        name,  
        species, 
        gender, 
        status, 
        image, 
        onClose
     } = props;

     const [ isFav, setIsFav ] =  useState(false);

     const dispatch = useDispatch();

     const handleFavorite = () => {
        
        if ( isFav ) {
            setIsFav(false);
            dispatch(removeFav(id));
        } else {
            setIsFav(true);
            dispatch(addFav(props));
        }
     }

     const myFavorites = useSelector((state) => state.myFavorites);

     useEffect(() => {
        myFavorites.forEach((fav) => {
            if ( fav.id === id ) setIsFav(true);
        })
     }, [myFavorites])

     const [isMounted, setIsMounted] = useState(false);
     useEffect(() => {
        setTimeout(() => {
            setIsMounted(true)
        }, 200)
        
     }, [])

    
    const handleOnClickCerrar = () => {
        setIsMounted(false)
        setTimeout(() => {
            onClose(id)   
            dispatch(removeFav(id)); 
        }, 800)
        
    }
    
    return (
        <>
            <div className={`${style.card} ${isMounted ? style.cardVisible : ''} `} >
                {/* <button onClick={handleOnClickCerrar}>X</button> */}
                <div className={style.cardImage}>
                    { status === 'Alive' && <div className={style.cardImageAlive}><span>Alive</span></div> }
                    <div className={style.cardImageClose}><AiOutlineCloseCircle onClick={handleOnClickCerrar} className={style.closeIcon} /></div>
                    <img src={image} />
                    <div className={style.cardName} >
                        <div className={style.cardNameInt}>
                            <Link to={`/detail/${id}`}><span>{name}-{id}</span></Link>
                            
                        </div>
                    </div>
                </div> 
                <div className={style.cardText}>
                    <div><span>Especie: {species}</span></div>
                    <div><span>Gender: {gender}</span></div>
                </div>
                <div className={style.cardButtons}>
                    <button className={style.bottomButton} onClick={handleFavorite} >
                        { isFav ? <AiFillHeart className={style.icon} /> : <AiOutlineHeart className={style.icon} /> }
                        
                        
                        Love</button>
                    <button className={style.bottomButton} onClick={handleOnClickCerrar}><AiOutlineCloseCircle className={style.icon} />Close</button>
                    
                </div>  
                
            </div>
            
            
        </>
        
    )
}

export default Card;