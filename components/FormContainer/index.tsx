import { FormInput } from '../FormInput';
import { IFormInput } from '../FormInput/FormInput.const';

export const FormContainer = ({ formInputs }: { formInputs: IFormInput[] }) => {
  return (
    <div>
      {formInputs.map((formInput) => (
        <div key={formInput.name}>
          <FormInput />
        </div>
      ))}
    </div>
  );
};
