import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useAuth} from '../context/AuthContext';
import {HomeScreen} from '../screens/HomeScreen';
import {LoginScreen} from '../screens/LoginScreen';
import {ProfileScreen} from '../screens/ProfileScreen';
import {ChatScreen} from '../screens/ChatScreen';
import {UploadScreen} from '../screens/UploadScreen';
import {SettingsScreen} from '../screens/SettingsScreen';
import {AdminScreen} from '../screens/AdminScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MainTabs = () => {
  const {user} = useAuth();
  return <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Chat" component={ChatScreen} />
    <Tab.Screen name="Upload" component={UploadScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
    <Tab.Screen name="Settings" component={SettingsScreen} />
    {user?.email === 'foxsd520@gmail.com' && <Tab.Screen name="Admin" component={AdminScreen} />}
  </Tab.Navigator>;
};

export const RootNavigator = () => {
  const {user} = useAuth();
  return <Stack.Navigator screenOptions={{headerShown:false}}>{user ? <Stack.Screen name="Main" component={MainTabs}/> : <Stack.Screen name="Login" component={LoginScreen} />}</Stack.Navigator>;
};
