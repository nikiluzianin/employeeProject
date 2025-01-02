import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import styles from "./ErrorPage.module.css"


const ErrorPage = () => {

    const navigate = useNavigate();

    return (
        <div className={styles.error}>
            <h2>Error</h2>
            <p>
                Oh no, somethign went wrong.
            </p>
            <Button text={"Back"} onClick={() => navigate(-1)} />
        </div>
    );
}

export default ErrorPage