import React from "react";
import { useState } from "react";
import { ShellContent } from "src/shell/shell-ui";
import { Student } from "../logic";
import { StudentForm } from "./form";
import { validate } from "./logic";


const emptyStudent: Student = {
    firstName: "",
    lastName: "",
    GPA: 0,
    phone: "",
    address: {
        city: "",
        state: "",
        street: "",
        streetNumber:"",
        zipCode: ""
    }
}

export function NewStudent()  {
    const [value, setValue] = useState<Student>(emptyStudent);

    return (
        <ShellContent
            buttons={
                <button className="button" disabled={!validate(value)}>
                    Save new student
                </button>
            }
        >
            <StudentForm value={value} onChange={setValue} />
        </ShellContent>
    )
}