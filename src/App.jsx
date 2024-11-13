import './App.css'
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import EmployeeList from './Components/EmployeeList.jsx'

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
