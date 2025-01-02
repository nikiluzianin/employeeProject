import styles from './Header.module.css'
import { Link, NavLink } from 'react-router-dom'


function Header({ loggedIn }) {

    return (
        <header className={styles.header}>
            <Link to='/' ><div className={styles.logo}>AMAZING LOGO</div></Link>

            <div className={styles.navigation}>

                <NavLink
                    to='/'
                >
                    Employees
                </NavLink>

                <NavLink
                    to='/new'
                >
                    New employee
                </NavLink>

                <NavLink
                    to='/about'

                >
                    About
                </NavLink>
            </div>



        </header>
    );
}

export default Header