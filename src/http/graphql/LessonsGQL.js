import {gql} from "@apollo/client";

export const getPublicLessons = () => {
    return `
        lessonsByCourse (courseId: $courseId) {
            id
            serialNumber
            title
            description
            children {
                id
                serialNumber
                title
                description
                lessonType
            }
        }
    `;
}

export const getPrivateLessons = () => {
    return `
        lessonsWithProgress (courseId: $courseId) {
            id
            serialNumber
            title
            description
            lessonType
            isCompleted
            children {
                id
                serialNumber
                title
                description
                lessonType
                isCompleted
            }
        }
    `;
}

export const getCurrentLesson = () => {
    return `
        lesson (id: $lessonId){
            id
            title
            body
            description
            lessonType
            isCompleted
            countQuestions
        }
    `;
}

export const getMyLessonHistory = () => {
    return `
        myLessonHistory {
            completedAt
            countLesson
        }
    `
}