import React from 'react';
import Providers from './src/navigation';
import * as firebase from 'firebase';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

const firebaseConfig = {
  apiKey: 'AIzaSyBQhMN3yMxFh8XE3vKD5ttzYzTbKLYcWjs',
  authDomain: 'gkitchens-17d9f.firebaseapp.com',
  databaseURL: 'https://gkitchens-17d9f.firebaseio.com',
  projectId: 'gkitchens-17d9f',
  storageBucket: 'gkitchens-17d9f.appspot.com',
  messagingSenderId: '577396476997',
};


const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
};

firebase.initializeApp(firebaseConfig);

export default function App() {
  return (<PaperProvider theme = {theme}>
    <Providers />
  </PaperProvider>)
  
  ;
}
