import {gql} from "@apollo/client";

export const getPayments = () => {
    return gql(`
        query PaymentsPage ($firstPayments: Int, $afterPayments: String){
            myPayments (first: $firstPayments, after: $afterPayments) {
                edges {
                    node {
                        id
                        course {
                            title
                        }
                        amount
                        createdAt
                    }
                }
                pageInfo {
                    endCursor
                }
            }
        }
    `)
}