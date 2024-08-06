export enum Validation {
  Required = 'required',
  MinLength = 'minLength',
  MaxLength = 'maxLength',
  Pattern = 'pattern',
  Email = 'email',
  Min = 'min',
  Max = 'max',
}

export interface IFormInput {
  name: string;
  type: string;
  validation: Validation[];
  value: string;
}

export interface IFormFieldLabel {
  label: string;
  placeholder: string;
}

export interface IFormFieldHooks {
  onInit: Function;
  onSubmit: Function;
  onChange: Function;
}
