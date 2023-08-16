
import { useState } from "react";

import style from './SearchBar.module.css'
import { FiSend } from 'react-icons/fi';
import { GiPerspectiveDiceSixFacesRandom } from 'react-icons/gi';

const SearchBar = (props) => {
    const {onSearch, onSearchRandom} = props;

    const [id, setId] = useState('');

    const handleChande = (event) => {
        setId(event.target.value);
    }

    const handleKeyUp = (event) => {
        if ( event.key === 'Enter' ) {
            onSearch(id);
            setId('')
        }
    } 

    const handleClick = () => {
        onSearch(id);
        setId('')
    }

    return (
        <>
            <div className={style.searchBox}>
                <div className={style.searchInputBox}>
                <input value={id} className={style.searchInput} onKeyUp={handleKeyUp} type="text" onChange={handleChande} />
                
                <button className={style.searchButton} onClick={handleClick}  ><FiSend /></button>
                </div>
                <button className={`${style.searchButton} ${style.randomButton}`} onClick={onSearchRandom} ><GiPerspectiveDiceSixFacesRandom /></button>
            </div>
        </>
    )
}

export default SearchBar;