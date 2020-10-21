import { AnyAction } from "redux";
import { assertUnreachable, max } from "simple-pure-utils";
import { Student } from "src/shell/students/logic";
import { Action } from "../actions";
import { State } from "../state";

export const initialState: State = {
    students: [
        {
            id: 1,
            firstName: "Frida",
            lastName: "Kahlo",
            GPA: 3.5,
            address: {
                city: "Coyoacan",
                state: "Mexico City",
                street: "St One",
                streetNumber: "1257",
                zipCode: "87299"
            },
            phone: "655 35 35 23"
        }, {
            id: 2,
            firstName: "Wassily",
            lastName: "Kandinsky",
            GPA: 1.7,
            address: {
                city: "Guadalajara",
                state: "Jalisco",
                street: "Cuauhtemoc",
                streetNumber: "5832",
                zipCode: "84294"
            },
            phone: "533 35 24 64"
        }
    ],
    location: {
        pathname: "/"
    } as any
};

/**App global reducer */
export function reducer(state: State = initialState, action: Action): State {
    return {
        ...state,
        students: studentsReducer(state.students, action)
    };
}

function studentsReducer(state: Student[], action: Action): Student[] {
    switch (action.type) {
        case "STUDENT_ADDED":
            const nextId = (max(state.map(x => x.id)) ?? 0) + 1;
            return [...state, { ...action.payload, id: nextId }];
        case "STUDENT_DELETED":
            return state.filter(x=> x.id != action.payload);
        case "STUDENT_UPDATED":
            return state.map(x => x.id == action.payload.index ? action.payload.value : x);
        default:
            return state;
    }
}