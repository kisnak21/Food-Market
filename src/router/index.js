

import React from 'react'
import { SignIn, SignUp, SignUpAddress, SplashScreen } from '../pages'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


const Stack = createNativeStackNavigator()

const Router = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='SplashScreen' component={SplashScreen} options={{headerShown:false}}/>
        <Stack.Screen name='SignIn' component={SignIn} options={{headerShown:false}}/>
        <Stack.Screen name='SignUp' component={SignUp} options={{headerShown:false}}/>
        <Stack.Screen name='SignUpAddress' component={SignUpAddress} options={{headerShown:false}}/>
    </Stack.Navigator>

  )
}

export default Router