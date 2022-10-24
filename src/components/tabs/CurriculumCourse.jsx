import React from 'react';
import CurriculumAccordion from "../accordions/CurriculumAccordion";

const CurriculumCourse = () => {
    const curriculums = [
        {
            title: "Lesson 1",
            body: "Lorem Ipsn gravida nibh vel velit auctor aliquet. Aenean\n" +
                "                        sollicitudin, lorem quis bibendum auci elit consequat\n" +
                "                        ipsutis sem nibh id elit. Duis sed odio sit amet nibh\n" +
                "                        vulputate cursus a sit amet mauris. Morbi accumsan\n" +
                "                        ipsum velit. Nam nec tellus a odio tincidunt auctor a\n" +
                "                        ornare odio.",
            childs: [
                {
                    title: "Lesson 1.1",
                    body: "Lorem Ipsn gravida nibh vel velit auctor aliquet. Aenean\n" +
                        "                        sollicitudin, lorem quis bibendum auci elit consequat\n" +
                        "                        ipsutis sem nibh id elit. Duis sed odio sit amet nibh\n" +
                        "                        vulputate cursus a sit amet mauris. Morbi accumsan\n" +
                        "                        ipsum velit. Nam nec tellus a odio tincidunt auctor a\n" +
                        "                        ornare odio.",
                    childs: [
                        {
                            title: "Lesson 1.1.1",
                            body: "Lorem Ipsn gravida nibh vel velit auctor aliquet. Aenean\n" +
                                "                        sollicitudin, lorem quis bibendum auci elit consequat\n" +
                                "                        ipsutis sem nibh id elit. Duis sed odio sit amet nibh\n" +
                                "                        vulputate cursus a sit amet mauris. Morbi accumsan\n" +
                                "                        ipsum velit. Nam nec tellus a odio tincidunt auctor a\n" +
                                "                        ornare odio.",
                            childs: null
                        },
                        {
                            title: "Lesson 1.1.2",
                            body: "Body Lesson 1.2",
                            childs: null
                        }
                    ]
                },
                {
                    title: "Lesson 1.2",
                    body: "Body Lesson 1.2",
                    childs: null
                }
            ]
        },
        {
            title: "Lesson 2",
            body: "Lorem Ipsn gravida nibh vel velit auctor aliquet. Aenean\n" +
                "                        sollicitudin, lorem quis bibendum auci elit consequat\n" +
                "                        ipsutis sem nibh id elit. Duis sed odio sit amet nibh\n" +
                "                        vulputate cursus a sit amet mauris. Morbi accumsan\n" +
                "                        ipsum velit. Nam nec tellus a odio tincidunt auctor a\n" +
                "                        ornare odio.",
            childs: [
                {
                    title: "Lesson 2.1",
                    body: "Lorem Ipsn gravida nibh vel velit auctor aliquet. Aenean\n" +
                        "                        sollicitudin, lorem quis bibendum auci elit consequat\n" +
                        "                        ipsutis sem nibh id elit. Duis sed odio sit amet nibh\n" +
                        "                        vulputate cursus a sit amet mauris. Morbi accumsan\n" +
                        "                        ipsum velit. Nam nec tellus a odio tincidunt auctor a\n" +
                        "                        ornare odio.",
                    childs: [
                        {
                            title: "Lesson 2.1.1",
                            body: "Lorem Ipsn gravida nibh vel velit auctor aliquet. Aenean\n" +
                                "                        sollicitudin, lorem quis bibendum auci elit consequat\n" +
                                "                        ipsutis sem nibh id elit. Duis sed odio sit amet nibh\n" +
                                "                        vulputate cursus a sit amet mauris. Morbi accumsan\n" +
                                "                        ipsum velit. Nam nec tellus a odio tincidunt auctor a\n" +
                                "                        ornare odio.",
                            childs: null
                        },
                        {
                            title: "Lesson 2.1.2",
                            body: "Body Lesson 1.2",
                            childs: null
                        }
                    ]
                },
                {
                    title: "Lesson 2.2",
                    body: "Body Lesson 1.2",
                    childs: null
                }
            ]
        }
    ]


    return (
        <>
            <div className="tab_panel_title">
                Мобильные приложения
            </div>
            <div className="tab_panel_content">
                <div className="tab_panel_text">
                    <p>Lorem Ipsn gravida nibh vel velit auctor aliquet. Aenean
                        sollicitudin, lorem quis bibendum auci elit consequat
                        ipsutis sem nibh id elit. Duis sed odio sit amet nibh
                        vulputate cursus a sit amet mauris. Morbi accumsan
                        ipsum velit. Nam nec tellus a odio tincidunt auctor a
                        ornare odio.</p>
                </div>

                {
                    curriculums.map((value, index, array) =>
                        <CurriculumAccordion key={index} curriculum={value}/>
                    )
                }
            </div>
        </>
    );
};

export default CurriculumCourse;