import React, { useState, useContext } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import FormInputMulti from '../components/FormInputMulti';
import { AuthContext } from '../navigation/AuthProvider';
import {db} from '../config';
import { userInfo } from 'os';

export default function AddMenuScreen({navigation}) {
  const { user} = useContext(AuthContext);

  const [image, setImage] = useState(null)
  const [name, setName] = useState('')
  const [desc, setDesc] = useState('')
  const [price, setPrice] = useState('0')

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

  /*const takeImage = async () => {
    try {
        let result = await ImagePicker.launchCameraAsync();
        if (!result.cancelled) {
            setImage(result.uri)
        }
        console.log(result);
    } catch (e) {
        console.log(e);
    }
  };*/
    
  const uploadImage = async(uri) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    var ref = firebase.storage().ref().child("my-image");
    return ref.put(blob);
  };

  const saveMenu = async() => {
      console.log(user.uid)
      db.ref(`/menus-${user.uid}`).push({
            name: {name},
            price: {price},
            desc: {desc},
            image: {image}
      });
      alert("save menu")
  }


  return (
    <View style={styles.container}>
          <FormInput
          category="form"  
          labelName='Name'
          value={name}
          autoCapitalize='none'
          onChangeText={name => setName(name)}
        />
          <FormInput
          category="form"  
          labelName='Price'
          value={price}
          autoCapitalize='none'
          onChangeText={price => setPrice(price)}
        />
  <FormInputMulti
          labelName='Description'
          value={desc}
          autoCapitalize='none'
          onChangeText={desc => setDesc(desc)}
        />


    {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    <IconButton
    icon='camera'
    size={30}
    style={styles.navButton}
    color='#6646ee'
    onPress={pickImage}
      />

    <FormButton
      modeValue='contained'
      title='Submit'
      onPress={() => saveMenu()}
     />

  </View>
  );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      }
});