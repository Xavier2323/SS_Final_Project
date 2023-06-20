import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, FlatList, Button, TouchableOpacity, SafeAreaView, SectionList } from 'react-native';
import axios from 'axios';

import { PastJioItem, CurrentJioItem} from '../utility/utility_JioJio.js';

export default class Overview extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      curJioList: [],
      pastJioList: []
    }
    this.updateList();
  }

  render() {
    if (this.props.stat.update == 1) {
      this.updateList();
      this.props.setUpdate(0);
    }

    return (

      <View style={styles.container}>
        <View style={{ flex:40, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.title}>揪揪</Text>
        <View style={styles.underOrangeLine}></View>
        </View>

        <View style={{flex:150}}>
          <Text style={[styles.subtitle,{flex:5}]}>正在進行的揪揪</Text>
            <View style={{ flex:40 }}>
              <FlatList 
                data={this.state.curJioList}
                renderItem={({ item }) => { return <CurrentJioItem props={item} userid={this.props.stat.userid} f={this.handleEdit.bind(this)}/>; }}
              />
            </View>
        </View>

        <View style={{flex:150}}>
          <Text style={[styles.subtitle,{flex:5}]}>之前發起過的揪揪</Text>
            <View style={{ flex:40 }}>
              <FlatList 
                data={this.state.pastJioList}
                renderItem={({ item }) => { return <PastJioItem {...item} f={this.handleRelaunch.bind(this)} />; }}
              />
            </View>
        </View>

        <View style={{flex:50,justifyContent:'center',alignItems:'center'}}>
        <TouchableOpacity style={styles.launchNew} onPress={this.handleLaunchNewJio.bind(this)}>
          <Text style={styles.launchNewText}>發起新的揪揪</Text>
        </TouchableOpacity>
        </View>

        <View style={{flex:5}}></View>
      </View>

    );
  }

  updateList() {
    const url = `http://test.eba-rrzupcxn.us-west-2.elasticbeanstalk.com`;

    axios.get(`${url}/posts`,{
      params:{
        participant: this.props.stat.userid,
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
        posterid: this.props.stat.userid,
        finish: 1,
        order:'createtimeasc'
      }
    }).then(res => {
      this.setState({
        ...this.state,
        pastJioList: res.data.post
      })
    }).catch(err => {console.log(err)})
  }

  handleEdit = async (props) => {
    await this.props.setAll(props);
    await this.props.setEditing(1);
    this.props.navigation.navigate('postedit');
  }

  handleRelaunch = async (sport,place) => {
    await this.props.finishSelectSport(sport);
    await this.props.finishSelectPlace(place);
    this.props.navigation.navigate("page3");
  }

  handleLaunchNewJio() {
    this.props.navigation.navigate("page1");
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    flexDirection: 'column',
    marginHorizontal:30
  },
  title: {
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 22,
    fontWeight: 500,
    marginVertical: 0
  },
  subtitle2: {
    fontSize: 20
  },
  subtitle3: {
    fontSize: 15,
    color: 'grey'
  },
  underOrangeLine: {
    height: 6,
    width: 110,
    backgroundColor: '#FFC700',
    marginTop: 5
  },
  listStyle: {
    marginHorizontal: 30
  },
  sportIcon: {
    width: 50,
    height: 50
  },
  currentJioContainer: {
    flexDirection: 'row',
    marginVertical: 15
  },
  currentJioContainer2: {
    flexDirection: 'column',
    marginLeft: 30
  },
  launchNew: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EB7943',
    width:250,
    borderRadius: 50,
    elevation: 15,
  },
  launchNewText: {
    color: 'white',
    fontSize: 28,
    marginBottom: 10
  },
  ScrollView: {

  }
});