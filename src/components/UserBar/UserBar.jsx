import { Link } from "react-router-dom";

import style from './UserBar.module.css'

const UserBar = (props) => {
    const { 
        email,
        onLogOut
    } = props;

    const handleClickLoogOut = () => {
        onLogOut();
    }
    return (
        <>
            <div className={style.userBar}>
                <span className={style.email}>{email}</span>
                <span className={style.logout} onClick={handleClickLoogOut} >Salir</span>
            </div>
        </>
    )
}

export default UserBar;