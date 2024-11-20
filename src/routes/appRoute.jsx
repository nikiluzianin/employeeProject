import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import Home from "../pages/Home";
import About from "../pages/About";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";

export const router = createBrowserRouter([{
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
        { path: '/employees', element: <Home /> },
        { path: '/about', element: <About /> },
        { path: '/login', element: <Login /> }
    ],
},
]);