import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {IcBack} from '../../../assets';

const Header = ({title, subtitle, onBack}) => {
  return (
    <View className="bg-white px-6 py-6 flex-row items-center">
      {onBack && (
        <TouchableOpacity activeOpacity={0.6}>
          <View className="p-4 mr-4 -ml-4">
            <IcBack />
          </View>
        </TouchableOpacity>
      )}
      <View>
        <Text className="text-[22px] text-[#020202]" style={styles.title}>
          {title}
        </Text>
        <Text className="text-sm text-[#8d92a3]">{subtitle}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  title: {fontFamily: 'Poppins-Medium'},
});
