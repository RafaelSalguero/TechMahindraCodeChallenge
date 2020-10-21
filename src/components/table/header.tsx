import React from "react";
import { TableColumn } from "./logic";

interface Props {
    columns: TableColumn<any>[];
}

/**A table header */
export function TableHeader(props: Props) {
    return (
        <tr>
            {
                props.columns.map((x, i) =>
                    <th key={i}>
                        {props.columns[i].title}
                    </th>
                )
            }
        </tr>
    )
}