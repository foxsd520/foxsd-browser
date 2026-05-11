import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
i18n.use(initReactI18next).init({lng:'ar', fallbackLng:'en', resources:{ar:{translation:{}}, en:{translation:{}}}});
export default i18n;
