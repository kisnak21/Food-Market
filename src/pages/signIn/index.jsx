import {View, Text} from 'react-native';
import React from 'react';
import {Button, Gap, Header, TextInput} from '../../components';

const SignIn = () => {
  return (
    <View className="flex-1 bg-white">
      <Header title="Sign In" subtitle="Find your best ever meal" />
      <View className="bg-white px-6 py-6 mt-6 flex-1">
        <TextInput
          label="Email Address"
          placeholder="Type your email address"
        />
        <Gap height={16} />
        <TextInput label="Password" placeholder="Type your password" />
        <Gap height={16} />
        <Button label="Sign In" />
        <Gap height={12} />
        <Button label="Create New Account" color="#8d92a3" textColor="white" />
      </View>
    </View>
  );
};

export default SignIn;
