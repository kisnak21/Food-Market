import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Header = ({title, subtitle}) => {
  return (
    <View className="bg-white px-6 py-6">
      <Text className="text-[22px] text-[#020202]" style={styles.title}>
        {title}
      </Text>
      <Text className="text-sm text-[#8d92a3]">{subtitle}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  title: {fontFamily: 'Poppins-Medium'},
});
