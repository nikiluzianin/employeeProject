import Header from '../Components/Header.jsx'
import Footer from '../Components/Footer.jsx'
import EmployeeList from '../Components/EmployeeList.jsx'
import { useState } from 'react'

function Home() {
    const [status, setStatus] = useState(true);

    const toggleLogin = () => {
        setStatus((prev) => !prev);
    }


    return (
        <>
            <Header status={status} onClickLogin={toggleLogin} />
            <main>
                {status && <div className='ListSpace'>
                    <EmployeeList />
                </div>}
                {!status && <div>
                    <p>Log in please</p>
                </div>}
            </main>
        </>
    )
}

export default Home
