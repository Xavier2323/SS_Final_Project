import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

const CustomButton = ({onPress, text, type = 'PRIMARY', bgColor, fgColor}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? {backgroundColor: bgColor} : {},
      ]}>
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          fgColor ? {color: fgColor} : {},
        ]}>
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '38%',
    padding: 8,
    marginVertical: 14,
    alignItems: 'center',
    borderRadius: 30,
  },

  container_PRIMARY: {
    backgroundColor: '#3B71F3',
  },

  container_SECONDARY: {
    borderColor: '#3B71F3',
    borderWidth: 2,
  },

  container_TERTIARY: {},

  text: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18,
    //textAlign:'center',
  },

  text_SECONDARY: {
    color: '#3B71F3',
  },

  text_TERTIARY: {
    fontSize: 15,
    marginTop: 0,
    color: 'gray',
  },
  ///////////////////
  container_THEME: {
    backgroundColor: '#FBF1D6',
  },
  text_THEME: {
    color: '#EB7943',
  },

  container_SIGNIN: {
    backgroundColor: '#FBF1D6',
    width: '100%',
    marginTop: '51.5%',
    paddingVertical: '5%',
    borderWidth: 1,
    borderColor: '#f7eed2',
    marginBottom: 0,
  },
  text_SIGNIN: {
    color: '#EB7943',
  },
  container_SIGNUP: {
    backgroundColor: '#FBF1D6',
    width: '100%',
    marginTop: '10%',
    marginBottom: 0,
    paddingVertical: '5%',
    borderWidth: 1,
    borderColor: '#f7eed2',
  },
  text_SIGNUP: {
    color: '#EB7943',
  },
  container_SETTING: {
    backgroundColor: '#FBF1D6',
    width: '70%',
    marginTop: '1%',
    marginBottom: 0,
    paddingVertical: '4%',
    borderWidth: 1,
    borderColor: '#f7eed2',
  },
  text_SETTING: {
    color: '#EB7943',
  },
  container_LOGOUT_CANCEL: {
    borderRadius: 10,
    padding: '2%',
    width: '30%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black'
  },
  text_LOGOUT_CANCEL: {
    color: 'black',
  },
  container_LOGOUT_TRUE: {
    borderRadius: 10,
    padding: '2%',
    width: '30%',
    borderWidth: 1,
    backgroundColor: '#eb7943',
  },
  text_LOGOUT_TRUE: {
    color: 'white',
  },
});

export default CustomButton;
