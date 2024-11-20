import Button from "../components/Button";
import "../styles/Form.css"
import { useState } from "react";

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
    }


    return (
        <>
            <form>
                <input name="name" type="text" placeholder="Input name" onChange={handleChange} />
                <input name="roleType" type="text" placeholder="Input role" onChange={handleChange} />
                <input name="departmentType" type="text" placeholder="Input department" onChange={handleChange} />
                <input name="locationType" type="text" placeholder="Input location" onChange={handleChange} />
                <Button type="button" text="Save" onClick={handleClick} />

            </form>
        </>
    )
}

export default Form