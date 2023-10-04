import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main";
import Home from "../Pages/Home/Home";

export const Route = createBrowserRouter([
    {
        path: '/', element: <Main />,
        children: [
            {
                path: '/', element: <Home />
            }
        ]
    }
])
