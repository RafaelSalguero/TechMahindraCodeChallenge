import React from "react";

interface Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange"> {
    value?: string;
    onChange?: (x: string) => void;
}

export function Input(props: Props) {
    return <input 
        {...props}
        value={props.value}
        onChange={ev => props.onChange?.( ev.target.value)}
    />
}