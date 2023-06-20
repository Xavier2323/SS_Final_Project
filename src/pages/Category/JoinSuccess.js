import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function JoinSuccess() {
  const screenWidth = Dimensions.get('window').width;
  const imageWidth = screenWidth / 2; // Adjust the margin/padding as needed
  const imageHeight = imageWidth * 1.2;
  const navigation = useNavigation();
  const handleImagePress = (destination,data) => {
    navigation.navigate(destination,{data});
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={[styles.scrollViewContainer, { marginTop: screenWidth * 0.4 }]}>
        <Image style={[styles.image, { width: imageWidth, height: imageHeight }]} source={require('../../images/category_images/join_success.png')} />
        <TouchableOpacity onPress={() => handleImagePress('Home')}>
        <Image style={[styles.image, { width: screenWidth*0.84, height: screenWidth*0.12, marginTop: screenWidth*0.5 }]} source={require('../../images/category_images/go_back.png')}/>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  image: {},
});
