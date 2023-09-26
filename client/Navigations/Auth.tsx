import {useEffect, useState} from 'react';
import LoginScreen from '../src/screens/LoginScreen';
import SignUpScreen from '../src/screens/SignupScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Onboarding from '../src/screens/Onboarding';
import WelcomeScreen from '../src/screens/WelcomeScreen';
import ForgotScreen from '../src/screens/ForgotScreen';

const Auth = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen}/>
      <Stack.Screen name="Onboard" component={Onboarding}/>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignUpScreen} />
    </Stack.Navigator>
  );
};

export default Auth;
