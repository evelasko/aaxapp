import { FieldProps } from "formik";
import * as React from "react";
import { TextInput } from "react-native";

export class InputField extends React.Component<FieldProps<any>> {
  onChangeText = (text: string) => {
    const { form: { setFieldValue }, field: { name } } = this.props
    setFieldValue(name, text)
  }

  render() {
    const { field, form: { touched, errors }, ...props } = this.props
    const errorMsg = touched[field.name] && errors[field.name]
    return (
      <TextInput
        {...props}
        onChangeText={this.onChangeText}
        value={field.value}
      />
    );
  }
}