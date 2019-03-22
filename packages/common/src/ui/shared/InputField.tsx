import { FieldProps } from "formik";
import * as React from "react";
import { Text, TextInput, View } from "react-native";

export class InputField extends React.Component<FieldProps<any>> {
  onChangeText = (text: string) => {
    const { form: { setFieldValue }, field: { name } } = this.props
    setFieldValue(name, text)
  }

  render() {
    const { field, form: { touched, errors }, ...props } = this.props
    const errorMsg = touched[field.name] && errors[field.name]
    return (
      <View style={{width: '100%'}}>
        <TextInput
          {...props}
          onChangeText={this.onChangeText}
          value={field.value}
        />
        {errorMsg && <Text style={{color: '#F17A61', fontSize: 11}}>{errorMsg}</Text>}
      </View>
    );
  }
}