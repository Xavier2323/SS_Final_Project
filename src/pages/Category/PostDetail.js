import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PostDetail = ({ route }) => {
  const { data } = route.params;
  const navigation = useNavigation();
  const handleImagePress = (destination,data) => {
    navigation.navigate(destination,{data});
  };
  useEffect(() => {
    navigation.setOptions({
      title: '詳情',
      headerTitleStyle: {
        fontSize: 20, // Set your desired font size
        fontWeight: 'bold', // Set your desired font weight
      },
    });
  }, );
  console.log(data);
  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={require('../../images/category_images/me2.png')} />
      <Text>{data.posterName}</Text>
      <Text>運動種類: {data.sport}</Text>
      <Text>日期: {data.start_time}</Text>
      <Text>時間: {data.start_time}</Text>
      <Text>地點: {data.place}</Text>
      <Text>需求:</Text>
      <View style={styles.tagContainer}>
        <View style={styles.box}>
          <Text>{data.memo}</Text>
        </View>
      </View>
      <Text>已報名:</Text>
      <View style={styles.avatarRow}>
      
        <Image style={styles.avatar} source={require('../../images/category_images/me2.png')} />
        <Image style={styles.avatar} source={require('../../images/category_images/me2.png')} />
        <Image style={styles.avatar} source={require('../../images/category_images/me2.png')} />
        <Image style={styles.avatar} source={require('../../images/category_images/me2.png')} />
        <Image style={styles.avatar} source={require('../../images/category_images/me2.png')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="報名" onPress={() => handleImagePress('JoinSuccess',data)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  tagContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  box: {
    backgroundColor: '#FBF1D6',
    borderRadius: 5,
    padding: 10,
  },
  avatarRow: {
    flexDirection: 'row',
  },
  buttonContainer: {
    backgroundColor: '#EB7943',
    borderRadius: 25,
    marginVertical: 20,
  },
});

export default PostDetail;
