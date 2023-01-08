
export const getCategories = () => {
    return `
        allCategories (first: $firstCategory, orderBy: "title") {
            edges {
                node {
                    id
                    title
                }
            }
        }
    `;
}