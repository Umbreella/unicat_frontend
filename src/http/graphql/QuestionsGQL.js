import {gql} from "@apollo/client";

export const getQuestionsByAttempt = () => {
    return gql`
        query GetQuestionByAttempt ($attemptId: String!) {
            questions (attemptId: $attemptId){
                id
                body
                questionType
                answers {
                    id
                    value
                }
            }
        }
    `;
}
