import { RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.jsx'
import { router } from "./routes/appRoute.jsx"



function App() {

  return (
    <RouterProvider router={router} />
  )


  /*
    return (
      <>
        <Home />
  
      </>
    )*/
}

export default App
