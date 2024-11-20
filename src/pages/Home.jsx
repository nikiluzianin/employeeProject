import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import EmployeeList from '../components/EmployeeList.jsx'
import { useState } from 'react'
import Button from '../components/Button.jsx'
import Login from './Login.jsx'

import { Link, Navigate } from 'react-router-dom'

function Home({ LogInAction, loggedIn }) {


    return (
        <>
            <div className='ListSpace'>
                <EmployeeList />
            </div>
        </>
    )
    // <p><Login LogInAction={LogInAction} /></p>

    /*return (
        <div className='ListSpace'>
            <EmployeeList />
        </div>

        {loggedIn && <div className='ListSpace'>
                <EmployeeList />
            </div>}
            {!loggedIn && <div>
                <Navigate to="/login" />
            </div>}



    )*/

}

export default Home
