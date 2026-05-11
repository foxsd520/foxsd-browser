import React, {createContext, useContext, useMemo, useState} from 'react';
import {I18nManager} from 'react-native';
import {MD3DarkTheme, MD3LightTheme} from 'react-native-paper';
import i18n from '../utils/i18n';

const orange = '#ff7a00';
const SettingsContext = createContext<any>(null);
export const SettingsProvider = ({children}: {children: React.ReactNode}) => {
  const [dark, setDark] = useState(true);
  const [lang, setLang] = useState<'ar'|'en'>('ar');
  const theme = useMemo(() => ({...(dark ? MD3DarkTheme : MD3LightTheme), colors: {...(dark?MD3DarkTheme.colors:MD3LightTheme.colors), primary: orange}}), [dark]);
  const changeLanguage = async (l:'ar'|'en') => { setLang(l); await i18n.changeLanguage(l); I18nManager.forceRTL(l==='ar'); };
  return <SettingsContext.Provider value={{theme, dark, setDark, lang, changeLanguage}}>{children}</SettingsContext.Provider>;
};
export const useSettings = () => useContext(SettingsContext);
