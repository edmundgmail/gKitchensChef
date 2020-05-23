import React, { useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Title } from 'react-native-paper';
import { IconButton } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';

export default function AddMenuScreen({navigation}) {

  const [image, setImage] = useState(null)

  const pickImage = async () => {
    try {
        let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        });
        if (!result.cancelled) {
            setImage(result.uri)
        }
        console.log(result);
    } catch (e) {
        console.log(e);
    }
  };
        
  return (
    <View style={styles.container}>
    <Title>Add Menu Screen</Title>
    <IconButton
    icon='camera'
    size={50}
    style={styles.navButton}
    color='#6646ee'
    onPress={() => pickImage()}
      />
    {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
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