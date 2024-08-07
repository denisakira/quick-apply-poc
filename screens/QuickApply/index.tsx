import { StyleSheet, Text, View } from 'react-native';
import { QuickApplyFormNavigator } from '../../domain/QuickApply.const';
import { FormNavigator } from '../../components/FormNavigator';

export const QuickApplyScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Quick Apply</Text>

    <FormNavigator
      formNavigator={new QuickApplyFormNavigator()}
      navigation={navigation}
    ></FormNavigator>
  </View>
);

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
