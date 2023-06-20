import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, FlatList, Button, TouchableOpacity, SafeAreaView } from 'react-native';
import axios from 'axios';

import ColorBar from './ColorBar';
import Post from './Post';

export default class MyJoJo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userid: this.props.id,
      curJioList: [],
      pastJioList: []
    }
    const url = `http://sample.eba-2nparckw.us-west-2.elasticbeanstalk.com`;
    
    axios.get(`${url}/posts`,{
      params:{
        posterid: this.props.id,
        finish: 0,
        order:'starttimeasc'
      }
    }).then(res => {
      this.setState({
        ...this.state,
        curJioList: res.data.post
      })
    })
    .catch(err => {
      console.log(err);
    })

    axios.get(`${url}/posts`,{
      params:{
        posterid: this.props.id,
        finish: 1,
        order:'createtimeasc'
      }
    }).then(res => {
      this.setState({
        ...this.state,
        pastJioList: res.data.post
      })
    })
  }

  render() {
    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                    <Image source={require('./images/tab/back.png')}/>
                </TouchableOpacity>
                <Text style={styles.title}>我發起的揪揪</Text>
            </View>
            <ColorBar text='尚未完成' color='#BDC438'/>
            <FlatList style={{flex: 1}}
                data={this.state.curJioList}
                renderItem={({ item }) => { return <Post {...item} userid={this.state.userid}/>; }}
            />
            
            <ColorBar text='已完成' color='#BDC438'/>
              <FlatList style={{flex: 1}}
                data={this.state.pastJioList}
                renderItem={({ item }) => { return <Post {...item} userid={this.state.userid}/>; }}
              />
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20
    },
    title: {
      color: 'black',
      fontSize: 25,
      fontWeight: 500
    }
});