import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';

import { getCharacter, cleanCharacter } from '../../redux/actions'

import { ExtraDeail } from '../../components';

import style from './CardDetail.module.css'
import { GoDotFill } from 'react-icons/go'
const CardDetail = () => {
    const {id} = useParams();
    const character = useSelector((state) => state.character)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCharacter(id));

        return () => {
            dispatch(cleanCharacter());
        }
    }, [])
    return (
        <>
            { character && 
                <div className={style.cardDetail}>
                    <div className={style.imageBox}>
                        <img src={character.image} alt=""  />
                    </div>
                    <div className={style.detailBox}>
                        <div className={style.nameBox}>
                            <span>{character.name}</span>
                        </div>
                        <div className={style.statusBox}>
                            { character.status === 'Alive' && <span className={style.dotStatusAlive}><GoDotFill /></span> }
                            { character.status === 'Dead' && <span className={style.dotStatusDead}><GoDotFill /></span> }
                            { character.status === 'unknown' && <span className={style.dotStatusUnknown}><GoDotFill /></span> }
                            
                            <span className={style.nameStatus}>{character.status}</span>
                        </div>
                        <div className={style.genderBox}>
                            <span className={style.nameGender}>Gender: {character.gender}</span>
                        </div>

                        <div className={style.extraBox}>
                            <ExtraDeail 
                                idLocation={character.location.url.split('/').slice(-1)[0]}
                                idOrigin={character.origin.url.split('/').slice(-1)[0]}  
                                idsEpisodes={character.episode.map((item) => item.split('/').slice(-1)[0])}  
                            />  

                        </div>
                    </div>
                </div>
            }
            
        </>
    )
}

export default CardDetail;