import { ActivityIndicator, Pressable, StyleSheet, Text } from 'react-native';

export const Button = ({
  onPress,
  loading,
  text,
}: {
  onPress: () => void;
  loading: boolean;
  text: string;
}) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      {loading ? <ActivityIndicator /> : <Text>{text}</Text>}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    borderRadius: 4,
    padding: 8,
    width: '100%',
    borderWidth: 1,
    marginTop: 16,
    display: 'flex',
    alignItems: 'center',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.1,
  },
});
