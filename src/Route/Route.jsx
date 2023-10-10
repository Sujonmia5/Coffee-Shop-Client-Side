import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../layout/mainLayout";
import About from "../Pages/About/About";

export const Route = createBrowserRouter([
    {
        path: '/', element: <Main />,
        children: [
            {
                path: '/', element: <Home />
            },
            {
                path: '/about', element: <About />
            }

        ]
    }
])
