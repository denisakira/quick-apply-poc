import { IFormContainer } from '../FormContainer/FormContainer.const';

export interface IContext {
  companyLocationId: string;
}

export interface IFormNavigator {
  context: IContext;
  formContainers: IFormContainer[];
}

export interface IFormNavigatorHook {
  onFinish: () => void;
}

export const hasFormNavigatorHook = (
  formNavigator: IFormNavigator | IFormNavigatorHook,
): formNavigator is IFormNavigatorHook => {
  return (formNavigator as IFormNavigatorHook).onFinish !== undefined;
};
