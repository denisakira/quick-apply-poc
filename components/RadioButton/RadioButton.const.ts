import { IBaseFormInput } from '../../core/BaseForm.const';

export interface IRadioButton extends IBaseFormInput {
  question: string;
  options: IRadioButtonOption[];
}

export interface IRadioButtonOption {
  key: string;
  value: string;
  onOptionSelected?: () => unknown;
}
