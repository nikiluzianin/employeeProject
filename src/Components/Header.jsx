import '../Styles/Header.css'
import Button from './Button';

function Header({ status, onClickLogin }) {
    return (
        <header>
            <div className="logo">LOGO</div>
            <Button text={status ? "Log out" : "Log in"} onClick={onClickLogin} />

        </header>
    );
}

export default Header