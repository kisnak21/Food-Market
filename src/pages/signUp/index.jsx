import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Gap, Header, TextInput} from '../../components';

const SignUp = () => {
  return (
    <View className="flex-1 bg-neutral-100">
      <Header title="Sign Up" subtitle="Register and eat" onBack={() => {}} />
      <View className="bg-white px-6 py-6 mt-6 flex-1">
        <View className="items-center mt-[26px] mb-4">
          <View className="border-[1px] border-neutral-200 w-[110px] h-[110px] rounded-[110px] border-dashed justify-center items-center">
            <View className="p-6 w-[90px] h-[90px] rounded-[90px] bg-[#f0f0f0] ">
              <Text
                className="text-sm text-[#8d92a3] text-center"
                style={styles.addPhoto}>
                Add Photo
              </Text>
            </View>
          </View>
        </View>
        <TextInput label="Full Name" placeholder="Type your full name" />
        <Gap height={16} />
        <TextInput
          label="Email Address"
          placeholder="Type your email address"
        />
        <Gap height={16} />
        <TextInput label="Password" placeholder="Type your password" />
        <Gap height={16} />
        <Button label="Continue" />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  addPhoto: {fontFamily: 'Poppins-Light'},
});
