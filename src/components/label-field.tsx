import React from "react";
import { Input } from "./input";
import { NumberInput } from "./number";

interface LabelFieldProps {
    label?: React.ReactNode;
}

function LabelField(props: React.PropsWithChildren<LabelFieldProps>) {
    return (
        <div className="label-input">
            <div className="label">
                {props.label}
            </div>

            <div className="input">
                {props.children}
            </div>
        </div>
    )
}


interface Props<T> {
    label?: React.ReactNode;
    value?: T;
    onChange?: (x: T) => void;
}

/**An input with a label */
export function LabelInput(props: Props<string>) {
    return (
        <LabelField label={props.label} >
            <Input
                value={props.value}
                onChange={props.onChange}
            />
        </LabelField>
    );
}


/**A numeric input with a label */
export function LabelNumber(props: Props<number>) {
    return (
        <LabelField label={props.label} >
            <NumberInput
                value={props.value}
                onChange={props.onChange}
            />
        </LabelField>
    );
}