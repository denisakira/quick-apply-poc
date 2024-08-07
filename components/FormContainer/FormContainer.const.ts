import { IBaseFormInput } from '../../core/BaseForm';

export interface IFormContainerHooks {
  onInit?: () => unknown;
  onSubmit?: () => unknown;
  onChange?: () => unknown;
  setValue?: () => unknown;
  setVisibility?: () => unknown;
}

export interface IFormContainer {
  formInputs: IBaseFormInput[];
}
