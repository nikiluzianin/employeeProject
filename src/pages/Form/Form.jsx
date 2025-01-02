import Button from "../../components/Button/Button";
import styles from "./Form.module.css"
import { useState } from "react";
import useAxiosRequest from "../../services/useAxios";


const Form = () => {
    const [newEmployeeData, setNewEmployeeData] = useState({
        name: "",
        roleType: "",
        departmentType: "",
        locationType: "",
        salary: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewEmployeeData((prevSate) => ({ ...prevSate, [name]: value }));
    }

    const {
        create,
        error
    } = useAxiosRequest("http://localhost:3002");

    const handleClick = () => {
        create("personsData", {
            name: newEmployeeData.name,
            role: newEmployeeData.roleType,
            department: newEmployeeData.departmentType,
            startDate: new Date(),
            location: newEmployeeData.locationType,
            salary: newEmployeeData.salary

        });
        // add notification that a person is added and empty the fields
    }

    return (
        <>
            <form className={styles.form}>
                <div className={styles.line}>
                    <label name="name">Name:</label>
                    <input name="name" type="text" placeholder="Input name" onChange={handleChange} />
                </div>
                <div className={styles.line}>
                    <label name="name">Role:</label>
                    <input name="roleType" type="text" placeholder="Input role" onChange={handleChange} />
                </div>
                <div className={styles.line}>
                    <label name="name">Department:</label>
                    <input name="departmentType" type="text" placeholder="Input department" onChange={handleChange} />
                </div>
                <div className={styles.line}>
                    <label name="name">Location:</label>
                    <input name="locationType" type="text" placeholder="Input location" onChange={handleChange} />
                </div>
                <div className={styles.line}>
                    <label name="name">Salary:</label>
                    <input name="name" type="text" placeholder="Input salary" onChange={handleChange} />
                </div>
                <Button type="button" text="Save" onClick={handleClick} />

            </form>
        </>
    )
}

export default Form