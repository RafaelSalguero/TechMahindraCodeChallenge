import React from "react";
import { createField, Form } from "src/components/form";
import { Input } from "src/components/input";
import { LabelInput, LabelNumber } from "src/components/label-field";
import { Section } from "src/shell/form-ui";
import { Student } from "../logic";
import { AddressForm } from "./address";

interface Props {
    value: Student;
    onChange: (x: Student) => void;
}

export function StudentForm(props: Props) {
    const Field = createField<Student>();

    return (
        <Form {...props}>
            <div className="form">
                <Section title="Personal data">
                    <Field
                        render={LabelInput}
                        label="First name"
                        field="firstName"
                    />

                    <Field
                        render={LabelInput}
                        label="Last name"
                        field="lastName"
                    />
                </Section>

                <Section title="Address">
                    <Field
                        render={AddressForm}
                        field="address"
                    />
                </Section>

                <Section title="Performance">
                    <Field
                        render={LabelNumber}
                        field="GPA"
                        label="GPA"
                    />
                </Section>

                <Section title="Contact">
                    <Field
                        render={LabelInput}
                        field="phone"
                        label="Phone"
                    />
                </Section>
            </div>
        </Form>
    )
}