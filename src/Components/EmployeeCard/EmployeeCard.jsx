import './EmployeeCard.css'
import { useState } from 'react'
import '../../assets/star.png'
import '../../assets/birthday-cake.png'
import Button from '../Button'


function EmployeeCard({ id, name, role, department, location, startDate }) {
    const [displayStar, setDisplayStar] = useState(false);
    const [timeWorking, setTimeWorking] = useState(((new Date() - new Date(startDate)) / (1000 * 60 * 60 * 24 * 365)));
    const [isEditing, setIsEditing] = useState(false);
    const [roleType, setRoleType] = useState(role);

    const imageSrc = "https://robohash.org/" + id;

    const timeDependancy = [false, false];

    if (timeWorking <= 0.5) (timeDependancy[1] = true)
    else (Math.floor(timeWorking) % 5 == 0) && (timeDependancy[0] = true);

    const clickHandler = () => {
        setDisplayStar((prev) => !prev);
        console.log("clicked " + id);

    }

    const editHandler = () => {
        setIsEditing((prev) => !prev);
    }

    const handleChange = (e) => {
        setRoleType(e.target.value);
        console.log(e);
    }

    return (
        <>
            <div className="CardClass">
                <img className='profilePicture' src={imageSrc} />
                <h2>{name}</h2>

                {isEditing ? (
                    <input type="text" value={roleType} onChange={handleChange} />
                ) : (
                    <p> {roleType} at {department}</p>
                )}
                <p> {location} </p>
                <Button text={displayStar ? "Demote" : "Promote"} onClick={clickHandler} />
                <Button text={isEditing ? "Save" : "Edit"} onClick={editHandler} />
                {timeDependancy[0] && (
                    <>
                        <p className='secondaryText'>{Math.floor(timeWorking)} year anniversarry</p>
                        <img className="anniversarryImage" src="src/assets/birthday-cake.png" />
                    </>
                )}
                {timeDependancy[1] && <p className='secondaryText'>Schedule probation review</p>}
                {displayStar ? <img className="promoteImage" src="src/assets/star.png" /> : <p></p>}
            </div>
        </>
    )
}

export default EmployeeCard