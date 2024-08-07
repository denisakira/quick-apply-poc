import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { EventBus } from '../../core/EventBus';
import { Button } from '../Button';
import { FormContainer } from '../FormContainer';
import { IFormContainer } from '../FormContainer/FormContainer.const';
import { hasFormNavigatorHook, IFormNavigator } from './FormNavigator.const';
import { CompletedApplicationFormContainer } from '../../domain/QuickApply.const';

export const FormNavigator = ({
  formNavigator,
}: {
  formNavigator: IFormNavigator;
}) => {
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [finishButtonText, setFinishButtonText] = useState('Save');
  const [goHome, setGoHome] = useState(false);
  const [finishEarly, setFinishEarly] = useState(false);
  const [formContainers, setFormContainers] = useState<IFormContainer[]>(
    formNavigator.formContainers,
  );

  const formFinished = () => {
    console.log('Form finished');
  };

  const saveForm = async (formContainer: IFormContainer) => {
    console.log('Form saved', formContainer);
    await new Promise((resolve) => setTimeout(resolve, 1000));
  };

  const isLastForm = () => index === formContainers.length - 1;

  const handleSubmit = async () => {
    setLoading(true);

    await saveForm(formNavigator.formContainers[index]);

    if (goHome) {
      console.log('Go home');
      setLoading(false);

      return;
    }

    if (finishEarly) {
      formFinished();
      setLoading(false);

      return;
    }

    if (isLastForm()) {
      if (hasFormNavigatorHook(formNavigator)) {
        formNavigator.onFinish();
      }
      formFinished();
      setLoading(false);

      return;
    }

    setIndex(index + 1);
    setLoading(false);
  };

  const handleBackButton = () => {
    if (index === 0) {
      return;
    }

    setIndex(index - 1);
  };

  useEffect(() => {
    EventBus.$on('showFinishButton', () => {
      setFinishButtonText('Finish');
      setFinishEarly(true);
      setGoHome(false);
    });

    EventBus.$on('showSaveButton', () => {
      setFinishButtonText('Save');
      setFinishEarly(false);
      setGoHome(false);
    });

    EventBus.$on('showHomeButton', () => {
      setFinishButtonText('Go back home');
      setFinishEarly(false);
      setGoHome(true);
    });

    EventBus.$on('startExternalForm', () => {
      setFormContainers([new CompletedApplicationFormContainer()]);
      setIndex(0);
    });

    return () => {
      EventBus.$remove('showFinishButton');
      EventBus.$remove('showSaveButton');
      EventBus.$remove('showHomeButton');
      EventBus.$remove('startExternalForm');
    };
  }, []);

  return (
    <View>
      {formContainers.length > 0 && (
        <View>
          <FormContainer formContainer={formContainers[index]} />
          <Button
            onPress={() => handleBackButton()}
            loading={loading}
            text="Back"
          />
          <Button
            onPress={async () => await handleSubmit()}
            loading={loading}
            text={finishButtonText}
          />
        </View>
      )}
    </View>
  );
};
