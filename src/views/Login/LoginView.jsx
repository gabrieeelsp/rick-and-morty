import Form from '../../components/Form/Form'

import style from './LoginView.module.css'

const LoginView = (props) => {
    const {loginAttempt} = props;
    return (
        <>
            <div className={style.container}>
                <Form loginAttempt={loginAttempt} />
            </div>
            
        </>
    )
}

export default LoginView;