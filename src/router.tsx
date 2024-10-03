import { createBrowserRouter } from "react-router-dom";
import TestPage from "./pages/TestPage";
import FrontPage from "./pages/FrontPage";
import Layout from "./pages/Layout";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { path: '/', element: <FrontPage /> },
        ]
    },
    {
        path: '/test',
        element: <TestPage />
    }
])

export default router;