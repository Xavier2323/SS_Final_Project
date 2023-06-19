import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, FlatList, Button, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import axios from 'axios';

import {get_img, upload_img} from '../utility/utility_img';

import PersonalPage from './personal/PersonalPage';
import EditPersonalPage from './personal/EditPersonalPage';
import MyJoJo from './personal/MyJoJo';

import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export default class PersonalScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            id: 15,
            img: null,
            name: 'William',
            school: '清大電資班大二',
            intro: '大家好，大家好，大家好，大家好，大家好，大家好，大家好，大家好，大家好，大家好，大家好，大家好，大家好，大家好，大家好，大家好。',
            aimg1: null,
            aimg2: null,
            aimg3: null,
            aimg4: null,
            aimg5: null,
            aimg6: null,
        }

        this.loaddata();
    }
    
    render() {
        return (
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='personal'>
                <Stack.Screen name="personal">
                    {(props) => <PersonalPage {...props} {...this.state} />}
                </Stack.Screen>
                <Stack.Screen name="editpersonal">
                    {(props) => <EditPersonalPage {...props} {...this.state} OnStore={this.OnStore.bind(this)}/>}
                </Stack.Screen>
                <Stack.Screen name="myjojo">
                    {(props) => <MyJoJo {...props} {...this.state}/>}
                </Stack.Screen>
            </Stack.Navigator>
        )
    }

    loaddata = async () => {
        const url = `http://sample.eba-2nparckw.us-west-2.elasticbeanstalk.com`;
        console.log('get_profile');

        var pfparr=[];
        var img1arr=[];
        var img2arr=[];
        var img3arr=[];
        var img4arr=[];
        var img5arr=[];
        var img6arr=[];
        await axios.get(`${url}/users`,{
          params:{
            userid: this.state.id
          }
        }).then(res => {
          pfparr=res.data.profile.avatar;
          img1arr=res.data.profile.photo1;
        //   console.log(img1arr=res.data.profile.photo2);
          img2arr=res.data.profile.photo2;
          img3arr=res.data.profile.photo3;
          img4arr=res.data.profile.photo4;
          img5arr=res.data.profile.photo5;
          img6arr=res.data.profile.photo6;
          this.setState({
            ...this.state,
            name: res.data.profile.name,
            school: res.data.profile.schoolgrade,
            intro: res.data.profile.intro,
          })
        })
        .catch(err => {
          console.log(err);
        })

        pfp_uri=pfparr!=0?get_img(pfparr):null;
        img1_uri=img1arr!=0?get_img(img1arr):null;
        img2_uri=img2arr!=0?get_img(img2arr):null;
        img3_uri=img3arr!=0?get_img(img3arr):null;
        img4_uri=img4arr!=0?get_img(img4arr):null;
        img5_uri=img5arr!=0?get_img(img5arr):null;
        img6_uri=img6arr!=0?get_img(img6arr):null;
        
        this.setState({
          ...this.state,
          img: pfp_uri,
          aimg1: img1_uri,
          aimg2: img2_uri,
          aimg3: img3_uri,
          aimg4: img4_uri,
          aimg5: img5_uri,
          aimg6: img6_uri,
        })
    }

    OnStore=(name,image,school,intro,aimg1,aimg2,aimg3,aimg4,aimg5,aimg6)=>{
        this.setState({
            ...this.state,
            name: name,
            school: school,
            intro: intro,
            img: image,
            aimg1: aimg1,
            aimg2: aimg2,
            aimg3: aimg3,
            aimg4: aimg4,
            aimg5: aimg5,
            aimg6: aimg6,
        }, ()=>{
            this.props.navigation.navigate('personal'); 
            const url = `http://sample.eba-2nparckw.us-west-2.elasticbeanstalk.com/image/update?userid=${this.state.id}&name=${this.state.name}&schoolgrade=${this.state.school}&intro=${this.state.intro}`;
    
            axios.post(url).then(res => {
                // console.log(res.data);
            })
            .catch(err => {
              console.log(err);
            });

            upload_img(this.state.id, 0, this.state.img);
            upload_img(this.state.id, 1, this.state.aimg1);
            upload_img(this.state.id, 2, this.state.aimg2);
            upload_img(this.state.id, 3, this.state.aimg3);
            upload_img(this.state.id, 4, this.state.aimg4);
            upload_img(this.state.id, 5, this.state.aimg5);
            upload_img(this.state.id, 6, this.state.aimg6);
        });
    }
}