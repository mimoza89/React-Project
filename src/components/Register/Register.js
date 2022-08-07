import { useNavigate } from 'react-router-dom';
import * as authService from '../../services/authService';
import { withAuth } from '../../contexts/AuthContext';
import styles from './Register.module.css';

const Register = ( { auth } ) => {
    const navigate = useNavigate();

    const onRegister = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target)

        const email = formData.get('email')
        const password = formData.get('password')
        const confirmPass = formData.get('confirm-pass')

        if (password !== confirmPass) {
            return window.alert('Passwords don\'t match!');
        }

        authService.register(email, password)
            .then(authData => {
                auth.userLogin(authData);
                navigate('/');
            });

    }

    return(
            <div className={styles.formContainer}>
              <form className={styles.form} id="form" action="#" method="POST" onSubmit={onRegister}>
                <fieldset>
                  <h1>Registration Form</h1>
                  <div  className={styles.otherInputs} id="otherInputs">
                    <input type="email" name="email" id="email" placeholder="Email Address" required />
                    <input type="password" name="password" id="password" placeholder="Password" required />
                    <input type="password" name="confirm-pass" id="confirm-pass" placeholder="Confirm Password" required />
                  </div>
                  <br /><br />
                  <input className={styles.submit} type="submit" name="submit" id="submit" />
                </fieldset>
              </form>
            </div>
    )
}


const RegisterWithAuth = withAuth(Register);

export default RegisterWithAuth;