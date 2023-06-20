import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {get_img} from '../utility/utility_img';

const getPic = sport => {
  if (sport == "羽球") return require('../../images/badminton.png');
  else if (sport == "籃球") return require("../../images/basketball.png");
  else if (sport == "排球") return require("../../images/volleyball.png");
  else if (sport == "足球") return require("../../images/soccer.png");
  else if (sport == "棒球") return require("../../images/baseball.png");
  else if (sport == "桌球") return require("../../images/pingpong.png");
  else if (sport == "網球") return require("../../images/tennis.png");
  else if (sport == "游泳") return require("../../images/swim.png");
  else return "";
}

const Post = ({data,userid} ) => {
  const navigation = useNavigation();
  let flag = 0;
  for(let i=0;i<data.participant.length;i++)
    {
      if(userid==data.participant[i]) flag=1;
    }
  const handleImagePress = (destination,data,flag) => {
    const dat = {...data,userid:userid}
    navigation.navigate(destination,{dat});
  };
  const handleJoinPress = () => {
    setIsJoined(true);
  };
  const taglist = data.tags == null ? <View></View> : data.tags.map((item,index) => {if (index>=2 || item == "") return <View></View>; else return(
    <View style={styles.tag}>
        <Text style={styles.tagText}>{item}</Text>
    </View>)});
  //console.log(data.avatar);
  const pfp = () => {
    // console.log(data);
    uri=get_img(data.posteravatar);
    return { uri: uri };
  }
  
  
  return(
  <View style={styles.outer}>
    <View style={{flexDirection:'column',alignItems:'flex-start'}}>
      <View style={styles.post}>
        <View style={[styles.avatar,{flex:2}]}>
          <Image
            style={styles.avatar}
            source={pfp()}
            //source={require(data.avatar)}
          />
        </View>
          
        <View style={[styles.info,{flex:4}]}>
          <Text>{data.sport}</Text>
          <Text>{data.place}</Text>
          <Text>{data.start_time}</Text>
          <Text>{data.participant.length}/{data.people}</Text>
        </View>

        <View style={{flex:2,alignItems:'center'}}>
          <TouchableOpacity style={styles.button1} onPress={() => handleImagePress('PostDetail',data)}>
            <Text>詳情</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button2} onPress={() => handleImagePress('JoinSuccess',data,flag)}>
            <Text>{flag==1?"已報名":"報名"}</Text>
          </TouchableOpacity>
        </View>
        
      </View>
      <View style={styles.tagContainer}>
        <View style={styles.tag_main}>
          <Text style={styles.tagMain}>tag:</Text>
        </View>
        {taglist}
      </View>
    </View>
</View>
);}



const styles = StyleSheet.create({
  post: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    
  },
  outer: {
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#FBF1D6',
    borderRadius: 10,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 50,
    
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
    margin: 4,
    paddingHorizontal: 5,
    paddingVertical: 1,
    alignItems: 'flex-end'
  },
  button2: {
    backgroundColor: '#EB7943',
    borderRadius: 5,
    margin: 4,
    paddingHorizontal: 5,
    paddingVertical: 1,
    alignItems: 'flex-end'
  },
});

export default Post;