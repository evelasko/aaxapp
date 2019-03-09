import { FieldProps } from "formik";
import React from "react";
interface Props {
    items: [];
}
export declare class SelectField extends React.Component<FieldProps<any> & Props> {
    onValueChange: (value: string) => void;
    render(): JSX.Element;
}
export {};
