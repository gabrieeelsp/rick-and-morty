import { useEffect, useState } from 'react';
import style from './ExtraDetail.module.css'

const ExtraDeail = (props) => {
    const { idLocation, idOrigin, idsEpisodes } = props;

    const [ tabSelector, setTabSelector ] = useState('location');
    const [ tabText, setTabText ] = useState('');

    useEffect(() => {

        switch (tabSelector) {
            case 'location':
                if ( idLocation ) {
                    fetch(`https://rickandmortyapi.com/api/location/${idLocation}`)
                        .then((resp) => resp.json())
                        .then((data) => setTabText(data))
                } else {
                    setTabText('')
                }                
                return

            case 'origin':
                if ( idOrigin ) {
                    fetch(`https://rickandmortyapi.com/api/location/${idOrigin}`)
                        .then((resp) => resp.json())
                        .then((data) => setTabText(data))
                } else {
                    setTabText('')
                }                
                return
            
            case 'episodes':
                //console.log(idsEpisodes)
                //console.log(`https://rickandmortyapi.com/api/episode/${idsEpisodes}`)
                fetch(`https://rickandmortyapi.com/api/episode/${idsEpisodes}`)
                    .then((resp) => resp.json())
                    .then((data) => setTabText(data))
                return
        }

    }, [tabSelector])

    const handleClickTabSelector = (event) => {
        setTabSelector(event.target.id);
    } 

    return (
        <>
            <div className={style.buttonsBox}>
                <span 
                    onClick={handleClickTabSelector}
                    className={`${style.button}  ${ tabSelector === 'location' ? 'active' : '' }`} 
                    id='location'
                    >Location</span>
                <span 
                    onClick={handleClickTabSelector}
                    className={`${style.button}  ${ tabSelector === 'origin' ? 'active' : '' }`} 
                    id='origin'
                    >Origin</span>
                <span 
                    onClick={handleClickTabSelector}
                    className={`${style.button}  ${ tabSelector === 'episodes' ? 'active' : '' }`} 
                    id='episodes'
                    >Episodes</span>

            </div>
            <div className={style.extraDetail} >
                {
                    tabSelector === 'location' && (
                        <div className={style.locationBox}>
                            <span>Name: {tabText.name ? tabText.name : 'unknown'}</span>
                            <span>Type: {tabText.type}</span>
                            <span>Dimention: {tabText.dimension}</span>
                        </div>
                    )
                }  
                {
                    tabSelector === 'origin' && (
                        <div className={style.locationBox}>
                            <span>Name: {tabText.name ? tabText.name : 'unknown'}</span>
                            <span>Type: {tabText.type}</span>
                            <span>Dimention: {tabText.dimension}</span>
                        </div>
                    )
                }
                {
                    ( (tabSelector === 'episodes' && Array.isArray(tabText) ) || (tabSelector === 'episodes' && tabText.air_date ) ) && (
                        <div className={style.episodesBox}>
                            <table>
                                <tbody>
                                {   Array.isArray(tabText) &&
                                    tabText.map((episode) => <tr key={episode.id}><td className={style.tdEpisode}>[{episode.episode}]</td><td>{episode.name}</td></tr>)
                                }
                                {   tabText.air_date &&
                                    <tr><td>[{tabText.episode}]</td><td>{tabText.name}</td></tr>
                                }    
                                </tbody>
                            </table>
                            
                        </div>
                    )
                }
                          
            </div>
        </>
    )
}

export default ExtraDeail;