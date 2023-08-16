import { Link } from 'react-router-dom'

import style from './Footer.module.css'
import { FaReact, FaCss3Alt, FaHtml5 } from 'react-icons/fa'
import { AiFillFacebook, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai'
import { LuInstagram } from 'react-icons/lu'
const Footer = () => {


    return (
        <>
            <div className={style.footerBox}>
                <div className={style.leftBox}>
                    <div className={style.item}>
                        <Link to="https://www.soyhenry.com/" target="_blank" >
                            <span className={style.itemText}>soyhenry.com</span>
                        </Link>
                    </div>
                    <div className={style.item}>
                        <Link to="https://rickandmortyapi.com/" target="_blank" >
                            <span className={style.itemText}>rickandmortyapi.com</span>
                        </Link>
                        
                    </div>
                    <div className={style.item}>
                        
                        <span className={style.itemText}>Follow Us</span>
                    </div>


                    <div className={style.item}>
                        <AiFillFacebook className={style.itemIcon} />
                        <LuInstagram className={style.itemIcon} />
                        <AiFillLinkedin className={style.itemIcon} />
                        <AiFillYoutube className={style.itemIcon} />
                        
                    </div>
                </div>
                <div className={style.rightBox}>
                    <div className={style.item}>
                        <FaReact className={style.itemIcon} />
                        <span className={style.itemText}>React</span>
                    </div>

                    <div className={style.item}>
                        <FaHtml5 className={style.itemIcon} />
                        <span className={style.itemText}>HTML5</span>
                    </div>

                    <div className={style.item}>
                        <FaCss3Alt className={style.itemIcon} />
                        <span className={style.itemText}>CSS3</span>
                    </div>

                    
                    
                </div>
            </div>
            
        </>
    )
}

export default Footer;