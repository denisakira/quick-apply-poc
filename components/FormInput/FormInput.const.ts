import { IBaseFormInput } from '../../core/BaseForm.const';

export enum Validation {
  Required = 'required',
  MinLength = 'minLength',
  MaxLength = 'maxLength',
  Pattern = 'pattern',
  Email = 'email',
  Min = 'min',
  Max = 'max',
}

export interface IFormInput extends IBaseFormInput {
  name: string;
  validation: Validation[];
  value: string;
}

export interface IFormFieldLabel {
  label: string;
  placeholder: string;
}

export interface IFormFieldHooks {
  onInit: () => unknown;
  onSubmit: () => unknown;
  onChange: () => unknown;
}
