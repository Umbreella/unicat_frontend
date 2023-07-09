import {gql} from "@apollo/client";

export const getCourseComments = () => {
    return gql`
    query GetComments($courseId: String, $afterCourseComments: String,
                      $statisticCourseId: ID!,
                      ) {
        statistic (courseId: $statisticCourseId) {
            avgRating
            countComments
            countFiveRating
            countFourRating
            countThreeRating
            countTwoRating
            countOneRating
        }
        allCourseComments (courseId: $courseId, after: $afterCourseComments, first: 5, orderBy: "-createdAt"){
            edges {
                node {
                    id
                    body
                    createdAt
                    rating
                    author {
                        name
                        photo
                    }
                }
            }
            pageInfo {
                endCursor
                hasNextPage
            }
        }
    }
    `;
}

export const getNewsComments = () => {
    return `
        allNewsComments (newsId: $newsId, first: 5, after: $afterNewsComment, orderBy: "-createdAt"){
            totalCount
            edges {
                node {
                    id
                    body
                    createdAt
                    rating
                    author {
                        name
                        photo
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

export const getEventComments = () => {
    return `
        allEventComments (eventId: $eventId, first: 5, after: $afterEventComment, orderBy: "-createdAt"){
            totalCount
            edges {
                node {
                    id
                    body
                    createdAt
                    rating
                    author {
                        name
                        photo
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