import {
    ABOUT_ROUTE,
    BLOG_ROUTE,
    CONTACTS_ROUTE, COURSES_ROUTE,
    HOME_ROUTE,
    LOGIN_ROUTE,
    REGISTER_ROUTE, SINGLE_COURSES_ROUTE
} from "./utils/consts";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Courses from "./pages/Courses";
import CurrentCourse from "./pages/CurrentCourse";

export const authRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth
    }
]

export const publicRoutes = [
    {
        path: ABOUT_ROUTE,
        Component: About
    },
    {
        path: BLOG_ROUTE,
        Component: Blog
    },
    {
        path: CONTACTS_ROUTE,
        Component: Contacts
    },
    {
        path: COURSES_ROUTE,
        Component: Courses
    },
    {
        path: SINGLE_COURSES_ROUTE,
        Component: CurrentCourse
    },
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTER_ROUTE,
        Component: Auth
    },
]