import { Link } from 'react-router-dom';
import styles from './Register.module.css';

const Register = () => {


    const onRegister = (e) => {
        e.preventDefault();

        const {
            email,
            password
         } = Object.fromEntries(new FormData(e.target))

        console.log(email);
        console.log(password)

    }

    return(
            <div className={styles.formContainer}>
              <form className={styles.form} id="form" action="#" method="POST" >
                <fieldset>
                  <h1>Registration Form</h1>
                  <div className={styles.fullName} id="fullName">
                    <input type="text" name="fName" id="fName" placeholder="First Name" required />
                    <input type="text" name="lName" id="lName" placeholder="Last Name" required />
                  </div>
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

    /*return (
    <section>
        <form id="register" onSubmit={onRegister}>
            <div className={styles['register-container']}>
                <h1>Register</h1>

                <div className={styles['emailField']}>
                    <label htmlFor="email"> Email: </label>
                    <input type="email" id="email" name="email" placeholder="john@abv.bg"/>
                </div>

                <div className="passwordField">
                    <label htmlFor="password"> Password: </label>
                    <input type="password" name="password" id="password-register" />
                </div>

                <div className="passwordConfirmField">
                    <label htmlFor="password-confirmation"> Confirm Password: </label>
                    <input type="password" name="password-confirmation" id="password-confirmation" />
                </div>
                
                <div className="button">
                    <input className="btn-submit" type="submit" defaultValue="Register" />
                </div>

                <p>
                    <span>
                        Click <Link to="/login">here</Link>, if you already have a profile.
                    </span>
                </p>
            </div>
        </form>
    </section>
    )*/
}

export default Register;