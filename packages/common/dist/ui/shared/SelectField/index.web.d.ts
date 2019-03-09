import { FieldProps } from "formik";
import React from "react";
export declare class SelectField extends React.Component<FieldProps<any>> {
    onValueChange: (value: string) => void;
    render(): JSX.Element;
}
