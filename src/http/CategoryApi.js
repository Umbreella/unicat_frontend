
export const getCategories = () => {
    return `
        allCategories (orderBy: "title") {
            edges {
                node {
                    id
                    title
                }
            }
        }
    `;
}