import React from 'react';
import {Text, View} from 'react-native';
import {Logo} from '../../assets';

const SplashScreen = () => {
  return (
    <View className="bg-[#ffc700] flex-1 justify-center items-center">
      <Logo />
      <View className="h-[38px]" />
      <Text
        className="text-3xl text-[#020202]"
        style={{fontFamily: 'Poppins-Medium'}}>
        FoodMarket
      </Text>
    </View>
  );
};

export default SplashScreen;
