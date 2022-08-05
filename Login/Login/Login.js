import { Link} from 'react-router-dom';
import styles from './Login.module.css';

const Login = () => {

    const onLogin = (e) => {
        e.preventDefault();

        const {
            email,
            password
         } = Object.fromEntries(new FormData(e.target))

        console.log(email);
        console.log(password)

    }

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

 


    /*   return (
    <div className="login-page">
        <div className="form">
            <form className="login-form">
                <input type="text" placeholder="username"/>
                <input type="password" placeholder="password"/>
                <button>login</button>
                <p className="message">Not registered? <a href="#">Create an account</a></p>
            </form>
        </div>
    </div>
    )
    /*   return (
    <section>
        <form id="login" onSubmit={onLogin}>
            <div className={styles['login-container']}>
                <h1>Login</h1>

                <div className={styles['emailField']}>
                    <label htmlFor="email"> Email: </label>
                    <input type="email" id="email" name="email" placeholder="john@abv.bg"/>
                </div>

                <div className="passwordField">
                    <label htmlFor="password"> Password: </label>
                    <input type="password" name="password" id="password-login" />
                </div>
                
                <div className="button">
                    <input className="btn-submit" type="submit" defaultValue="Login" />
                </div>

                <p>
                    <span>
                        Click <Link to="/register">here</Link>, if you don't have a profile.
                    </span>
                </p>
            </div>
        </form>
    </section>
    )*/
}

export default Login;