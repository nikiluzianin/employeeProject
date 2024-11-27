import { useParams, useNavigate } from "react-router-dom"
import Button from "./Button"
import personsData from "../data/persons"

function SinglePage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const selectedPersonData = personsData.find(personData => personData.id == (+id));

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