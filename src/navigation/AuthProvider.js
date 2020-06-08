import React, { createContext, useState } from 'react';
//import auth from '@react-native-firebase/auth';
import firebase from 'firebase';


export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
  
    return (
      <AuthContext.Provider
        value={{
          user,
          setUser,
          login: async (email, password) => {
            try {
              let userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
              console.log(userCredential.user);
            } catch (e) {
              console.log(e);
            }
          },
          register: async (email, password, username) => {
            try {
              let userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
              await userCredential.user.updateProfile({displayName: username});
              await userCredential.user.setCustomUserClaims(userCredential.user.uid, {role: "owner"});
            } catch (e) {
              console.log(e);
            }
          },
          logout: async () => {
            try {
              await firebase.auth().signOut();
            } catch (e) {
              console.error(e);
            }
          }
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  };