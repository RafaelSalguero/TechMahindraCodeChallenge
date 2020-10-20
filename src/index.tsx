import React from "react";
import ReactDOM from "react-dom";
import { Shell } from "./shell";

/**Root app component */
export function App() {
    return (
        <Shell>
            Hello
        </Shell>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));