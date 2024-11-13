import './App.css'
import Header from './Components/Header/Header.jsx'
import Footer from './Components/Footer/Footer.jsx'
import EmployeeList from './Components/EmployeeList/EmployeeList.jsx'

function App() {


  return (
    <>
      <Header />
      <div>
        <EmployeeList />
      </div>
      <Footer />
    </>
  )
}

export default App
