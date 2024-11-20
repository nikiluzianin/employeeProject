import { createBrowserRouter, Navigate } from "react-router-dom";
import Root from "../pages/Root";
import Home from "../pages/Home";
import About from "../pages/About";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Form from "../pages/Form";
import EmployeeList from "../components/EmployeeList";

export const router = (loggedIn, LogInAction) => {


    return createBrowserRouter([{
        path: '/',
        //element: < Root loggedIn={loggedIn} />,
        children: [
            { path: '/', element: <Home loggedIn={loggedIn} LogInAction={LogInAction} /> },
            { path: '/employees', element: <Home /> },
            { path: '/new', element: <Form /> },
            { path: '/about', element: <About /> },
            // { path: '/login', element: <Login LogInAction={LogInAction} /> },
        ],
        element: loggedIn ? < Root loggedIn={loggedIn} /> : <Navigate to="/login" />,
        errorElement: <ErrorPage />,

    },
    { path: '/login', element: <Login LogInAction={LogInAction} /> },
    ],
        {
            future: {
                v7_relativeSplatPath: true,
                v7_fetcherPersist: true,
                v7_normalizeFormMethod: true,
                v7_partialHydration: true,
                v7_skipActionErrorRevalidation: true,
            },
        }
    );
}