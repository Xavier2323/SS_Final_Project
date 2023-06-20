import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Post from './Post';
import axios from 'axios';


const SportPage = ({ route,userid}) => {
  const navigation = useNavigation();
  const { data } = route.params;
  const url = `http://JioJioServer.eba-8jp4gbmb.us-west-2.elasticbeanstalk.com`;
    const [SportPost, setPost] = useState([]);
    axios.get(`${url}/posts`,{
        params:{
          sport: data,
        }
    }).then(res => {
        setPost(res.data.post)
    }).catch(err => {
        console.log(err);
    })
    //console.log(SportPost);

  useEffect(() => {
    navigation.setOptions({
      title: data,
      headerTitleStyle: {
        fontFamily: 'Arial',
        fontSize: 20,
        fontWeight: 'bold',
      },
    });
  }, [data, navigation]);
  
  //console.log(SportPost);
  if(SportPost) {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          {SportPost.map((data, index) => (
            <Post key={index} data={data} userid={userid}/>
          ))}
        </ScrollView>
      </View>
    );
  }
  // return (
  //   <View style={styles.container}>
  //     <ScrollView style={styles.scrollView}>
  //       {SportPost.map((data, index) => (
  //         <Post key={index} data={data} />
  //       ))}
  //     </ScrollView>
  //   </View>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
    width: '100%',
  },
});

export default SportPage;
