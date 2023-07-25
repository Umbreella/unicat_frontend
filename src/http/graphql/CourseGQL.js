import {gql} from "@apollo/client";

export const getCourses = () => {
    return `
        allCourses (first: $firstCourse, after: $afterCourse, 
                    search: $searchCourse,
                    categoryId: $categoryIdFilter, orderBy: $orderByCourse,
                    minRating: $minRatingCourse, maxRating: $maxRatingCourse,
                    minPrice: $minPriceCourse, maxPrice: $maxPriceCourse,
                    ) {
            edges {
                node {
                    id
                    title
                    price
                    discount {
                        percent
                        endDate
                    }
                    preview
                    countListeners
                    shortDescription
                    teacher {
                        fullName
                    }
                    avgRating
                }
            }
            pageInfo {
                endCursor
                hasNextPage
            }
        }
    `;
}

export const getMyCourses = () => {
    return `
        myCourses (first: $firstMyCourse, after: $afterMyCourse,
                   search: $searchMyCourse, isCompleted: $isCompletedMyCourse,
                   orderBy: $orderByMyCourse,) {
            edges {
                node {
                    id
                    title
                    preview
                    progress
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
                    discount {
                        percent
                    }
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
            body
            countLectures
            countIndependents
            countListeners
            learningFormat
            discount {
                percent
                endDate
            }
            teacher {
                fullName
                photo
                description
                avgRating
                countReviews
            }
            category {
                title
            }
            avgRating
        }
    `;
}

export const getMyCourse = () => {
    return `
        myCourse (id: $myCourseId) {
            title
        }
    `;
}

export const getHasAccess = () => {
    return gql`
        query getHasAccess ($hasAccessCourseId: ID!) {
            course (id: $hasAccessCourseId) {
                progress
            }
        }
    `
}