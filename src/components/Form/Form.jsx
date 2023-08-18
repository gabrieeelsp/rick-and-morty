import { useState } from "react";

import { validateEmail, validatePassword } from "./Validations";

import style from "./Form.module.css"
import logo from '../NavBar/logo.png'
import {FaUserAlt, FaLock, FaEye, FaEyeSlash} from 'react-icons/fa'


const Form = (props) => {
    const {loginAttempt} = props;

    const [userData, setUserData] = useState({
        email: 'prueba@mail.com',
        password: '1234567',
    })
    const [errors, setErrors] = useState({
        email: '',
        password: '',
    })

    const [ errorLogin, setErrorLogin ] = useState(false);
    const [ showPassword, setShowPassword ] = useState(false);

    const handleClickPassword = () => {
        setShowPassword(!showPassword);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        //validar ...

        if ( validateEmail(userData.email) === '' && validatePassword(userData.password) === '' ) {
            const resp = loginAttempt(userData);
            if (!resp) {
                setErrorLogin(true)
            }
        } else {
            console.log('Existen errores en el formulario.')
        }
        


    }

    const handleChange = (event) => {
        setErrorLogin(false);

        const property = event.target.name;
        const value = event.target.value;
        setUserData({...userData, [property]: value});

        if ( property === 'email' ) setErrors({...errors, email: validateEmail(value)});

        if ( property === 'password' ) setErrors({...errors, password: validatePassword(value)});
        
    }

    return (
        <>
        <div className={style.card} >
            <div className={style.cardLeft}>
                <div className={style.logoBox}>
                    <img src={logo} className={style.logo} alt="" />
                </div>
                <span>The Rick and Morty APP</span>
            </div>
            
            <div className={style.cardRight}>
            <div className={style.line}></div>
                <div className={style.greeting}>
                
                    <FaUserAlt className={style.grretingIcon} />
                    <span>LOGIN</span>
                    
                </div>
                
                <form onSubmit={handleSubmit} >
                    <div className={style.inputBox}  >
                        <div className={style.inputBoxInt}>
                            <FaUserAlt className={style.inputIcon} />
                            <input type="text" name="email" placeholder="Email..." value={userData.email} onChange={handleChange} />
                        </div>
                        
                        <div className={`${style.errorBox} ${errors.email ? style.hasError : '' }`} > 
                            <span className={style.errorText}>{ errors.email === '' ? 'No error' : errors.email}</span>
                        </div>
                    </div>
                    <div className={style.inputBox}  >
                        
                    <div className={style.inputBoxInt}>
                            <FaLock className={style.inputIcon} />
                            <input type={showPassword ? 'text' : 'password'} name="password" placeholder="Password..." value={userData.password} onChange={handleChange} />
                            { showPassword ? 
                                <FaEyeSlash onClick={handleClickPassword} className={style.eyeIcon} /> 
                                :
                                <FaEye onClick={handleClickPassword} className={style.eyeIcon} />
                            }
                            
                        </div>
                        
                        <div className={`${style.errorBox} ${errors.password ? style.hasError : '' }`} > 
                            <span className={style.errorText}>{ errors.password === '' ? 'No error' : errors.password}</span>
                        </div>
                    </div>
                    <div className={style.buttonsBox}>
                        <input className={style.button} type="submit" value='Aceptar' />
                        <span className={`${errorLogin ? 'show' : ''}`} >¡Login error!</span>
                    </div>
                </form>
                
            </div>

        </div>
            
        </>
    )
}

export default Form;