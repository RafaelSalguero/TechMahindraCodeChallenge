import * as React from "react";
import { goto } from "react-tree-router";
import { home } from "src/routes";
import { NavLink } from "./nav-link";



/**The app shell contains the main menu, app title and app content */
export function Shell(props: React.PropsWithChildren<{}>) {
    return (
        <div className="shell">
            <div className="icon">
                Tech Mahindra
            </div>
            <div className="header">
                <span>
                    Rafael Salguero <b>code challenge</b>
                </span>
            </div>

            <div className="sidebar">
                <NavLink to={goto(home.students)}>
                    Students
                </NavLink>
            </div>

            <div className="content">
                {props.children}
            </div>
        </div>
    )
}