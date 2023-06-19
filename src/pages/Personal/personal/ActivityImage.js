import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, TouchableOpacity, Text, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function ActivityImage(props) {

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      props.SetImg(result.assets[0].uri);
    }
  };

  const atp=()=>{
    if(props.image==null) return  require('./images/default-image.jpg');
    else return { uri: props.image };
  }

  return (
    <TouchableOpacity onPress={pickImage}>
      <Image source={atp()} style={styles.image}/> 
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    image: {
        width: 108,
        height: 192,
        borderRadius: 9
    }
});