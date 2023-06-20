import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, TouchableOpacity, Text, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function SetProfileImage(props) {

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      props.SetImg(result.assets[0].uri);
    }
  };

  const pfp=()=>{
    if(props.image==null) return  require('../../pages/Personal/personal/images/default_pfp.png');
    else return { uri: props.image };
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image source={pfp()} style={{ width: 200, height: 200, marginBottom: 5, borderRadius: 100 }} />
      <TouchableOpacity onPress={pickImage}>
        <View style={{alignSelf: 'center', paddingBottom: 10, paddingTop: 5,paddingRight: 10, paddingLeft: 10, backgroundColor: '#8684EF', borderRadius: 20, marginBottom: 10}}>
          <Text style={styles.label_text}>選擇</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
      label_text: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        padding: 5
      },
});