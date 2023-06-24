import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {Picker} from '@react-native-picker/picker';

const Select = () => {
  return (
    <View>
      <Text className="text-black" style={styles.label}>
        Select
      </Text>
      <View style={styles.input}>
        <Picker
          dropdownIconColor={'black'}
          dropdownIconRippleColor={'white'}

          // selectedValue={selectedLanguage}
          // onValueChange={(itemValue, itemIndex) =>
          //   setSelectedLanguage(itemValue)
          // }
        >
          <Picker.Item label="Java" value="java" color="black" />
          <Picker.Item label="JavaScript" value="js" color="black" />
        </Picker>
      </View>
    </View>
  );
};

export default Select;

const styles = StyleSheet.create({
  label: {fontFamily: 'Poppins-Regular'},
  input: {
    borderWidth: 1,
    color: '#020202',
    borderRadius: 8,
    paddingHorizontal: 2,
    paddingVertical: 0,
    marginTop: 8,
  },
});
