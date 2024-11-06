import { useState } from 'react'
import './App.css'
import EmployeeCard from '../EmployeeCard/EmployeeCard.jsx'
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'
import personsData from "../data/persons";
import { useState } from 'react'

function App() {
  const [status, setStatus] = useState(false);

  // const buttonLog =
  // const [loggedIn, setLoggedIn] = useState()

  const clickHandler = () => {
    if (!status) {
      document.querySelector(".buttonLogIn").textContent = "Log out";
      setStatus(true);
    } else {
      document.querySelector(".buttonLogIn").textContent = "Log in";
      setStatus(false);
    }
  }


  return (
    <>
      <Header />
      <main>
        =
        {status && <div className="EmployeeCardSpace">
          {personsData.map((personData) => (

            <EmployeeCard fullName={personData.fullName} role={personData.title} field1={personData.animal} />

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

export default App
