import {
    ABOUT_ROUTE,
    PROFILE,
    BLOG_ROUTE,
    CONTACTS_ROUTE,
    COURSES_ROUTE,
    HOME_ROUTE,
    CERTIFICATES,
    MY_COURSES, LESSON_COURSE, SETTINGS, RESET_PASSWORD, ENTER_EMAIL
} from "./consts";
import Home from "../pages/main/Home";
import Blog from "../pages/main/Blog";
import About from "../pages/main/About";
import Contacts from "../pages/main/Contacts";
import Courses from "../pages/main/Courses";
import CurrentCourse from "../pages/main/CurrentCourse";
import CurrentBlog from "../pages/main/CurrentBlog";
import MyEducation from "../pages/profile/MyEducation";
import MyCertificates from "../pages/profile/MyCertificates";
import MyCourses from "../pages/profile/MyCourses";
import LessonCourse from "../pages/profile/LessonCourse";
import Settings from "../pages/profile/Settings";
import ResetPassword from "../pages/technical/ResetPassword";
import EnterEmail from "../pages/technical/EnterEmail";

export const authRoutes = [
    {
        path: PROFILE,
        Component: MyEducation
    },
    {
        path: CERTIFICATES,
        Component: MyCertificates
    },
    {
        path: SETTINGS,
        Component: Settings
    },
    {
        path: MY_COURSES,
        Component: MyCourses
    },
    {
        path: LESSON_COURSE,
        Component: LessonCourse
    }
]

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: Home,
        breadcrumb: "Главная"
    },
    {
        path: ABOUT_ROUTE,
        Component: About,
        breadcrumb: "О нас"
    },
    {
        path: BLOG_ROUTE,
        Component: Blog,
        breadcrumb: "Блог"
    },
    {
        path: BLOG_ROUTE + "/:id",
        Component: CurrentBlog,
        breadcrumb: "Новость 1"
    },
    {
        path: CONTACTS_ROUTE,
        Component: Contacts,
        breadcrumb: "Контакты"
    },
    {
        path: COURSES_ROUTE,
        Component: Courses,
        breadcrumb: "Курсы"
    },
    {
        path: COURSES_ROUTE + "/:id",
        Component: CurrentCourse,
        breadcrumb: "Курс 1"
    }
]

export const technicalRoutes = [
    {
        path: RESET_PASSWORD,
        Component: ResetPassword
    },
    {
        path: ENTER_EMAIL,
        Component: EnterEmail
    }
]