import { useState } from "react";

import { validateEmail, validatePassword } from "./Validations";

import style from "./Form.module.css"
import logo from '../NavBar/logo.png'


const Form = (props) => {
    const {loginAttempt} = props;

    const [userData, setUserData] = useState({
        email: 'prueba@mail.com',
        password: '123456',
    })
    const [errors, setErrors] = useState({
        email: '',
        password: '',
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        //validar ...

        if ( validateEmail(userData.email) === '' && validatePassword(userData.password) === '' ) {
            loginAttempt(userData);
        } else {
            console.log('Existen errores en el formulario.')
        }
        


    }

    const handleChange = (event) => {
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
            </div>
            
            <div className={style.cardRight}>
                
                
                <form onSubmit={handleSubmit} >
                    <div className={style.inputBox}  >
                        
                        <input type="text" name="email" placeholder="Email..." value={userData.email} onChange={handleChange} />
                        <div className={`${style.errorBox} ${errors.email ? style.hasError : '' }`} > 
                            <span className={style.errorText}>{ errors.email === '' ? 'No error' : errors.email}</span>
                        </div>
                    </div>
                    <div className={style.inputBox}  >
                        
                        <input type="text" name="password" placeholder="Password..." value={userData.password} onChange={handleChange} />
                        <div className={`${style.errorBox} ${errors.password ? style.hasError : '' }`} > 
                            <span className={style.errorText}>{ errors.password === '' ? 'No error' : errors.password}</span>
                        </div>
                    </div>
                    <button type="submit">Aceptar</button>
                </form>
                
            </div>

        </div>
            
        </>
    )
}

export default Form;