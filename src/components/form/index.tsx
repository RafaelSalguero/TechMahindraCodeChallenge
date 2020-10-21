import React, { useCallback, useMemo } from "react";
import { omit } from "simple-pure-utils";
import { Field } from "./field";
import { formContext, FormProps } from "./logic";

/**Distrubute value and onChange on child Field components */
export function Form<T> (props: React.PropsWithChildren<FormProps<T>>) {
    const contextProps = omit(props, ["children"]);

    return (
        <formContext.Provider value={contextProps}>
            {props.children}
        </formContext.Provider>
    )
}


/**Returns a typed Field component for the form */
export function createField<T>() {
    type ControlProps<TProps extends { [k: string]: any }> = {
        render: React.ComponentType<TProps>;
        field: keyof T;
        ref?: React.Ref<any>;
    } & (
            Partial<Pick<TProps, "value">> &
            Pick<TProps, Exclude<keyof TProps, "value" | "onChange">> & {
                onChange?: TProps["onChange"] | null
            }
        )

    function FieldType<TProps>(props: ControlProps<TProps>) { return null as React.ReactElement | null; }
    type RetType = typeof FieldType;
    return Field as any as RetType;
}