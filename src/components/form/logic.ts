import React from "react";

export interface FormProps<T> {
    value?: T;
    onChange?: (x: T) => void;
}

export const formContext = React.createContext<FormProps<any>>(undefined as any);
