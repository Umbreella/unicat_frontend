
export const getMyCertificates = () => {
    return `
        myCertificates (first: $firstMyCertificate, after: $afterMyCertificate) {
            edges {
                node {
                    id
                    course
                    title
                    createdAt
                }
            }
            pageInfo {
                endCursor
                hasNextPage
            }
        }
    `;
}
