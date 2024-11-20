import '../Styles/EmployeeList.css'
import { useState } from 'react'
import EmployeeCard from './EmployeeCard.jsx'
import personsData from "../data/persons.js";
import Button from './Button.jsx';


function EmployeeList() {


    /*
    const departmentLeadsTemp = [[], []];
    personsData.forEach(person => {
        (departmentLeadsTemp[0].includes(person.department)) || (departmentLeadsTemp[0].push(person.department));
    });
    const [departmentLeads, serDepartmentLeads] = useState(departmentLeadsTemp);*/



    return (
        <>


            <div className="EmployeeCardSpace">
                {personsData.map((personData) => (
                    <EmployeeCard key={personData.id} {...personData} />
                ))}
            </div>




        </>
    )
}

export default EmployeeList