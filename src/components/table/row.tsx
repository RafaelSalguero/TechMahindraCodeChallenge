import React from "react";
import { TableColumn } from "./logic";

interface Props<T> {
value: T;
columns: TableColumn<T>[];
}

/**A table data row */
export function TableRow<T>(props: Props<T>) {
    return (
        <tr>
            {
                props.columns.map((x, i) => 
                    <td                        key={i}>
                        {props.columns[i].data(props.value)}
                    </td>
                    )
            }
        </tr>
    )
}

