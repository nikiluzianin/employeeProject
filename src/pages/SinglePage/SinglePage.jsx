import { useParams, useNavigate } from "react-router-dom"
import Button from "../../components/Button/Button"
import axios from 'axios';
import { useState, useEffect } from "react";


function SinglePage() {
    const [selectedPersonData, setSelectedPersonData] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3002/personsData/${id}`).
            then((response) => {
                setSelectedPersonData(response.data);
                setIsLoading(false);
            })
    }, []);

    return (
        <div className="singlePage">
            <div className="personalCard">
                <div className="imageSide"></div>
                <div className="infoSide">
                    <h2>page for {selectedPersonData.name}</h2>
                    <p>Position: {selectedPersonData.role}</p>
                    <p>Department: {selectedPersonData.location}</p>
                </div>
            </div>
            <Button onClick={() => navigate(-1)} text="Back" />

        </div>
    )
}

export default SinglePage