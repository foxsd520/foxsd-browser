import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import {AuthProvider} from './src/context/AuthContext';
import {SettingsProvider, useSettings} from './src/context/SettingsContext';
import {RootNavigator} from './src/navigation/RootNavigator';
import './src/utils/i18n';

const AppInner = () => {
  const {theme} = useSettings();
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <AuthProvider>
          <RootNavigator />
        </AuthProvider>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default function App() {
  return (
    <SettingsProvider>
      <AppInner />
    </SettingsProvider>
  );
}
