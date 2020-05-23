import React, { useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Title } from 'react-native-paper';
import { IconButton } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import FormInputMulti from '../components/FormInputMulti';


export default function AddMenuScreen({navigation}) {

  const [image, setImage] = useState(null)
  const [name, setName] = useState('')
  const [desc, setDesc] = useState('')
  const [price, setPrice] = useState(0)

  const pickImage = async () => {
    try {
        let result = await ImagePicker.launchImageLibraryAsync();
        if (!result.cancelled) {
            setImage(result.uri)
        }
        console.log(result);
    } catch (e) {
        console.log(e);
    }
  };

  const takeImage = async () => {
    try {
        let result = await ImagePicker.launchCameraAsync();
        if (!result.cancelled) {
            setImage(result.uri)
        }
        console.log(result);
    } catch (e) {
        console.log(e);
    }
  };
    
  const uploadImage = async(uri) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    var ref = firebase.storage().ref().child("my-image");
    return ref.put(blob);
  };

  const saveMenu = async() => {
      alert("save menu")
  }

  return (
    <View style={styles.container}>
        <FormInput
          labelName='Name'
          value={name}
          autoCapitalize='none'
          onChangeText={name => setName(name)}
        />
    <IconButton
    icon='camera'
    size={30}
    style={styles.navButton}
    color='#6646ee'
    onPress={() => takeImage()}
      />
    <IconButton
    icon='attachment'
    size={30}
    style={styles.navButton}
    color='#6646ee'
    onPress={() => pickImage()}
      />      
    {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    <FormInputMulti
          labelName='Description'
          value={desc}
          autoCapitalize='none'
          onChangeText={desc => setDesc(desc)}
        />

    <FormButton
      modeValue='contained'
      title='Save'
      onPress={() => saveMenu()}
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