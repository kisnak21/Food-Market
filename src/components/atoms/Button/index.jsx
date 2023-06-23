import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Button = ({label, color = '#ffc700', textColor = '#020202'}) => {
  return (
    <View className="p-3 rounded-lg" style={styles.container(color)}>
      <Text className="text-sm text-center" style={styles.text(textColor)}>
        {label}
      </Text>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: color => ({backgroundColor: color}),
  text: textColor => ({fontFamily: 'Poppins-Medium', color: textColor}),
});
