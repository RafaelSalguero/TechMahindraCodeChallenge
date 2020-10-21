import { route } from "react-tree-router";

/**The home route map */
export const home = route({}, {
    students: route({

    }, {
        new: route({}),
        edit: route({
            params: {
                id: "number"
            }
        })
    })
})