import { FieldProps } from "formik";
import React from "react";
import { Picker } from "react-native";

export class SelectField extends React.Component<FieldProps<any>> {
  onValueChange = (value: string) => {
    const { form: { setFieldValue }, field: { name } } = this.props
    setFieldValue(name, value)
  }

  render() {
    const { field, form: { touched, errors }, ...props } = this.props
    const errorMsg = touched[field.name] && errors[field.name]
    return (
      <Picker
        {...props}
        onValueChange={this.onValueChange}
        selectedValue={field.value}
      />
    );
  }
}