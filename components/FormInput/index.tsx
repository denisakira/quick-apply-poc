import { useEffect } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import {
  IFormFieldHooks,
  IFormFieldLabel,
  IFormInput,
} from './FormInput.const';

export const hasFormFieldLabel = (
  formInput: IFormInput | IFormFieldLabel,
): formInput is IFormFieldLabel => {
  return (formInput as IFormFieldLabel).label !== undefined;
};

export const hasFormFieldHooks = (
  formInput: IFormInput | IFormFieldHooks,
): formInput is IFormFieldHooks => {
  return (
    (formInput as IFormFieldHooks).onInit !== undefined &&
    (formInput as IFormFieldHooks).onChange !== undefined &&
    (formInput as IFormFieldHooks).onSubmit !== undefined
  );
};

export const FormInput = ({ formInput }: { formInput: IFormInput }) => {
  const onInit = hasFormFieldHooks(formInput) ? formInput.onInit : () => {};
  const onChange = hasFormFieldHooks(formInput) ? formInput.onChange : () => {};
  const onSubmit = hasFormFieldHooks(formInput) ? formInput.onSubmit : () => {};

  useEffect(() => {
    onInit();
  }, []);

  return (
    <View style={styles.container}>
      {hasFormFieldLabel(formInput) && formInput.label && (
        <Text style={styles.label}>{formInput.label}</Text>
      )}
      <TextInput onChange={onChange} style={styles.input}></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 16,
  },
  label: {
    fontSize: 16,
    paddingBottom: 8,
  },
  input: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 8,
  },
});
