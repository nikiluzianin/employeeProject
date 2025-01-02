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

    const startedWorkingDate = (selectedPersonData || []).startDate?.split('T')[0];
    const imageSrc = "https://robohash.org/" + id;

    useEffect(() => {
        read(`personsData/${id}`);
    }, []);



    return (
        <div className={styles.singlePage}>
            <div className={styles.personalCard}>
                <div className={styles.imageSide}>
                    <img className={styles.profilePicture} src={imageSrc} />
                </div>


                <div className={styles.infoSide}>
                    <h2>Name: {(selectedPersonData || []).name}</h2>
                    <p>Position: {(selectedPersonData || []).role}</p>
                    <p>Department: {(selectedPersonData || []).department}</p>
                    <p>Location: {(selectedPersonData || []).location}</p>
                    <p>Salary: {(selectedPersonData || []).salary}</p>
                    <p>Started working: {startedWorkingDate}</p>

                </div>
            </div>
            <Button onClick={() => navigate(-1)} text="Back" />

        </div>
    )
}

export default SinglePage