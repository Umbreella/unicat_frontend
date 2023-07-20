import React from 'react';
import {
    Admin,
    Resource,
} from "react-admin";
import {
    loginUser, checkUserIsAuthed, logoutUser,
} from "../../http/api/UserApi";
import jwt_decode from "jwt-decode";
import {ADMIN_PATH} from "../../utils/consts";
import CommentIcon from '@mui/icons-material/Comment';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import SchoolIcon from '@mui/icons-material/School';
import GroupIcon from '@mui/icons-material/Group';
import PersonIcon from '@mui/icons-material/Person';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import EventIcon from '@mui/icons-material/Event';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import FeedbackIcon from '@mui/icons-material/Feedback';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import {dataProvider} from "../../http/dataProviders/dataProvider";
import CreateCategory from "../../components/admin/create/CreateCategory";
import ListCategory from "../../components/admin/list/ListCategory";
import EditCategory from "../../components/admin/edit/EditCategory";
import EditCourse from "../../components/admin/edit/EditCourse";
import ListCourse from "../../components/admin/list/ListCourse";
import CreateCourse from "../../components/admin/create/CreateCourse";
import EditTeacher from "../../components/admin/edit/EditTeacher";
import ListUser from "../../components/admin/list/ListUser";
import ListTeacher from "../../components/admin/list/ListTeacher";
import EditUser from "../../components/admin/edit/EditUser";
import CreateUser from "../../components/admin/create/CreateUser";
import CreateTeacher from "../../components/admin/create/CreateTeacher";
import ListResource from "../../components/admin/list/ListResource";
import EditResource from "../../components/admin/edit/EditResource";
import ListEvent from "../../components/admin/list/ListEvent";
import ListNew from "../../components/admin/list/ListNew";
import EditEvent from "../../components/admin/edit/EditEvent";
import EditNew from "../../components/admin/edit/EditNew";
import ListGroup from "../../components/admin/list/ListGroup";
import EditGroup from "../../components/admin/edit/EditGroup";
import CreateGroup from "../../components/admin/create/CreateGroup";
import ListComment from "../../components/admin/list/ListComment";
import CreateNew from "../../components/admin/create/CreateNew";
import CreateEvent from "../../components/admin/create/CreateEvent";
import ListFeedback from "../../components/admin/list/ListFeedback";
import EditFeedback from "../../components/admin/edit/EditFeedback";
import ListDiscount from "../../components/admin/list/ListDiscount";
import EditDiscount from "../../components/admin/edit/EditDiscount";
import CreateDiscount from "../../components/admin/create/CreateDiscount";
import ListPayments from "../../components/admin/list/ListPayments";


const IndexAdmin = () => {
    const checkIsStaffOrSingOut = async (error) => {
        const isAuth = await checkUserIsAuthed();
        if (!isAuth) {
            return Promise.reject();
        }

        const token = localStorage.getItem('access');
        const {is_staff} = jwt_decode(token);

        if (!is_staff) {
            // await signOut();
            return Promise.reject();
        }

        return Promise.resolve();
    };

    const signOut = async () => {
        const response = await logoutUser();

        if (response.status === 200) {
            localStorage.removeItem('access');
        }

        return Promise.resolve();
    };

    const authProvider = {
        login: async ({username, password}) => {
            const requestData = {
                email: username,
                password: password,
            }
            const response = await loginUser(requestData);

            if (response.status !== 200) {
                return Promise.reject();
            }

            const token = response.data.access;
            const {is_staff} = jwt_decode(token);

            if (!is_staff) {
                await signOut();
                return Promise.reject();
            }

            localStorage.setItem('access', token);

            return Promise.resolve();
        },
        checkError: (error) => checkIsStaffOrSingOut(error),
        checkAuth: () => checkIsStaffOrSingOut(),
        logout: () => signOut(),
        getIdentity: () => Promise.resolve(),
        getPermissions: () => Promise.resolve(),
    };

    return (
        <>
            <Admin basename={ADMIN_PATH}
                   authProvider={authProvider} requireAuth
                   dataProvider={dataProvider}
                   title={"\"Unicat\" - Панель администрирования"}>
                <Resource name="events/news"
                          options={{label: "Новости"}} icon={NewspaperIcon}
                          list={ListNew} edit={EditNew} create={CreateNew}/>
                <Resource name="events/event"
                          options={{label: "Мероприятия"}} icon={EventIcon}
                          list={ListEvent} edit={EditEvent}
                          create={CreateEvent}/>
                <Resource name="courses/category"
                          options={{label: "Категории курсов"}}
                          icon={CastForEducationIcon}
                          list={ListCategory} edit={EditCategory}
                          create={CreateCategory}/>
                <Resource name="courses"
                          options={{label: "Курсы"}} icon={SchoolIcon}
                          list={ListCourse} edit={EditCourse}
                          create={CreateCourse}/>
                <Resource name="courses/discounts"
                          options={{label: "Скидки"}} icon={LoyaltyIcon}
                          list={ListDiscount} edit={EditDiscount}
                          create={CreateDiscount}/>
                <Resource name="payments"
                          options={{label: "Платежи"}} icon={AttachMoneyIcon}
                          list={ListPayments}/>
                <Resource name="user/teachers"
                          options={{label: "Преподаватели"}} icon={GroupIcon}
                          list={ListTeacher} edit={EditTeacher}
                          create={CreateTeacher}/>
                <Resource name="user"
                          options={{label: "Пользователи"}} icon={PersonIcon}
                          list={ListUser} edit={EditUser} create={CreateUser}/>
                <Resource name="user/groups"
                          options={{label: "Роли пользователей"}}
                          icon={RecentActorsIcon}
                          list={ListGroup} edit={EditGroup}
                          create={CreateGroup}/>
                <Resource name="comments"
                          options={{label: "Комментарии"}} icon={CommentIcon}
                          list={ListComment}/>
                <Resource name="feedbacks"
                          options={{label: "Обратная связь"}}
                          icon={FeedbackIcon} list={ListFeedback}
                          edit={EditFeedback}/>
                <Resource name="resources"
                          options={{label: "Ресурсы"}} icon={AddToDriveIcon}
                          list={ListResource} edit={EditResource}/>
            </Admin>
        </>
    );
};

export default IndexAdmin;