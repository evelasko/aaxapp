import { FieldProps } from "formik";
import React from "react";
import RNPickerSelect from 'react-native-picker-select';

interface Props {
    items: []
}

export class SelectField extends React.Component<FieldProps<any> & Props> {
  onValueChange = (value: string) => {
    const { form: { setFieldValue }, field: { name } } = this.props
    setFieldValue(name, value)
  }

  render() {
    const { field, form: { touched, errors }, ...props } = this.props
    const errorMsg = touched[field.name] && errors[field.name]
    const { items } = this.props
    return (
      <RNPickerSelect
        {...props}
        onValueChange={this.onValueChange}
        value={field.value}
        items={items}
      />
    );
  }
}