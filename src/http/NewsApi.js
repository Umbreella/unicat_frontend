
export const getFirstNews = (take, last) => {
    return `
        allNews (first: ${take}, after: "${last}") {
            edges {
                node {
                    id
                    title
                    shortDescription
                    description
                    preview
                    createdAt
                }
            }
            ${last !== null?
                `pageInfo {
                    startCursor
                    endCursor
                    hasNextPage
                }`: ``}
        }
    `;
}