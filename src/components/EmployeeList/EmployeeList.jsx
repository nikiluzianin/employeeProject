import styles from './EmployeeList.module.css'
import { useState, useEffect, useDebugValue } from 'react'
import EmployeeCard from '../EmployeeCard/EmployeeCard.jsx'
import { useNavigate } from 'react-router-dom';
import useAxiosRequest from '../../services/useAxios.js';



function EmployeeList() {
    const navigate = useNavigate();

    const {
        data: personsData,
        isLoading,
        error,
        read,
    } = useAxiosRequest("http://localhost:3002");


    useEffect(() => {
        read("personsData");
    }, []);

    const goToProfile = (id) => {
        navigate(`/profile/${id}`);
    }

    return (
        <>
            <div className={styles.EmployeeCardSpace}>
                {isLoading && <p>Loading...</p>}
                {error && <p>Error...</p>}


                {(personsData || []).map((personData) => (
                    <EmployeeCard key={personData.id} {...personData} onClick={() => goToProfile(personData.id)} />)
                )}
                {/*(personsData || []).map((personData) => {
                    // I can add stuff here
                    return <EmployeeCard key={personData.id} {...personData} onClick={() => goToProfile(personData.id)} />
                })*/}

            </div >
        </>
    )
}

export default EmployeeList