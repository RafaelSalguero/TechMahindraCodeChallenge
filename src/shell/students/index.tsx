import React from "react";
import { RouterView } from "react-tree-router";
import { home } from "src/routes";
import { EditStudent } from "./edit/edit";
import { NewStudent } from "./edit/new";
import { StudentList } from "./list";

/**Student list and edit forms index */
export function Students() {
    return (
        <RouterView 
            base={home.students}
            root={StudentList}
            map={{
                new: NewStudent,
                edit: EditStudent
            }}
        />
    )
}