import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, Button,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {get_img} from '../utility/utility_img';

const PostDetail = ({ route}) => {
  const { dat } = route.params;
  const data = dat;
  const navigation = useNavigation();
  const handleImagePress = (destination,data) => {
    navigation.navigate(destination,{data});
  };
  const taglist = data.tags == null ? <View></View> : data.tags.map((item,index) => {if (index>=2 || item == "") return <View></View>; else return(
    <View style={styles.tag}>
        <Text style={styles.tagText}>{item}</Text>
    </View>)});
  const pfp = () => {
    // console.log(data);
    uri=get_img(data.posteravatar);
    return { uri: uri };
  }
  let flag = 0;
  for(let i=0;i<data.participant.length;i++)
    {
      if(data.userid==data.participant[i]) flag=1;
    }
  useEffect(() => {
    navigation.setOptions({
      title: '詳情',
      headerTitleStyle: {
        fontSize: 20, // Set your desired font size
        fontWeight: 'bold', // Set your desired font weight
      },
    });
  }, );
  return (
    <View style={[styles.container,{marginHorizontal:20}]}>
      <Image
            style={styles.avatar}
            source={pfp()}
            //source={require(data.avatar)}
          />
      <Text>{data.posterName}</Text>
      <Text style={{ fontSize:20,marginVertical:15}}>運動種類: {data.sport}</Text>
      <Text style={{ fontSize:20,marginVertical:15}}>日期: {data.start_time}</Text>
      <Text style={{ fontSize:20,marginVertical:15}}>時間: {data.start_time}</Text>
      <Text style={{ fontSize:20,marginVertical:15}}>地點: {data.place}</Text>
      <Text style={{ fontSize:20,marginVertical:15}}>備註:</Text>
      <View style={styles.tagContainer}>
        <View style={styles.box}>
          <Text>{data.memo}</Text>
        </View>
      </View>
      <Text style={{ fontSize:20,marginVertical:15}}>已報名:{data.participant.length}/{data.people}</Text>
      <View style={styles.tagContainer}>
        <View style={styles.tag_main}>
          <Text style={{ fontSize:20}}>tag:</Text>
        </View>
        {taglist}
      </View>
      
      <TouchableOpacity style={{alignSelf:'center',marginTop:25,borderRadius:30, width:200,height:45,backgroundColor: '#EB7943',justifyContent:'center',alignItems:'center'}}
                        onPress={() => handleImagePress('JoinSuccess',data)}>
        <Text style={{fontSize:20,color:'white'}}>{flag==1?"已報名":"報名"}</Text> 
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 25,
  },
  tagContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginVertical: 10,
  },
  box: {
    backgroundColor: '#FBF1D6',
    borderRadius: 5,
    padding: 30,
    flex:1,
  },
  avatarRow: {
    flexDirection: 'row',
  },
  buttonContainer: {
    backgroundColor: '#EB7943',
    borderRadius: 25,
    marginVertical: 20,
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
});

export default PostDetail;
