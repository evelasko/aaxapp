import { FieldProps } from "formik";
import * as React from "react";
interface Props {
    options: [{
        label: string;
        value: string;
    }];
}
export declare class SelectField extends React.Component<FieldProps<any> & Props> {
    onValueChange: (value: string) => void;
    render(): JSX.Element;
}
export {};
