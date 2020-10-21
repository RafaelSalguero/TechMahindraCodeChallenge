import React from "react";
import { AnyAction } from "redux";
import Link from "redux-first-router-link";

interface Props {
    to: AnyAction;
}

export function NavLink(props: React.PropsWithChildren<Props>) {
    return (
        <Link to={props.to} className="nav-link">
            {props.children}
        </Link>
    )
}