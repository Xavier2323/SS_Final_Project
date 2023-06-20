import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Post = ({ data }) => {
  const navigation = useNavigation();
  const handleImagePress = (destination,data) => {
    navigation.navigate(destination,{data});
  };
  const handleJoinPress = () => {
    setIsJoined(true);
  };
  const taglist = data.tags == null ? <View></View> : data.tags.map((item,index) => {if (index>=2 || item == "") return <View></View>; else return(
    <View style={styles.tag}>
        <Text style={styles.tagText}>{item}</Text>
    </View>)});
  //console.log(data.avatar);
  return(
  <View style={styles.post}>
    <View style={styles.avatarContainer}>
      <Image
        style={styles.avatar}
        source={require('../../images/category_images/me2.png')}
        //source={require(data.avatar)}
      />

      <View style={styles.tagContainer}>
        <View style={styles.tag_main}>
          <Text style={styles.tagMain}>tag:</Text>
        </View>
        {taglist}
      </View>
    </View>
      
    <View style={styles.info}>
      <Text>{data.sport}</Text>
      <Text>{data.place}</Text>
      <Text>{data.start_time}</Text>
      <Text>/{data.people}</Text>
    </View>

    <View>
      <TouchableOpacity style={styles.button1} onPress={() => handleImagePress('PostDetail',data)}>
        <Text>詳情</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button2} onPress={() => handleImagePress('JoinSuccess',data)}>
        <Text>報名</Text>
      </TouchableOpacity>
    </View>
  </View>
);}

const styles = StyleSheet.create({
  post: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#FBF1D6',
    borderRadius: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    
  },
  info: {
    flex: 1,
    marginHorizontal: 10,
  },
  tagContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  tag: {
    backgroundColor: 'gray',
    borderRadius: 5,
    margin: 2,
    paddingHorizontal: 5,
    paddingVertical: 1,
  },
  tagText: {
    color: 'white',
  },
  button1: {
    backgroundColor: '#989898',
    borderRadius: 5,
    margin: 2,
    paddingHorizontal: 5,
    paddingVertical: 1,
    alignItems: 'flex-end'
  },
  button2: {
    backgroundColor: '#EB7943',
    borderRadius: 5,
    margin: 2,
    paddingHorizontal: 5,
    paddingVertical: 1,
    alignItems: 'flex-end'
  },
});

export default Post;