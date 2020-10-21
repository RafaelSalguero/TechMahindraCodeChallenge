import { LocationState } from "redux-first-router";
import { Student } from "src/shell/students/logic";

/**App global state */
export interface State {
    students: Student[];
    /**Routing state */
    location: LocationState<any>,
}