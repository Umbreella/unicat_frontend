import {
    ABOUT_ROUTE,
    PROFILE,
    BLOG_ROUTE,
    CONTACTS_ROUTE,
    COURSES_ROUTE,
    HOME_ROUTE,
    CERTIFICATES,
    MY_COURSES,
    SETTINGS,
    RESET_PASSWORD,
    ENTER_EMAIL,
    NEWS_ROUTE,
    LAST_BREADCRUMBS,
    EVENTS_ROUTE,
    MY_COURSES_CONTENT_LESSONS,
    MY_COURSES_CONTENT,
    CONFIRM_EMAIL,
    CHANGE_EMAIL,
    MY_PAYMENTS,
    PAYMENT_IS_SUCCESS
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
import MyCourseContent from "../pages/profile/MyCourseContent";
import ConfirmEmail from "../pages/technical/ConfirmEmail";
import ConfirmNewEmail from "../pages/technical/ConfirmNewEmail";
import MyPayments from "../pages/profile/MyPayments";
import PaymentIsSuccess from "../pages/technical/PaymentIsSuccess";

export const authRoutes = [
    {
        path: PROFILE,
        Component: MyEducation,
    },
    {
        path: CERTIFICATES,
        Component: MyCertificates,
    },
    {
        path: SETTINGS,
        Component: Settings,
    },
    {
        path: MY_COURSES,
        Component: MyCourses,
    },
    {
        path: MY_COURSES_CONTENT,
        Component: MyCourseContent,
    },
    {
        path: MY_COURSES_CONTENT_LESSONS,
        Component: MyCourseContent,
    },
    {
        path: MY_COURSES_CONTENT_LESSONS + ":id",
        Component: LessonCourse,
    },
    {
        path: MY_PAYMENTS,
        Component: MyPayments,
    },
]

export const mainPage = {
    path: HOME_ROUTE,
    Component: Home,
    breadcrumb: "Главная",
}

export const publicRoutes = [
    {
        path: ABOUT_ROUTE,
        Component: About,
        breadcrumb: "О нас",
    },
    {
        path: BLOG_ROUTE,
        Component: Blog,
        breadcrumb: "Блог",
    },
    {
        path: NEWS_ROUTE,
        breadcrumb: "Новости",
    },
    {
        path: NEWS_ROUTE + ":id",
        Component: CurrentNews,
        breadcrumb: LAST_BREADCRUMBS,
    },
    {
        path: EVENTS_ROUTE,
        breadcrumb: "Мероприятия",
    },
    {
        path: EVENTS_ROUTE + ":id",
        Component: CurrentEvent,
        breadcrumb: LAST_BREADCRUMBS,
    },
    {
        path: CONTACTS_ROUTE,
        Component: Contacts,
        breadcrumb: "Контакты",
    },
    {
        path: COURSES_ROUTE,
        Component: Courses,
        breadcrumb: "Курсы",
    },
    {
        path: COURSES_ROUTE + ":id",
        Component: CurrentCourse,
        breadcrumb: LAST_BREADCRUMBS,
    },
]

export const technicalRoutes = [
    {
        path: RESET_PASSWORD,
        Component: ResetPassword,
    },
    {
        path: ENTER_EMAIL,
        Component: EnterEmail,
    },
    {
        path: CONFIRM_EMAIL,
        Component: ConfirmEmail,
    },
    {
        path: CHANGE_EMAIL,
        Component: ConfirmNewEmail,
    },
    {
        path: PAYMENT_IS_SUCCESS,
        Component: PaymentIsSuccess,
    },
]