import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { EventBus } from '../../core/EventBus';
import { Button } from '../Button';
import { FormContainer } from '../FormContainer';
import { IFormContainer } from '../FormContainer/FormContainer.const';
import { hasFormNavigatorHook, IFormNavigator } from './FormNavigator.const';
import { CompletedApplicationFormContainer } from '../../domain/QuickApply.const';
import { SimpleModal } from '../SimpleModal';

export const FormNavigator = ({
  formNavigator,
  navigation,
}: {
  formNavigator: IFormNavigator;
  navigation: any;
}) => {
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [finishButtonText, setFinishButtonText] = useState('Save');
  const [goHome, setGoHome] = useState(false);
  const [finishEarly, setFinishEarly] = useState(false);
  const [formContainers, setFormContainers] = useState<IFormContainer[]>(
    formNavigator.formContainers,
  );
  const [modalVisible, setModalVisible] = useState(false);

  const saveForm = async (formContainer: IFormContainer) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
  };

  const isLastForm = () => index === formContainers.length - 1;

  const finishForm = () => {
    setModalVisible(true);
    setLoading(false);
  };

  const handleSubmit = async () => {
    setLoading(true);

    await saveForm(formNavigator.formContainers[index]);

    if (goHome) {
      navigation.navigate('Home');
      return setLoading(false);
    }

    if (finishEarly) {
      return finishForm();
    }

    if (isLastForm()) {
      if (hasFormNavigatorHook(formNavigator)) {
        formNavigator.onFinish();
        return setLoading(false);
      }

      return finishForm();
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

  const handleHideModal = () => {
    setModalVisible(false);
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

      <SimpleModal
        visible={modalVisible}
        hideModal={() => handleHideModal()}
      ></SimpleModal>
    </View>
  );
};
