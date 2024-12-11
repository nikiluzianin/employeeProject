import '../Styles/EmployeeCard.css'
import { useState } from 'react'
import '../assets/star.png'
import '../assets/birthday-cake.png'
import Button from './Button'
import useAxiosRequest from '../services/useAxios'
import useEmployeeStatus from '../hooks/useEmployeeStatus'


function EmployeeCard({ id, name, role, department, location, startDate, onClick }) {
    const [displayStar, setDisplayStar] = useState(false);
    // const [timeWorking, setTimeWorking] = useState(((new Date() - new Date(startDate)) / (1000 * 60 * 60 * 24 * 365)));
    const [isEditing, setIsEditing] = useState(false);
    const [employeeData, setEmployeeData] = useState({
        roleType: role,
        departmentType: department,
        locationType: location,
    });
    const {
        isProbation,
        isAnniversary,
        timeWorking
    } = useEmployeeStatus(startDate);




    const imageSrc = "https://robohash.org/" + id;

    const cardClassName = "CardClass " + employeeData.departmentType.replace(/\s+/g, '');

    const clickHandler = () => {
        setDisplayStar((prev) => !prev);
        console.log("clicked " + id);

    }

    const {
        error,
        update
    } = useAxiosRequest("http://localhost:3002")

    const editHandler = () => {
        setIsEditing((prev) => !prev);
        update(`personsData/${id}`, {
            name: name,
            role: employeeData.roleType,
            department: employeeData.departmentType,
            location: employeeData.locationType,
            startDate: startDate
        })
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
                <Button text="More" onClick={onClick} />

                {isAnniversary && (
                    <>
                        <p className='secondaryText'>{Math.floor(timeWorking)} year anniversarry</p>
                        <img className="anniversarryImage" src="src/assets/birthday-cake.png" />
                    </>
                )}
                {isProbation && <p className='secondaryText'>Schedule probation review</p>}
                {displayStar ? <img className="promoteImage" src="src/assets/star.png" /> : <p></p>}
            </div>
        </>
    )
}

export default EmployeeCard