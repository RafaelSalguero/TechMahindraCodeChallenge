import { AnyAction } from "redux";
import { State } from "../state";

const initialState : State = {
    students:  [
        {
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
        },{
            firstName: "Wassily",
            lastName: "Kandinsky",
            GPA: 1.7,
            address: {
                city: "Guadalajara",
                state:  "Jalisco",
                street: "Cuauhtemoc",
                streetNumber: "5832",
                zipCode: "84294"
            },
            phone: "533 35 24 64"
        }
    ]
};

/**App global reducer */
export function reducer(state: State = initialState, action: AnyAction ) : State {
    return state;
}