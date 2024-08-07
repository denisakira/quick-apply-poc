import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { FormContainer } from './components/FormContainer';
import { ProfileForm, QuickApplyFormNavigator } from './domain/QuickApply.const';
import { FormNavigator } from './components/FormNavigator';
import { RadioButton } from './components/RadioButton';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quick Apply</Text>

      <FormNavigator formNavigator={new QuickApplyFormNavigator()}></FormNavigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'beige',
    padding: 40,
  },
  title: {
    fontSize: 32,
    paddingBottom: 16,
    paddingTop: 16,
  },
});
