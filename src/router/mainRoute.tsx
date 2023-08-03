import {createBrowserRouter} from "react-router-dom"

import SigIn from "../pages/auth/SigIn"
import Layout from "../components/common/Layout"
import Register from "../pages/auth/Register"

export const mainRoute= createBrowserRouter([
    {
        path: "/register",
        element: <Register/>
    },
    {
        path: "/sign-in",
        element: <SigIn/>
    },
])