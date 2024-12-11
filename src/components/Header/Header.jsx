import './Header.css'
import { Link, NavLink } from 'react-router-dom'


function Header({ loggedIn }) {

    return (
        <header>
            <Link to='/' ><div className="logo">LOGO</div></Link>

            <div className="navigation">

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