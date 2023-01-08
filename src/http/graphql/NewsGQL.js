
export const getNews = () => {
    return `
        allNews (first: $firstNews, after: $afterNews) {
            edges {
                node {
                    id
                    title
                    shortDescription
                    preview
                    author
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

export const getCurrentNews = () => {
    return `
        news (id: $currentNewsId) {
            id
            title
            description
            preview
            createdAt
            author
        }
    `;
}
