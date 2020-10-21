import React from "react";

interface Props {
    title: React.ReactNode;
}

/**A form section */
export function Section(props: React.PropsWithChildren<Props>) {
    return (
        <div className="section">
            <div className="title">
                {props.title}
            </div>
            <div className="content">
                {props.children}
            </div>
        </div>
    )
}
