import { Link, NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

import { useAuthContext } from '../../contexts/AuthContext';

const Navigation = () => {

    const { user } = useAuthContext(); 


    const setNavStyle = ({isActive}) => {
        return isActive
            ? styles['active-link']
            : undefined
    }

    return (
        <nav className={styles.nav}>
            <div className={styles.guest}>
                {user.email && <span>{`Welcome, ${user.email}!`}</span>}
                {user.email
                ? <div id="user">
                    <NavLink className={setNavStyle} to="/logout">Logout</NavLink>
                    <NavLink className={setNavStyle} to="/create">Create Post</NavLink>
                    <NavLink className={setNavStyle} to="/myPage">My Page</NavLink>
                  </div>
                : <div id="guest"> 
                    <NavLink className={setNavStyle} to="/register">Register</NavLink>
                    <NavLink className={setNavStyle} to="/login">Login</NavLink>
                  </div>
                }
                <NavLink className={setNavStyle} to="/catalog">Catalog</NavLink>
            </div>
        </nav>
    )
}

export default Navigation;