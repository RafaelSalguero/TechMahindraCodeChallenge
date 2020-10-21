import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { RouterView } from "react-tree-router";
import { configureStore } from "./redux/configure-store";
import { home } from "./routes";
import { Shell } from "./shell";
import { StudentList } from "./shell/students/list";
import { Welcome } from "./shell/welcome";

/**Root app component */
export function App() {
    return (
        <Shell>
            <RouterView
                base={home}
                root={Welcome}
                map={{
                    students: StudentList
                }}
            />
        </Shell>
    )
}

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById("root"));