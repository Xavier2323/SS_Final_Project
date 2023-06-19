import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, FlatList, Button, TouchableOpacity, SafeAreaView } from 'react-native';

import MainTab from './MainTab';


export default class OtherPersonal extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <View style={styles.container}>
          <ScrollView
            onScroll={e => {
            const y = e.nativeEvent.contentOffset.y;
            }}
            style={{flex: 1}} // or set height directly
            >
            <View style={styles.mug}>
              {/* <BackButton></BackButton> */}
              <View style={{flexDirection: 'row', flex: 1}}>
                <Image source={require('../images/tab/back.png')}/>
                <Image source={require('../images/profile_picture.jpg')}/>
                <Text style={{marginLeft: 10, alignSelf: 'center', fontWeight: '500', color: 'black'}}>Xavier</Text>
              </View>
              <Image style={{marginRight: 5}} source={require('../images/tab/edit.png')}/>
              <Image style={{marginRight: 5}} source={require('../images/tab/logout.png')}/>
              <View style={{}}></View>
            </View>  

            <View>
              <View style={styles.label_box}>
                <Text style={styles.label_text}>活動照片</Text>
              </View>
            </View>
            <View style={styles.activity_pictures}>
              <Image style={styles.image} source={require('../images/run.jpg')}/>  
              <Image style={styles.image} source={require('../images/run.jpg')}/>  
              <Image style={styles.image} source={require('../images/run.jpg')}/>          
            </View>
            <View style={styles.activity_pictures}>
              <Image style={styles.image} source={require('../images/run.jpg')}/>  
              <Image style={styles.image} source={require('../images/run.jpg')}/>  
              <Image style={styles.image} source={require('../images/run.jpg')}/>          
            </View>
            

            <View>
              <View style={styles.label_box}>
                <Text style={styles.label_text}>校系年級</Text>
              </View>
            </View>
            <View>
              <View style={styles.content_box}>
                <Text style={styles.content_text}>清大電資班大二</Text>
              </View>
            </View>

            <View>
              <View style={styles.label_box}>
                <Text style={styles.label_text}>自我介紹</Text>
              </View>
            </View>
            <View>
              <View style={styles.intro_box}>
                <Text style={styles.content_text}>
                  我是剛打羽球的新手，希望大家打得輕鬆一點，內建兩個程度跟我差不多的人，歡迎大家來玩。
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
      },
      row: {
        flexDirection: 'row',
        flexWrap: 'wrap'
      },
      mug: {
        flexDirection: 'row',
        height: 100,
        backgroundColor: 'white',
        alignItems: 'center'
      },
      activity_pictures: {
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'space-between',
        marginBottom: 20
      },
      picture_box: {
        flex: 1,
        margin: 5,
        alignItems: 'center'
      },
      image: {
        width: 108,
        height: 192,
        borderRadius: 9
      },
      intro: {
        flex: 4,
        backgroundColor: 'red'
      },
      intro_box: {
        height: 250,
        padding: 5,
        backgroundColor: '#FBF1D6',
        borderRadius: 10,
        marginBottom: 10
      },
      label_box: {
        alignSelf: 'flex-start',
        alignItems: 'center',
        padding: 5,
        backgroundColor: '#EB7943',
        borderRadius: 10,
        marginBottom: 10
      },
      label_text: {
        fontSize: 12,
        color: 'white',
        fontWeight: 'bold'
      },
      content_box: {
        alignSelf: 'flex-start',
        padding: 5,
        backgroundColor: '#FBF1D6',
        borderRadius: 10,
        marginBottom: 10
      },
      content_text: {
        fontSize: 12,
        borderRadius: 5,
        color: 'black',
        fontWeight: 'bold'
      },
      text: {
        fontSize: 20,
        color: 'white'
      }
});