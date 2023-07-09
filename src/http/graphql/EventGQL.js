export const getEvents = () => {
    return `
        allEvents (first: $firstEvent, after: $afterEvent) {
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
            pageInfo {
                endCursor
                hasNextPage
            }
        }
    `;
}

export const getCurrentEvents = () => {
    return `
        event (id: $currentEventId) {
            id
            title
            description
            preview
            date
            startTime
            endTime
            place
        }
    `;
}

export const getSmallEvents = () => {
    return `
        allEvents (first: $firstEvent, after: $afterEvent) {
            edges {
                node {
                    id
                    title
                    date
                    place
                }
            }
            pageInfo {
                endCursor
                hasNextPage
            }
        }
    `;
}
