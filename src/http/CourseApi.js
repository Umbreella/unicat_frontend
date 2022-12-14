
export const getFirstCourses = (take, last) => {
    return `
        allCourses (first: ${take}, after: "${last}") {
            edges {
                node {
                    id
                    title
                    price
                    discount
                    preview
                    countIndependents
                    shortDescription
                    teacher {
                        id
                        fullName
                    }
                }
            }
            ${last !== null ? 
                `pageInfo {
                    startCursor
                    endCursor
                    hasNextPage
                    hasPreviousPage
                }`: ``}
        }
    `;
}

export const getNewCourses = () => {
    return `
        newCourses: allCourses (first: 3) {
            edges {
                node {
                    id
                    title
                    price
                    preview
                }
            }
        }
    `;
}

export const getCurrentCourses = (id) => {
    return `
        course (id: "${id}") {
            id
            title
            price
            duration
            preview
            description
            countLectures
            countIndependents
            learningFormat
            teacher {
                id
                fullName
                photo
                description
            }
            category {
                id
                title
            }
        }
    `;
}