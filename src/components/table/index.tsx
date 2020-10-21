import React from "react";
import { TableHeader } from "./header";
import { TableColumn } from "./logic";
import { TableRow } from "./row";

interface Props<T> {
    value: T[];
    columns: TableColumn<T>[];
    className?: string;
}

/**A data table, renders a table from an array of items */
export function Table<T>(props: Props<T>) {
    return (
        <table className={props.className}>
            <thead>
                <TableHeader  columns={props.columns}/>
            </thead>

            <tbody>
                {
                    props.value.map((x,i) => <TableRow value={x} columns={props.columns} />)
                }
            </tbody>
        </table>
    )
}