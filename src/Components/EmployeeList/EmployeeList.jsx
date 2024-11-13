import './EmployeeList.css'
import { useState } from 'react'
import EmployeeCard from '../EmployeeCard/EmployeeCard.jsx'
import personsData from "../../data/persons.js";
import Button from '../Button.jsx';


function EmployeeList() {
    const [status, setStatus] = useState(true);


    /*
    const departmentLeadsTemp = [[], []];
    personsData.forEach(person => {
        (departmentLeadsTemp[0].includes(person.department)) || (departmentLeadsTemp[0].push(person.department));
    });
    const [departmentLeads, serDepartmentLeads] = useState(departmentLeadsTemp);*/

    const toggleLogin = () => {
        setStatus((prev) => !prev);
    }

    return (
        <>

            <main>
                <Button text={status ? "Log out" : "Log in"} onClick={toggleLogin} />
                {status && <div className="EmployeeCardSpace">
                    {personsData.map((personData) => (
                        <EmployeeCard key={personData.id} {...personData} />
                    ))}
                </div>}
                {!status && <div>
                    <p>Log in please</p>
                </div>}

            </main>


        </>
    )
}

export default EmployeeList