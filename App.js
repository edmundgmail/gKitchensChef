import React from 'react';
import Providers from './src/navigation';
import * as firebase from 'firebase';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
};

export default function App() {
  return (<PaperProvider theme = {theme}>
    <Providers />
  </PaperProvider>)
  
  ;
}
