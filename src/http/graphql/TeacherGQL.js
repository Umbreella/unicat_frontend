
export const getTeacher = () => {
    return `
        allTeachers (first: $firstTeacher, after: $afterTeacher) {
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