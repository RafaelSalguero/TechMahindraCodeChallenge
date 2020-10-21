import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { goto } from "react-tree-router";
import Link from "redux-first-router-link";
import { formatNumber } from "simple-pure-utils";
import { Table } from "src/components/table";
import { TableColumn } from "src/components/table/logic";
import { studentDeleted } from "src/redux/actions";
import { State } from "src/redux/state";
import { home } from "src/routes";
import { ShellContent } from "src/shell/shell-ui";
import { Student } from "../logic";

function StudentButtons(props: { value: Student }) {
    const x = props.value;
    const dispatch = useDispatch();
    const onDelete = () => {
        dispatch(studentDeleted(x.id));
    }
    return (
        <div className="button-group">
            <Link to={goto(home.students.edit, { id: x.id })} className="button" >
                Edit
            </Link>
            <button onClick={onDelete} className="button" >
                Delete
            </button>
        </div>
    );
}

const columns: TableColumn<Student>[] = [
    {
        title: "First name",
        data: x => x.firstName
    }, {
        title: "Last name",
        data: x => x.lastName,
    }, {
        title: "Address",
        data: x => `${x.address.streetNumber} ${x.address.street}, ${x.address.city}, ${x.address.state}`
    }, {
        title: "Phone",
        data: x => x.phone
    }, {
        title: "GPA",
        data: x => formatNumber(x.GPA, 1, 2)
    }, {
        title: "Actions",
        data: x => <StudentButtons value={x} />
    }
];

/**Student list */
export function StudentList() {
    const value = useSelector((state: State) => state.students);

    return (
        <ShellContent
            buttons={
                <Link className="button" to={goto(home.students.new)}>
                    Add student
                </Link>
            }
        >
            <Table
                columns={columns}
                value={value}
            />
        </ShellContent>
    )
}