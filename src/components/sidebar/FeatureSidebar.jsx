import React, {useContext, useState} from 'react';
import {
    faClock,
    faFileText,
    faQuestionCircle, faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";
import FeaturesSidebarLine from "../features/FeaturesSidebarLine";
import {useNavigate} from "react-router-dom";
import {Context} from "../../index";
import {MY_COURSES} from "../../utils/consts";
import HorizontalLoader from "../loader/HorizontalLoader";
import {checkUserIsAuthed} from "../../http/api/UserApi";
import PaymentModal from "../modal/PaymentModal";
import {createPayment} from "../../http/api/PaymentApi";
import {observer} from "mobx-react-lite";
import Countdown from "react-countdown";

const FeatureSidebar = observer((props) => {
    const {setVisibleAuthForm} = useContext(Context);
    const data = props.data;
    const {
        data: dataHasAccess,
        loading: loadingHasAccess,
        error: errorHasAccess
    } = data.hasAccess;
    const course_id = data.id;
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const [clientSecret, setClientSecret] = useState();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const createUserCourse = async () => {
        const userIsAuth = await checkUserIsAuthed();
        if (!userIsAuth) {
            setVisibleAuthForm(true);
        }

        setIsLoading(true);
        const request_data = {
            course_id: data.id,
        }
        const response = await createPayment(request_data);
        setIsLoading(false);

        if (response.status !== 201) {
            return null;
        }

        setClientSecret(response.data.clientSecret);
        handleShow();
    }

    const navigateToMyCourse = () => {
        navigate(MY_COURSES + course_id);
    }

    const features = [
        {
            title: 'Длительность',
            value: data.duration,
            icon: faClock,
        },
        {
            title: 'Кол-во лекций',
            value: data.countLectures,
            icon: faFileText,
        },
        {
            title: 'Кол-во самостоятельных работ',
            value: data.countIndependents,
            icon: faQuestionCircle,
        },
        {
            title: 'Всего обучающихся',
            value: data.countListeners,
            icon: faUserGraduate,
        },
    ]

    return (
        <div className="sidebar_feature">
            <div className="course_price d-flex align-items-center flex-column"
                 style={{
                     marginTop: 30,
                     fontSize: 24,
                 }}>
                {
                    data.discount ?
                        <>
                            <div style={{fontSize: 16}}>
                                <Countdown date={data.discount.endDate}/>
                            </div>
                            <div
                                className="d-flex align-items-end">
                                <span className="course_price_span ms-1">
                                    {data.price}
                                </span>
                                {data.price * (100 - data.discount.percent) / 100}₽
                            </div>
                        </>
                        :
                        <>
                            {data.price}₽
                        </>
                }
            </div>
            <div className="feature_list">
                {
                    features.map((value, index, array) =>
                        <FeaturesSidebarLine key={index} feature={value}/>
                    )
                }
            </div>
            {
                loadingHasAccess ?
                    <div className="m-5">
                        <HorizontalLoader/>
                    </div> :
                    <>
                        {
                            !errorHasAccess && dataHasAccess?.course.progress !== null ?
                                <div
                                    className="courses_button trans_200 w-100 mt-4 mb-4"
                                    onClick={() => navigateToMyCourse()}>
                                    <div>
                                        Продолжить
                                    </div>
                                </div> :
                                <>
                                    {
                                        clientSecret &&
                                        <PaymentModal data={{
                                            show: show,
                                            handleClose: handleClose,
                                            clientSecret: clientSecret,
                                            courseData: {
                                                id: data.id,
                                                title: data.title,
                                                price: data.price,
                                            },
                                        }}/>
                                    }
                                    {
                                        isLoading ?
                                            <div className="mt-4">
                                                <HorizontalLoader/>
                                            </div> :
                                            <div
                                                className="courses_button trans_200 w-100 mt-4 mb-4"
                                                onClick={() => createUserCourse()}>
                                                <div>
                                                    Записаться
                                                </div>
                                            </div>
                                    }
                                </>
                        }
                    </>
            }
        </div>
    );
});

export default FeatureSidebar;