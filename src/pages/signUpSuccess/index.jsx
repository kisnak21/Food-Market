import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IlSuccess_signUp} from '../../assets';
import {Button, Gap} from '../../components';

const SignUpSuccess = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <IlSuccess_signUp />
      <Gap height={30} />
      <Text className="text-[20px] text-[#020202]" style={styles.title}>
        Yeay! Completed
      </Text>
      <Gap height={6} />
      <Text style={styles.subtitle}>Now you are able to order</Text>
      <Text style={styles.subtitle}>some foods as a self-reward</Text>
      <Gap height={30} />
      <View className="w-full px-20">
        <Button label="Find Foods" />
      </View>
    </View>
  );
};

export default SignUpSuccess;

const styles = StyleSheet.create({
  title: {fontFamily: 'Poppins-Regular'},
  subtitle: {fontFamily: 'Poppins-Light', color: '#8d92a3'},
});
