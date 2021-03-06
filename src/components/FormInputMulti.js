import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { TextInput } from 'react-native-paper';

const { width, height } = Dimensions.get('screen');

export default function FormInputMulti({ labelName, ...rest }) {
    return (
      <TextInput
        label={labelName}
        style={styles.input}
        multiline={true}
        numberOfLines={5}
        {...rest}
      />
    );
  }

  const styles = StyleSheet.create({
    input: {
      marginTop: 10,
      marginBottom: 10,
      width: width / 1.25,
      height: height / 10
    }
  });