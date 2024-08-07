import { IBaseFormInput } from '../../core/BaseForm.const';

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
