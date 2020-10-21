import React from "react";
import { createField, Form } from "src/components/form";
import { LabelInput } from "src/components/label-field";
import { Address } from "../logic";

interface Props {
    value: Address;
    onChange: (x: Address) => void;
}

/**Form for the student address */
export function AddressForm(props: Props) {
    const Field = createField<Address>();

    return (
        <>
            <Form {...props}>
                <Field
                    render={LabelInput}
                    field="street"
                    label="Street"
                />

                <Field
                    render={LabelInput}
                    field="streetNumber"
                    label="Street number"
                />

                <Field
                    render={LabelInput}
                    field="city"
                    label="City"
                />

                <Field
                    render={LabelInput}
                    field="state"
                    label="State"
                />

                <Field
                    render={LabelInput}
                    field="zipCode"
                    label="Zip code"
                />
            </Form>
        </>
    )
}