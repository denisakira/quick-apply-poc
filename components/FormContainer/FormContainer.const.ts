import { IFormInput } from "../FormInput/FormInput.const";

export interface FormContainerHooks {
  onInit?: Function;
  onSubmit?: Function;
  onChange?: Function;
  setValue?: Function;
  setVisibility?: Function;
}

export interface FormContainer {
  key: string;
  formInputs: IFormInput[];
}