import { RouterProvider, useNavigate } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import { router } from "./routes/appRoute.jsx"
import { useState } from 'react'



function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  // manages if user is logged in or not


  const toggleLoggedIn = () => {
    setLoggedIn(true);
  }

  const router1 = router(loggedIn, toggleLoggedIn);

  return (
    <RouterProvider router={router1} future={{
      v7_startTransition: true,
    }} />
  )
}

export default App
