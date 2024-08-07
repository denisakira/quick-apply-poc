export enum BaseFormType {
  email = 'email',
  text = 'text',
  radio = 'radio',
}

export interface IBaseFormInput {
  key: string;
  type: BaseFormType;
}
