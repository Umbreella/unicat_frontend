
export const getFirstEvents = (take, last) => {
    return `
        allEvents (first: ${take}, after: "${last}") {
            edges {
                node {
                    id
                    title
                    shortDescription
                    preview
                    date
                    startTime
                    endTime
                    place
                }
            }
            ${last !== null ?
                `pageInfo {
                    startCursor
                    endCursor
                    hasNextPage
                }`: ``}
        }
    `;
}