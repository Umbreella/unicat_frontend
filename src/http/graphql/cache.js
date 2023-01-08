import {InMemoryCache, Reference} from "@apollo/client";

function createMergeForKeyArgs(keyArgs) {
    return {
        keyArgs: keyArgs,
        merge(existing, incoming) {
            let edges: Reference[] = [];

            if (existing && existing.edges) {
                edges = edges.concat(existing.edges);
            }
            if (incoming && incoming.edges) {
                edges = edges.concat(incoming.edges);
            }

            return {
                ...incoming,
                edges,
            };
        },
    };
}

export const cacheGraphQL = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                allCourseComments: createMergeForKeyArgs(["courseId"]),
                allNewsComments: createMergeForKeyArgs(["newsId"]),
                allEventComments: createMergeForKeyArgs(["eventId"]),
                allNews: createMergeForKeyArgs(["first"]),
                allCourses: createMergeForKeyArgs(["first"]),
                allEvents: createMergeForKeyArgs(["first"]),
            },
        },
    },
})
