import { createBrowserRouter, Navigate } from "react-router-dom";
import Root from "../pages/Root";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Form from "../pages/Form/Form";
import SinglePage from "../pages/SinglePage/SinglePage";

export const router = (loggedIn, LogInAction) => {


    return createBrowserRouter([{
        path: '/',
        //element: < Root loggedIn={loggedIn} />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/employees', element: <Home /> },
            { path: '/new', element: <Form /> },
            { path: '/about', element: <About /> },
            { path: "/profile/:id", element: <SinglePage /> }
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