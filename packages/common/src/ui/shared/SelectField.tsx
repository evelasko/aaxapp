import { FieldProps } from "formik";
import * as React from "react";
import { Picker } from "react-native";

interface Props {
  options: [{ label:string, value: string}]
}

export class SelectField extends React.Component<FieldProps<any> & Props> {
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
        mode="dropdown"
      >
      {props.options.map(o => <Picker.Item key={o.value} label={o.label} value={o.value} />)}
      </Picker>
    );
  }
}