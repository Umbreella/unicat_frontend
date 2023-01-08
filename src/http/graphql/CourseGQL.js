
export const getCourses = () => {
    return `
        allCourses (first: $firstCourse, after: $afterCourse, 
                    search: $searchCourse,
                    category: $categoryIdFilter, orderBy: $orderByCourse) {
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
                    statistic {
                        avgRating
                    }
                }
            }
            pageInfo {
                endCursor
                hasNextPage
            }
        }
    `;
}

export const getLatestCourses = () => {
    return `
        latestCourses (first: $firstLatestCourse) {
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

export const getCurrentCourses = () => {
    return `
        course (id: $currentCourseId) {
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
            statistic {
                avgRating
                countComments
                countFiveRating
                countFourRating
                countThreeRating
                countTwoRating
                countOneRating
            }
        }
    `;
}