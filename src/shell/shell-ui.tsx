import React from "react";
import { goto } from "react-tree-router";
import Link from "redux-first-router-link";

interface Props {
    buttons: React.ReactNode;
}

/**Shell ui content layout */
export function ShellContent(props: React.PropsWithChildren<Props>) {
    return (
        <div className="table-ui">
            <div className="header">
                {props.buttons}
            </div>

            <div className="content">
                {props.children}
            </div>
        </div>
    )
}