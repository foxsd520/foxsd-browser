import React from 'react';
import {View} from 'react-native';
import {Button, Switch, Text} from 'react-native-paper';
import {useSettings} from '../context/SettingsContext';
export const SettingsScreen = () => { const {dark,setDark,changeLanguage}=useSettings();
return <View style={{padding:16}}><Text>Theme</Text><Switch value={dark} onValueChange={setDark}/><Button onPress={()=>changeLanguage('ar')}>العربية</Button><Button onPress={()=>changeLanguage('en')}>English</Button></View>;};
