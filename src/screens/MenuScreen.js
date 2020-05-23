import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Title } from 'react-native-paper';
import { IconButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function MenuScreen({navigation}) {

  return (
    <View style={styles.container}>
    <Title>Menu Screen</Title>
    <IconButton
    icon='plus'
    size={50}
    style={styles.navButton}
    color='#6646ee'
    onPress={() => navigation.navigate('AddMenu')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  navButton: {
    marginTop: 10
  }
});