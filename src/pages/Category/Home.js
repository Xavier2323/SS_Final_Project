import React, { useEffect } from 'react';
import Constants from 'expo-constants';
import { View, Text, StyleSheet, ScrollView, Image, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Home() {
  const screenWidth = Dimensions.get('window').width;
  const imageWidth = (screenWidth - 28) / 2; // Adjust the margin/padding as needed
  const imageHeight = imageWidth;
  const navigation = useNavigation();
  const handleImagePress = (destination,data) => {
    navigation.navigate(destination,{data});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>分類</Text>
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={() => handleImagePress('SportPage', '羽球')}>
          <Image style={[styles.image, { width: imageWidth, height: imageHeight }]} source={require('../../images/category_images/badminton.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleImagePress('SportPage', '棒球')}>
          <Image style={[styles.image, { width: imageWidth, height: imageHeight }]} source={require('../../images/category_images/baseball.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={() => handleImagePress('SportPage', '籃球')}>
          <Image style={[styles.image, { width: imageWidth, height: imageHeight }]} source={require('../../images/category_images/basketball.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleImagePress('SportPage', '足球')}>
          <Image style={[styles.image, { width: imageWidth, height: imageHeight }]} source={require('../../images/category_images/soccer.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={() => handleImagePress('SportPage', '網球')}>
          <Image style={[styles.image, { width: imageWidth, height: imageHeight }]} source={require('../../images/category_images/tennis.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleImagePress('SportPage', '排球')}>
          <Image style={[styles.image, { width: imageWidth, height: imageHeight }]} source={require('../../images/category_images/volleyball.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#FFFFFF',
    padding: 8,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 12,
  },
  image: {
    // resizeMode: 'contain',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
});