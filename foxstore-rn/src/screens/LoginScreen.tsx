import React from 'react';
import {View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {useAuth} from '../context/AuthContext';
export const LoginScreen = () => {
  const {login} = useAuth();
  return <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#111'}}><Text variant="headlineMedium">Fox Store</Text><Button mode="contained" onPress={login}>Google Sign-In</Button></View>;
};
