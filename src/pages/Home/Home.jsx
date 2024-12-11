
import EmployeeList from '../../components/EmployeeList/EmployeeList.jsx'
// import Login from './Login.jsx'


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
