import { useParams, useNavigate } from "react-router-dom"
import Button from "../../components/Button/Button"
import { useEffect } from "react";
import useAxiosRequest from "../../services/useAxios";
import styles from "./SinglePage.module.css"


function SinglePage() {
    const { id } = useParams();
    const navigate = useNavigate();

    const {
        data: selectedPersonData,
        isLoading,
        error,
        read,
    } = useAxiosRequest(`http://localhost:3002`);

    useEffect(() => {
        read(`personsData/${id}`);
    }, []);

    return (
        <div className={styles.singlePage}>
            <div className={styles.personalCard}>
                <div className={styles.imageSide}></div>
                <div className={styles.infoSide}>
                    <h2>page for {(selectedPersonData || []).name}</h2>
                    <p>Position: {(selectedPersonData || []).role}</p>
                    <p>Department: {(selectedPersonData || []).location}</p>
                </div>
            </div>
            <Button onClick={() => navigate(-1)} text="Back" />

        </div>
    )
}

export default SinglePage