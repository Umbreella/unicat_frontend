import React, {useEffect, useState} from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";
import SidebarSection from "../../components/sidebar/SidebarSection";
import CoursesSidebar from "../../components/sidebar/CoursesSidebar";
import GallerySidebar from "../../components/sidebar/GallerySidebar";
import TagsSidebar from "../../components/sidebar/TagsSidebar";
import DownloadSidebar from "../../components/sidebar/DownloadSidebar";
import CategoriesSidebar from "../../components/sidebar/CategoriesSidebar";
import image from "../../images/blog_single.jpg";
import {NavLink} from "react-router-dom";
import ReactMarkdown from "react-markdown";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faGoogle,
    faTwitter
} from "@fortawesome/free-brands-svg-icons";
import Comments from "../../components/comments/Comments";
import CommentForm from "../../components/forms/CommentForm";
import AuthModal from "../../components/modal/AuthModal";

const CurrentBlog = () => {
    const [is_authUser, setIsAuthUser] = useState(false);
    const [is_showAuthForm, setIsShowAuthForm] = useState(false);

    const blog = {
        body:
            "I followed up with for the video told me that" +
            " being sexual with an Antioch student is different from being" +
            " sexual with someone else. They spoke of a common language" +
            " everyone is taught beginning at orientation, so that when one" +
            " student starts asking questions of another student in the" +
            " midst of sexual activity, it doesn’t seem so out there." +
            "\n" +
            "\n" +
            "I followed up with for the video told me that" +
            " being sexual with an Antioch student is different from being" +
            " sexual with someone else. They spoke of a common language" +
            " everyone is taught beginning at orientation, so that when one" +
            " student starts asking questions of another student in the" +
            " midst of sexual activity, it doesn’t seem so out there." +
            "\n" +
            "\n" +
            "# All Student" +
            "\n" +
            "\n" +
            "![](data:image/png;base64,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)"
    }

    const markdown = eval('`' + blog.body + '`');

    const sidebar = [
        {
            title: "Категории",
            body: <CategoriesSidebar />
        },
        {
            title: "Последние курсы",
            body: <CoursesSidebar />
        },
        {
            title: "Instagram",
            body: <GallerySidebar />
        },
        {
            title: "Теги",
            body: <TagsSidebar />
        },
        {
            title: null,
            body: <DownloadSidebar />
        }
    ]

    const comments = [
        {
            author: 'Mark',
            can_replay : true,
            childs: [
                {
                    author: 'Mark1',
                    can_replay : false,
                    childs: null
                },
                {
                    author: 'Mark1.2',
                    can_replay : false,
                    childs: null
                }
            ]
        },
        {
            author: 'Mark2',
            can_replay : true,
            childs: [
                {
                    author: 'Mark2.1',
                    can_replay : false,
                    childs: null
                },
                {
                    author: 'Mark2.2',
                    can_replay : false,
                    childs: null
                }
            ]
        }
    ]

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <div className="blog">
            <Container>
                <Row>
                    <Col className="col-lg-8">
                        <div className="blog_content">
                            <div className="blog_title">
                                ‘I Kept Thinking of Antioch’: Long Before
                                #MeToo, a times Video Journalist Remembered
                            </div>
                            <div className="blog_meta">
                                <ul>
                                    <li>
                                        <NavLink to="#">
                                            May 5, 2018
                                        </NavLink>
                                    </li>
                                    <li>admin</li>
                                </ul>
                            </div>
                            <div className="blog_image">
                                <Image src={image} />
                            </div>

                            <ReactMarkdown children={markdown} />
                        </div>
                        <div
                            className="blog_extra d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-start">
                            <div className="blog_social ml-lg-auto">
                                <span>Поделиться: </span>
                                <ul>
                                    <li>
                                        <NavLink to="#">
                                            <FontAwesomeIcon icon={faFacebook} />
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="#">
                                            <FontAwesomeIcon icon={faTwitter} />
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="#">
                                            <FontAwesomeIcon icon={faGoogle} />
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="comments_container">
                            <div className="add_comment_container">
                                <div className="add_comment_title">
                                    Написать комментарий
                                </div>
                                {
                                    is_authUser && <CommentForm />
                                }
                                {
                                    !is_authUser &&
                                    <div className="courses_button trans_200"
                                         onClick={() => setIsShowAuthForm(true)}>
                                        <div>
                                            Войти
                                        </div>
                                    </div>
                                }
                                <AuthModal show={is_showAuthForm}
                                           onHide={() => {
                                               setIsShowAuthForm(false);
                                               setIsAuthUser(true)
                                           }} />
                            </div>
                            <div className="comments_title">
                                Комментариев: <span>30</span>
                            </div>
                            <ul className="comments_list">
                                {
                                    comments.map((value, index, array) =>
                                        <Comments key={index} comment={value}/>
                                    )
                                }
                            </ul>
                        </div>
                    </Col>

                    <div className="col-lg-4">
                        <div className="sidebar_current_course">
                            {
                                sidebar.map((value, index, array) =>
                                    <SidebarSection key={index} section={value} />
                                )
                            }
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default CurrentBlog;