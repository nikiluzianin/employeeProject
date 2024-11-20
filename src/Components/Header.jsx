import '../Styles/Header.css'
import Button from './Button';
import { Link, NavLink } from 'react-router-dom'


function Header({ loggedIn }) {


    //     <Link to="/new"><Button text="Add new" /> </Link>
    //             <Button text={status ? "Log out" : "Log in"} onClick={onClickLogin} />
    return (
        <header>
            <Link to='/' ><div className="logo">LOGO</div></Link>

            <div className="navigation">

                <NavLink
                    to='/employees'
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