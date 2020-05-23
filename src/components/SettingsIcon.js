import React from 'react';
import { StyleSheet, Dimensions, Text } from 'react-native';
import { IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


export default function SettingsIcon() {
  const navigation = useNavigation();

  return (
    <IconButton
    icon='settings'
    size={30}
    style={styles.navButton}
    color='#6646ee'
    onPress={() => navigation.navigate('Settings')}
      />
  );
}

const styles = StyleSheet.create({
    navButton: {
      marginTop: 10
    }
  });