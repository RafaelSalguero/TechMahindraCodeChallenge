import React from "react";
import { omit } from "simple-pure-utils";
import { formContext, FormProps } from "./logic";

interface FieldViewProps<T> {
    render: React.ComponentType<any>;
    field: keyof T;
    value?: any;
    onChange?: (x: any) => void;
}

function FieldView<T>(props: FieldViewProps<T>){
    const Render = props.render; 

    const userProps = omit(props, ["render", "field"]);

    const compProps = {
        ...userProps,
        value: props.value?.[props.field],
        onChange: (x: any) => props.onChange?.({
            ... (props.value ?? {}),
            [props.field] : x
        })
    };

    return <Render {...compProps} />
}

interface Props<T> {
    render: React.ComponentType<any>;
    field: keyof T;
}

export function Field<T>(props: Props<T>) {
    return (
        <formContext.Consumer>
            {value => <FieldView<T> {...value} {... props}  />}
        </formContext.Consumer>
    )
}