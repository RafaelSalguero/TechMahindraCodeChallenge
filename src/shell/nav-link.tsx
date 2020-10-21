import React from "react";
import { useInLocation } from "react-tree-router";
import { AnyAction } from "redux";
import Link from "redux-first-router-link";
import { mixClasses } from "simple-pure-utils";

interface Props {
    to: AnyAction;
}

export function NavLink(props: React.PropsWithChildren<Props>) {
    const active = useInLocation(props.to.type);
    
    return (
        <Link to={props.to} className={mixClasses("nav-link", active && "active")}>
            {props.children}
        </Link>
    )
}