import React from "react";
import { useSelector } from "react-redux";
import { formatNumber } from "simple-pure-utils";
import { Table } from "src/components/table";
import { TableColumn } from "src/components/table/logic";
import { State } from "src/redux/state";
import { Student } from "../logic";

const columns: TableColumn<Student>[] = [
    {
        title: "First name",
        data:x => x.firstName
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
    }
];

/**Student list */
export function StudentList() {
    const value = useSelector((state: State) => state.students);

    return (
        <Table 
            columns={columns}
            value={value}
        />
    )
}