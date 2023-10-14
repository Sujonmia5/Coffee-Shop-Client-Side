import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../layout/mainLayout";
import About from "../Pages/About/About";
import Menu from "../Pages/Menu/Menu";
import Reservation from "../Pages/Reservation/Reservation";
import Blog from "../Pages/Blog/Blog";

export const Route = createBrowserRouter([
    {
        path: '/', element: <Main />,
        children: [
            {
                path: '/', element: <Home />
            },
            {
                path: '/about', element: <About />
            },
            {
                path: '/menu', element: <Menu />
            },
            {
                path: '/reservation', element: <Reservation />
            },
            {
                path: '/blog', element: <Blog />
            },
        ]
    }
])
