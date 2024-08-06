import { FormContainer } from '../FormContainer/FormContainer.const';
import { IFormFieldLabel, IFormInput } from '../FormInput/FormInput.const';

export const FormNavigator = ({ formContainers }: { formContainers: FormContainer[] }) => {
  return (
    <div>
      {formContainers.map((formContainer) => (
        <div key={formContainer.key}>
          {formContainer.formInputs.map((formInput: IFormInput) => (
            <div key={formInput.name}>
              {(formInput is IFormFieldLabel).label && <label>{formInput.name}</label>}
              <input type={formInput.type} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
