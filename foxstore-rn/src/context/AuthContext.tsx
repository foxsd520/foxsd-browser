import React, {createContext, useContext, useEffect, useState} from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {GoogleAuthProvider, onAuthStateChanged, signInWithCredential, signOut, User} from 'firebase/auth';
import {auth} from '../services/firebase';

GoogleSignin.configure({webClientId: 'YOUR_WEB_CLIENT_ID'});

const AuthContext = createContext<any>(null);
export const AuthProvider = ({children}: {children: React.ReactNode}) => {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => onAuthStateChanged(auth, setUser), []);
  const login = async () => {
    const res = await GoogleSignin.signIn();
    const credential = GoogleAuthProvider.credential(res.idToken);
    await signInWithCredential(auth, credential);
  };
  const logout = async () => { await signOut(auth); };
  return <AuthContext.Provider value={{user, login, logout}}>{children}</AuthContext.Provider>;
};
export const useAuth = () => useContext(AuthContext);
