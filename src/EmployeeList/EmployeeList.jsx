import './EmployeeList.css'
import EmployeeCard from '../EmployeeCard/EmployeeCard.jsx'
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'

function EmployeeList() {
    return (
        <>
            <Header />
            <main>

                <div className="EmployeeCardSpace">
                    <EmployeeCard fullName="Nikita L" role="Coder" department="IT" field1="something" field2="somneting else" />
                    <EmployeeCard fullName="Not Nikita L" role="Not Coder" department="Not IT" field1="something different" field2="somneting else different" />
                    <EmployeeCard fullName="bibi" role="pro" department="sports" field1="lala" field2="lala else" />
                </div>
            </main>
            <Footer />

        </>
    )
}

export default EmployeeList