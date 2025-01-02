import styles from './EmployeeCard.module.css'
import { useState } from 'react'
import '../../assets/star.png'
import '../../assets/birthday-cake.png'
import Button from '../Button/Button'
import useAxiosRequest from '../../services/useAxios'
import useEmployeeStatus from '../../hooks/useEmployeeStatus'


function EmployeeCard({ id, name, role, department, location, startDate, onClick }) {
    const [displayStar, setDisplayStar] = useState(false);
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

    const cardClassName = styles.CardClass + " " + styles[employeeData.departmentType.replace(/\s+/g, '')];


    const clickHandler = () => {
        setDisplayStar((prev) => !prev);
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
                <img className={styles.profilePicture} src={imageSrc} />
                <h3>{name}</h3>



                {isEditing ? (
                    <>
                        <input name="roleType" type="text" value={employeeData.roleType} onChange={handleChange} />
                        <input name="departmentType" type="text" value={employeeData.departmentType} onChange={handleChange} />
                        <input name="locationType" type="text" value={employeeData.locationType} onChange={handleChange} />
                        <Button text={displayStar ? "Demote" : "Promote"} onClick={clickHandler} id="displayStarButton" />
                        <Button text={"Save"} onClick={editHandler} />
                        <Button text="More" onClick={onClick} id="moreButton" isButtonDisabled={true} role="secondary" />
                    </>
                ) : (
                    <>
                        <p> {employeeData.roleType} </p>
                        <p> {employeeData.departmentType}</p>
                        <p> {employeeData.locationType} </p>
                        <Button text={displayStar ? "Demote" : "Promote"} onClick={clickHandler} id="displayStarButton" />
                        <Button text={"Edit"} onClick={editHandler} />
                        <Button text="More" onClick={onClick} id="moreButton" isButtonDisabled={false} role="secondary" />
                    </>
                )}

                {isAnniversary && (
                    <>
                        <p className={styles.secondaryText}>{Math.floor(timeWorking)} year anniversarry</p>
                        <img className={styles.anniversarryImage} src="dist/assets/birthday-cake-UJEH_DQs.png" />
                    </>
                )}
                {isProbation && <p className={styles.secondaryText}>Schedule probation review</p>}
                {displayStar ? <img className={styles.promoteImage} src="dist/assets/star-BuQvW_pG.png" /> : <p></p>}
            </div>
        </>
    )
}

export default EmployeeCard