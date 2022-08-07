import { useContext } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import * as authService from '../../services/authService';
import styles from './Login.module.css';

const Login = () => {
    const { userLogin } = useContext(AuthContext)
    const navigate = useNavigate();

    const onLogin = (e) => {
        e.preventDefault();

        const {
            email,
            password
         } = Object.fromEntries(new FormData(e.target))

        authService.login(email, password)
            .then(authData => {
                userLogin(authData);
                navigate('/myPage')
            })
            .catch(() => {
                navigate('/404')
                alert('There is no such user!')
            });

    };

    return(
        <div className={styles['login-page']}>
            <div className={styles.form}>
                <form className={styles['login-form']} onSubmit={onLogin}>
                    <input name="email" type="text" placeholder="email"/>
                    <input name="password" type="password" placeholder="password"/>
                    <button>login</button>
                    <p className={styles.message}>Not registered? <Link to="/register"> Create an account</Link></p>
                </form>
            </div>
        </div>
    )
}

export default Login;