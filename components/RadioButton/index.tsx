import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { IRadioButtonOption } from './RadioButton.const';

export const RadioButton = ({
  question,
  options,
}: {
  question: string;
  options: IRadioButtonOption[];
}) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOnPress = (option: IRadioButtonOption) => {
    setSelectedOption(option.value);
    option?.onOptionSelected();
  };

  return (
    <View style={styles.container}>
      <Text>{question}</Text>
      {options.map((option) => (
        <RadioButtonOption
          key={option.key}
          option={option}
          onPress={handleOnPress}
          selected={option.value === selectedOption}
        />
      ))}
    </View>
  );
};

export const RadioButtonOption = ({
  option,
  selected,
  onPress,
}: {
  option: IRadioButtonOption;
  selected: boolean;
  onPress: (option: IRadioButtonOption) => unknown;
}) => {
  return (
    <Pressable style={styles.row} onPress={() => onPress(option)}>
      <View style={styles.radioButton}>
        {selected ? <View style={styles.selectedRadioButton} /> : null}
      </View>
      <Text>{option.value}</Text>
    </Pressable>
  );
};

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  radioButton: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRadioButton: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: '#000',
  },
  radioButtonLabel: {
    fontSize: 16,
  },
});
