import '../Styles/EmployeeList.css'
import { useState, useEffect } from 'react'
import EmployeeCard from './EmployeeCard.jsx'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



function EmployeeList() {
    const navigate = useNavigate();
    const [personsData, setPersonsData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get("http://localhost:3002/personsData").
            then((response) => {
                setPersonsData(response.data);
                setIsLoading(false);
            })
    }, []);

    const goToProfile = (id) => {
        navigate(`/profile/${id}`);
    }

    return (
        <>
            <div className="EmployeeCardSpace">
                {isLoading ?
                    (
                        <p>Loading...</p>
                    ) : (
                        personsData.map((personData) => (
                            <EmployeeCard key={personData.id} {...personData} onClick={() => goToProfile(personData.id)} />
                        ))

                    )
                }

            </div>
        </>
    )
}

export default EmployeeList