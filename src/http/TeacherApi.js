
export const getFirstTeacher = (take) => {
    return `
        allTeachers (first: ${take}) {
            edges {
                node {
                    id
                    fullName
                    photo
                    facebook
                    twitter
                    googlePlus
                }
            }
        }
    `;
}