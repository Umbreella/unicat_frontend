import {
    ABOUT_ROUTE,
    PROFILE,
    BLOG_ROUTE,
    CONTACTS_ROUTE,
    COURSES_ROUTE,
    HOME_ROUTE,
    CERTIFICATES,
    MY_COURSES,
    LESSON_COURSE,
    SETTINGS,
    RESET_PASSWORD,
    ENTER_EMAIL,
    NEWS_ROUTE, LAST_COURSE_BREADCRUMBS, LAST_BREADCRUMBS, EVENTS_ROUTE
} from "./consts";
import Home from "../pages/main/Home";
import Blog from "../pages/main/Blog";
import About from "../pages/main/About";
import Contacts from "../pages/main/Contacts";
import Courses from "../pages/main/Courses";
import CurrentCourse from "../pages/main/CurrentCourse";
import CurrentNews from "../pages/main/CurrentNews";
import MyEducation from "../pages/profile/MyEducation";
import MyCertificates from "../pages/profile/MyCertificates";
import MyCourses from "../pages/profile/MyCourses";
import LessonCourse from "../pages/profile/LessonCourse";
import Settings from "../pages/profile/Settings";
import ResetPassword from "../pages/technical/ResetPassword";
import EnterEmail from "../pages/technical/EnterEmail";
import CurrentEvent from "../pages/main/CurrentEvent";

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
        path: NEWS_ROUTE,
        breadcrumb: "Новости"
    },
    {
        path: NEWS_ROUTE + "/:id",
        Component: CurrentNews,
        breadcrumb: LAST_BREADCRUMBS
    },
    {
        path: EVENTS_ROUTE,
        breadcrumb: "Мероприятия"
    },
    {
        path: EVENTS_ROUTE + "/:id",
        Component: CurrentEvent,
        breadcrumb: LAST_BREADCRUMBS
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
        breadcrumb: LAST_BREADCRUMBS
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