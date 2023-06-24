import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Button, Gap, Header, Select, TextInput} from '../../components';

const SignUpAddress = ({navigation}) => {
  return (
    <View className="flex-1 bg-neutral-100">
      <Header title="Sign Up" subtitle="Register and eat" onBack={() => {}} />
      <View className="bg-white px-6 py-6 mt-6 flex-1">
        <TextInput label="Phone No." placeholder="Type your phone number" />
        <Gap height={16} />
        <TextInput label="Address" placeholder="Type your address" />
        <Gap height={16} />
        <TextInput label="House No." placeholder="Type your house number" />
        <Gap height={16} />
        <Select label="City" />
        <Gap height={16} />
        <Button
          label="Sign Up Now"
          onPress={() => navigation.replace('SignUpSuccess')}
        />
      </View>
    </View>
  );
};

export default SignUpAddress;

const styles = StyleSheet.create({
  addPhoto: {fontFamily: 'Poppins-Light'},
});
