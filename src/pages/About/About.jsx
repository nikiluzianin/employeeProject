import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import styles from "./About.module.css"

const About = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className={styles.about}>
                <h2>About the Employee app</h2>
                <div className={styles.text}>
                    <p>
                        This app allows to login and see the employees of the company.

                    </p>
                    <p>The employees can be edited, promoted and demoted.</p>
                    <p>New employees can be added to the base and the info about one emplyee can be examined more closely</p>
                </div>
                <Button text={"Back"} onClick={() => navigate(-1)} />
            </div>
        </>
    );
}

export default About