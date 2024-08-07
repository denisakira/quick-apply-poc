import { Text, View } from 'react-native';
import { FormInput } from '../FormInput';
import { IFormInput } from '../FormInput/FormInput.const';
import { IFormContainer } from './FormContainer.const';
import { RadioButton } from '../RadioButton';
import { IBaseFormInput } from '../../core/BaseForm';
import { IRadioButton } from '../RadioButton/RadioButton.const';

export const FormItem = ({ formInput }: { formInput: IBaseFormInput }) => {
  switch (formInput.type) {
    case 'text':
      const textInput = formInput as IFormInput;
      return <FormInput formInput={textInput} key={textInput.key}></FormInput>;
    case 'radio':
      const radioButton = formInput as IRadioButton;
      return (
        <RadioButton
          question={radioButton.question}
          options={radioButton.options}
          key={radioButton.key}
        ></RadioButton>
      );
    case 'email':
      const emailInput = formInput as IFormInput;
      return (
        <FormInput formInput={emailInput} key={emailInput.key}></FormInput>
      );
    default:
      return <Text>Unknown</Text>;
  }
};

export const FormContainer = ({
  formContainer,
}: {
  formContainer: IFormContainer;
}) => {
  return (
    <View>
      {formContainer.formInputs.map((formInput: IFormInput) => (
        <FormItem formInput={formInput} key={formInput.key}></FormItem>
      ))}
    </View>
  );
};
