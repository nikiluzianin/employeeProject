import '../Styles/EmployeeCard.css'
import { useState } from 'react'
import '../assets/star.png'
import '../assets/birthday-cake.png'
import Button from './Button'


function EmployeeCard({ id, name, role, department, location, startDate }) {
    const [displayStar, setDisplayStar] = useState(false);
    const [timeWorking, setTimeWorking] = useState(((new Date() - new Date(startDate)) / (1000 * 60 * 60 * 24 * 365)));
    const [isEditing, setIsEditing] = useState(false);
    const [employeeData, setEmployeeData] = useState({
        roleType: role,
        departmentType: department,
        locationType: location,
    });


    const imageSrc = "https://robohash.org/" + id;

    const cardClassName = "CardClass " + employeeData.departmentType.replace(/\s+/g, '');

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
        const { name, value } = e.target;
        //setRoleType(e.target.value);
        setEmployeeData((prevSate) => ({ ...prevSate, [name]: value }));
        console.log(e);
    }

    return (
        <>
            <div className={cardClassName}>
                <img className='profilePicture' src={imageSrc} />
                <h2>{name}</h2>



                {isEditing ? (
                    <>
                        <input name="roleType" type="text" value={employeeData.roleType} onChange={handleChange} />
                        <input name="departmentType" type="text" value={employeeData.departmentType} onChange={handleChange} />
                        <input name="locationType" type="text" value={employeeData.locationType} onChange={handleChange} />
                    </>
                ) : (
                    <>
                        <p> {employeeData.roleType} </p>
                        <p> {employeeData.departmentType}</p>
                        <p> {employeeData.locationType} </p>
                    </>
                )}

                <Button text={displayStar ? "Demote" : "Promote"} onClick={clickHandler} />
                <Button text={isEditing ? "Save" : "Edit"} onClick={editHandler} role="secondary" />
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