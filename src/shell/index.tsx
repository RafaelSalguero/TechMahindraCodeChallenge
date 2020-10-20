import * as React from "react";

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

            </div>

            <div className="content">
                {props.children}
            </div>
        </div>
    )
}