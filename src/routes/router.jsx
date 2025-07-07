import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import About from "../pages/Home/About/About";
import Skills from "../pages/Home/Skills/Skills";
import ContactUs from "../pages/Home/ContactUs/ContactUs";
import MyProjects from "../pages/Home/MyProjects/MyProjects";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                path: "/",
                Component: Home
            },
            {
                path: "/about",
                element: <About></About>
            },
          {
            path: "/skills",
            element: <Skills></Skills>
          },
          {
            path: "/projects",
            element: <MyProjects></MyProjects>
          },
          {
            path: "/contact",
            element: <ContactUs></ContactUs>
          }
        ]
    }
])