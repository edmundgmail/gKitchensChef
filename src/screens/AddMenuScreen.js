import React, { useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { IconButton } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import FormInputMulti from '../components/FormInputMulti';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

export default function AddMenuScreen({navigation}) {

  const [image, setImage] = useState(null)
  const [name, setName] = useState('')
  const [desc, setDesc] = useState('')
  const [price, setPrice] = useState(0)

  const LeftContent = () =>  <FormInput labelName='Menu Name' value={name} autoCapitalize='none'  onChangeText={name => setName(name)} />

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
          <FormInput
          labelName='Price'
          value={name}
          autoCapitalize='none'
          onChangeText={price => setPrice(price)}
        />
  <FormInputMulti
          labelName='Description'
          value={desc}
          autoCapitalize='none'
          onChangeText={desc => setDesc(desc)}
        />

    <Button onPress={pickImage}>
      <View>
        {image === null ? (
          <Text>Select a Photo</Text>
        ) : (
          <Image source={image} />
        )}
      </View>
    </Button>
  </View>
  );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      },
      avatarContainer: {
        borderColor: '#9B9B9B',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      avatar: {
        borderRadius: 75,
        width: 150,
        height: 150,
      },
});