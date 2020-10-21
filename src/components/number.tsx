import React from "react";
import { formatNumber, numEqStr } from "simple-pure-utils";
import { Input } from "./input";

interface Props {
    value?: number;
    onChange?: (x: number) => void;
}

/**Returns true if the number value and the input value are considered equivalent */
function valEqStr(num: number | undefined, str: string): boolean {
    if (num == undefined) return str == "";
    return numEqStr(num, str);
}



/**A numeric input */
export function NumberInput(props: Props) {
    const formattedNumber = formatNumber(props.value, 1, 2);
    const [text, setText] = React.useState<string>((!props.value) ? "" : formattedNumber);


    const ignoreTextChange = text == "";
    if (!ignoreTextChange && (!valEqStr(props.value, text))) {
        setText(formattedNumber);
    }

    const onChange = (x: string) => {
        setText(x);
        props.onChange?.(parseFloat(x));
    }

    return (
        <Input 
            value={text}
            onChange={onChange}
        />
    )
}