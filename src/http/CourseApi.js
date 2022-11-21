
export const getFirstCourse = (take, last) => {
    return `
        allCourses (first: ${take}, after: "${last}") {
            edges {
                node {
                    id
                    title
                    price
                    preview
                    countIndependents
                    shortDescription
                    teacher {
                        id
                        fullName
                    }
                }
            }
            ${last ? 
                `pageInfo {
                    startCursor
                    endCursor
                    hasNextPage
                }`: ``}
        }
    `;
}