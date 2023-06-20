import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from './main'
import MapPost from './mappost'
import PostDetail from './Postdetail'
import Success from'./success'
import NotificationScreen from '../Notification/Notification';
import PersonalScreen from '../Personal/Personal';
const Stack = createStackNavigator();

export default class DiscoverScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = this.initPostState();
    }

    initPostState = () =>{
        return {
            sport:"",
            place:"",
            starttime:"",
            endtime:"",
            people:"",
            participant:[],
            tag:[],
            memo:"",
            userid:this.props.userid,
            state: 0
        }
    }

    render(){
       
        return (
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='main'>
                <Stack.Screen name='main'>
                    {(props) => <MainScreen {...props} statee = {this.state} setPostState={this.setPostState.bind(this)}/>}
                </Stack.Screen>
                <Stack.Screen name='mappost'>
                    {(props) => <MapPost {...props} statee = {this.state}/>}
                </Stack.Screen>
                <Stack.Screen name='postdetail'>
                    {(props) => <PostDetail {...props} statee = {this.state}/>}
                </Stack.Screen>
                <Stack.Screen name='success'>
                    {(props) => <Success {...props} statee = {this.state}/>}
                </Stack.Screen>
                <Stack.Screen name="Notification">
                    {(props) => <NotificationScreen {...props} statee = {this.state} setPostState={this.setPostState.bind(this)}/>}
                </Stack.Screen>
                <Stack.Screen name="Personal">
                    {(props) => <PersonalScreen {...props} statee = {this.state}/>}
                </Stack.Screen>
            </Stack.Navigator>
        )
    }

    setPostState = async (props) => {
        this.setState({
            sport:props.sport,
            place:props.place,
            starttime:props.start_time,
            endtime:props.end_time,
            people:props.people,
            participant:props.participant,
            tag:props.tags,
            memo:props.memo,
            state: props.state
        })
    }
}