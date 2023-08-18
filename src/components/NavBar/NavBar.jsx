import { NavLink, useLocation } from 'react-router-dom'

import {
    SearchBar,
    Filter
} from '../../components'

import style from './NavBar.module.css'
import logo from './logo.png'
function NavBar (props) {
    const {
        onSearch, 
        onSearchRandom
    } = props;

    return (
        <>
            <div className={style.navBar}>
                <div className={style.navLeft}>
                    <div className={style.logo}>
                        <img src={logo} alt="" />
                    </div>
                    <div className={style.navLinks}>
                        <NavLink to='/home' className={style.link} >Home</NavLink>
                        <NavLink to='/favorites' className={style.link} >Favorites</NavLink>
                        <NavLink to='/discover' className={style.link} >Discover <span>NEW</span></NavLink>
                        <NavLink to='/about' className={style.link} >About</NavLink>
                    </div>
                </div>
                <div className={style.searchBar}>
                    {useLocation().pathname === '/home' && 
                        <SearchBar onSearch={onSearch} onSearchRandom={onSearchRandom} />
                    } 
                    {useLocation().pathname === '/favorites' && 
                        <Filter />
                    }    
                </div>
            </div>
        </>
    )
}

export default NavBar;