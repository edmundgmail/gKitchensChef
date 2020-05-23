import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import MenuScreen from '../screens/MenuScreen';
import SettingsScreen from '../screens/SettingsScreen';
import SettingsIcon from '../components/SettingsIcon';

import { StyleSheet } from 'react-native';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
    screenOptions={{
        headerRight: () => <SettingsIcon/>,
      }}
    >
      <Stack.Screen name='Home' component={HomeScreen}/>
      <Stack.Screen name='Menu' component={MenuScreen} />
      <Stack.Screen name='Settings' component={SettingsScreen} />
    </Stack.Navigator>
  );
}
