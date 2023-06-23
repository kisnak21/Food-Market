import {View, Text, TextInput as TextInputRN, StyleSheet} from 'react-native';
import React from 'react';

const TextInput = ({label, placeholder}) => {
  return (
    <View>
      <Text className="text-[#020202] text-base">{label}</Text>
      <TextInputRN
        placeholder={placeholder}
        style={styles.input}
        placeholderTextColor={'#94a3b8'}
      />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  label: {fontFamily: 'Poppins-Regular'},
  input: {
    borderWidth: 1,
    color: '#020202',
    borderRadius: 8,
    padding: 10,
    marginTop: 8,
  },
});
