import './EmployeeList.css'
import { useState } from 'react'
import EmployeeCard from '../EmployeeCard/EmployeeCard.jsx'
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'
import personsData from "../data/persons";


function EmployeeList() {
    const [status, setStatus] = useState(false);

    const clickHandler = () => {
        if (!status) {
            document.querySelector(".LogInButton").textContent = "Log out";
            setStatus(true);
        } else {
            document.querySelector(".LogInButton").textContent = "Log in";
            setStatus(false);
        }
    }


    return (
        <>
            <Header />
            <main>
                <button className="LogInButton" onClick={clickHandler}>Log in</button>
                {status && <div className="EmployeeCardSpace">
                    {personsData.map((personData) => (

                        <EmployeeCard key={personData.id} id={personData.id} name={personData.name} role={personData.role} department={personData.department} startDate={personData.startDate} location={personData.location} />

                    ))}
                </div>}
                {!status && <div>
                    <p>Log in please</p>
                </div>}

            </main>
            <Footer />

        </>
    )
}

export default EmployeeList