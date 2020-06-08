import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { TextInput } from 'react-native-paper';

const { width, height } = Dimensions.get('screen');

const map = {
    'login': {widthRatio: 1.5, heightRatio: 15},
    'form': {widthRatio: 1.25, heightRatio: 20},
 };

 
export default function FormInput({ labelName, category, ...rest }) {

    const {widthRatio, heightRatio } = map[category]

    const styles = StyleSheet.create({
        input: {
          marginTop: 10,
          marginBottom: 10,
          width: width / widthRatio,
          height: height / heightRatio
        }
      });

    return (
      <TextInput
        label={labelName}
        style={styles.input}
        numberOfLines={1}
        {...rest}
      />
    );
  }



