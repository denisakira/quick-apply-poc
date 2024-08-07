import { IFormContainer } from '../components/FormContainer/FormContainer.const';
import {
  IFormFieldLabel,
  IFormInput,
  Validation,
} from '../components/FormInput/FormInput.const';
import {
  IFormNavigator,
  IFormNavigatorHook,
} from '../components/FormNavigator/FormNavigator.const';
import { IRadioButton } from '../components/RadioButton/RadioButton.const';
import { BaseFormType, IBaseFormInput } from '../core/BaseForm.const';
import { EventBus } from '../services/EventBus';

export class NameFormInput implements IFormInput, IFormFieldLabel {
  key = 'name';
  name = 'name';
  type = BaseFormType.text;
  value = '';
  validation = [Validation.Required];
  label = 'Name';
  placeholder = 'Enter your name';
}

export class EmailFormInput implements IFormInput, IFormFieldLabel {
  key = 'email';
  name = 'email';
  type = BaseFormType.email;
  value = '';
  validation = [Validation.Required, Validation.Email];
  label = 'Email';
  placeholder = 'Enter your email';
}

export class ProfileForm implements IFormContainer {
  key = 'profile-form';
  formInputs: IFormInput[] = [new NameFormInput(), new EmailFormInput()];
}

export class CompanyFormInput implements IFormInput, IFormFieldLabel {
  key = 'company';
  name = 'company';
  type = BaseFormType.text;
  value = '';
  validation = [Validation.Required];
  label = 'Company';
  placeholder = 'Enter your company';
}

export class FinishEarlyRadioButton implements IRadioButton {
  key = 'finish-early';
  type = BaseFormType.radio;
  question = 'Do you want to finish early?';
  options = [
    {
      key: 'yes',
      value: 'Yes',
      onOptionSelected: () => {
        EventBus.$dispatch('showFinishButton');
      },
    },
    {
      key: 'no',
      value: 'No',
      onOptionSelected: () => {
        EventBus.$dispatch('showSaveButton');
      },
    },
  ];
}

export class CompanyForm implements IFormContainer {
  key = 'company-form';
  formInputs: IBaseFormInput[] = [
    new CompanyFormInput(),
    new FinishEarlyRadioButton(),
  ];
}

export class CompletedApplicationRadioButton implements IRadioButton {
  key = 'completed-application';
  type = BaseFormType.radio;
  question = 'Have you completed the application?';
  options = [
    {
      key: 'yes',
      value: 'Yes',
      onOptionSelected: () => {
        EventBus.$dispatch('showFinishButton');
      },
    },
    {
      key: 'no',
      value: 'No',
      onOptionSelected: () => {
        EventBus.$dispatch('showHomeButton');
      },
    },
  ];
}

export class CompletedApplicationFormContainer implements IFormContainer {
  key = 'completed-application-form';
  formInputs: IBaseFormInput[] = [new CompletedApplicationRadioButton()];
}

export class ExternalQuickApplyFormNavigator implements IFormNavigator {
  context = { companyLocationId: '123' };
  formContainers: IFormContainer[] = [new CompletedApplicationFormContainer()];
}

export class QuickApplyFormNavigator
  implements IFormNavigator, IFormNavigatorHook
{
  context = { companyLocationId: '123' };
  formContainers: IFormContainer[] = [new ProfileForm(), new CompanyForm()];
  onFinish = () => EventBus.$dispatch('startExternalForm');
}
