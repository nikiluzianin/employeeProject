import Button from "../components/Button"
import { useNavigate } from "react-router-dom"

const Login = ({ LogInAction }) => {
    const navigate = useNavigate();

    const loginHandler = () => {
        LogInAction();
        navigate('/');
    }

    return (
        <>
            <Button onClick={loginHandler} text="Log in" />
        </>
    )
}

export default Login