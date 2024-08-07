import { StyleSheet, Text, View } from 'react-native';
import { Button } from '../../components/Button';

export const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Home</Text>

    <Button
      text="Quick Apply"
      onPress={() => navigation.navigate('QuickApply')}
      loading={false}
    />
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
