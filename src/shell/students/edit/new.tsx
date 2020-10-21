import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { goto } from "react-tree-router";
import { studentAdded } from "src/redux/actions";
import { home } from "src/routes";
import { ShellContent } from "src/shell/shell-ui";
import { Student } from "../logic";
import { StudentForm } from "./form";
import { validate } from "./logic";


const emptyStudent: Student = {
    address: {} as any
} as any;

/**Page to add a new student */
export function NewStudent() {
    const [value, setValue] = useState<Student>(emptyStudent);

    const dispatch = useDispatch();
    const onSave = () => {
        dispatch(studentAdded(value));
        dispatch(goto(home.students));
    }

    return (
        <ShellContent
            buttons={
                <button className="button" disabled={!validate(value)} onClick={onSave}>
                    Save new student
                </button>
            }
        >
            <StudentForm value={value} onChange={setValue} />
        </ShellContent>
    )
}