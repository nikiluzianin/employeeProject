import Button from "../components/Button";
import "../styles/Form.css"
import { useState } from "react";
import axios from 'axios';


const Form = () => {
    const [newEmployeeData, setNewEmployeeData] = useState({
        name: "",
        roleType: "",
        departmentType: "",
        locationType: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewEmployeeData((prevSate) => ({ ...prevSate, [name]: value }));
    }

    const handleClick = () => {
        console.log(newEmployeeData);
        axios.post("http://localhost:3002/personsData", {
            name: newEmployeeData.name,
            role: newEmployeeData.roleType,
            department: newEmployeeData.departmentType,
            startDate: new Date(),
            location: newEmployeeData.locationType,

        })
        console.log(new Date());
    }


    return (
        <>
            <form>
                <div className="line">
                    <label name="name">Name:</label>
                    <input name="name" type="text" placeholder="Input name" onChange={handleChange} />
                </div>
                <div className="line">
                    <label name="name">Role:</label>
                    <input name="roleType" type="text" placeholder="Input role" onChange={handleChange} />
                </div>
                <div className="line">
                    <label name="name">Department:</label>
                    <input name="departmentType" type="text" placeholder="Input department" onChange={handleChange} />
                </div>
                <div className="line">
                    <label name="name">Location:</label>
                    <input name="locationType" type="text" placeholder="Input location" onChange={handleChange} />
                </div>
                <Button type="button" text="Save" onClick={handleClick} />

            </form>
        </>
    )
}

export default Form