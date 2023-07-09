
export const getMyAttempts = () => {
    return `
        myAttempts (lessonId: $attemptLessonId, first: $firstUserAttempt, after: $afterUserAttempt){
            edges {
                node {
                    id
                    duration
                    timeEnd
                    countTrueAnswer
                }
            }
            pageInfo {
                hasNextPage
                endCursor
            }
        }
    `;
}
