import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, FlatList, Button, TouchableOpacity, SafeAreaView } from 'react-native';

import MainTab from './MainTab';
import ActivityImage from './ActivityImage';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class PersonalPage extends React.Component {

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
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Image source={require('./images/tab/back.png')}/>
            </TouchableOpacity>
            <View style={{flexDirection: 'row', flex: 1}}>
              <Image style={{borderRadius: 100, height: 60, width: 60}} source={this.pfp()}/>
              <Text style={{marginLeft: 10, alignSelf: 'center', fontWeight: '500', color: 'black'}}>{this.props.name}</Text>
            </View>
            <TouchableOpacity onPress={this.gotoedit.bind(this)}>
              <Image style={{marginRight: 5}} source={require('./images/tab/edit.png')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.logout.bind(this)}>
              <Image style={{marginRight: 5}} source={require('./images/tab/logout.png')}/>
            </TouchableOpacity>
            <View style={{}}></View>
          </View>  
          
          <TouchableOpacity onPress={() => this.props.navigation.navigate('myjojo')}>
            <View>
              <View style={styles.my_jojo}>
                <Text style={{color: 'white',fontSize: 25, fontWeight: '500'}}>我發起的揪揪</Text>
              </View>
            </View>
          </TouchableOpacity>

          <MainTab title='活動照片' color='#EB7943'/>
          <View style={styles.activity_pictures}>
            <Image style={styles.image} source={this.atp(1)}/>
            <Image style={styles.image} source={this.atp(2)}/>  
            <Image style={styles.image} source={this.atp(3)}/>          
          </View>
          <View style={styles.activity_pictures}>
            <Image style={styles.image} source={this.atp(4)}/>  
            <Image style={styles.image} source={this.atp(5)}/>  
            <Image style={styles.image} source={this.atp(6)}/>          
          </View>
          
  
          <MainTab title='年級校系' color='#EB7943'/>
          <View>
            <View style={styles.content_box}>
              <Text style={styles.content_text}>{this.props.school}</Text>
            </View>
          </View>
  
          <MainTab title='自我介紹' color='#EB7943'/>
          <View>
            <View style={styles.intro_box}>
              <Text style={styles.content_text}>
                {this.props.intro}
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }

  pfp(){
    if(this.props.img==null) return  require('./images/default_pfp.png');
    else return { uri: this.props.img };
  }

  atp(num){
    imgname='aimg'+String(num);
    if(this.props[imgname]) return {uri: this.props[imgname]};
    else return require('./images/default-image.jpg');
  }
  gotoedit(){
    // console.log(this.props.image);
    this.props.navigation.navigate('editpersonal');
  }
  logout(){
    AsyncStorage.clear();
    this.props.navigation.navigate('Initial');
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
      alignItems: 'center'
    },
    my_jojo: {
      alignItems: 'center',
      padding: 10,
      backgroundColor: '#EB7943',
      borderRadius: 10,
      marginBottom: 10,
    },
    activity_pictures: {
      flexDirection: 'row',
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