import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { goto, RouteComponentProps,  useRouteProps } from "react-tree-router";
import { first } from "simple-pure-utils";
import { studentUpdated } from "src/redux/actions";
import { State } from "src/redux/state";
import { home } from "src/routes";
import { ShellContent } from "src/shell/shell-ui";
import { Student } from "../logic";
import { StudentForm } from "./form";
import { validate } from "./logic";

interface Props extends RouteComponentProps<{id: number}> {

}

export function EditStudent(props: Props) {
    const id = props.route!.params.id;
    const stateValue = useSelector((state: State) => first( state.students, x => x.id == id)!);

    const [value, setValue] = useState<Student>(stateValue);
    const dispatch = useDispatch();

    const onSave = () => {
        dispatch(studentUpdated(id, value));
        dispatch(goto(home.students));
    }

    return (
        <ShellContent
            buttons={
                <button className="button" disabled={!validate(value)} onClick={onSave}>
                    Update student
                </button>
            }
        >
            <StudentForm value={value} onChange={setValue} />
        </ShellContent>
    );
}