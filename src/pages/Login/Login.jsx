import Button from "../../components/Button/Button"
import { useNavigate } from "react-router-dom"
import styles from "./Login.module.css"

const Login = ({ LogInAction }) => {
    const navigate = useNavigate();

    const loginHandler = () => {
        LogInAction();
        navigate('/');
    }

    return (
        <>
            <div className={styles.loginSpace} >
                <h2>Slide into Employee app</h2>
                <Button className={styles.loginButton} onClick={loginHandler} text="Log in" />
            </div>
        </>
    )
}

export default Login