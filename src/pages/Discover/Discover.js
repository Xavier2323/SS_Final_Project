import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from './main'
import MapPost_tennis from './mappost'
import PostDetail from './Postdetail'
import Success from'./success'
import NotificationScreen from '../Notification/Notification';
import PersonalScreen from '../Personal/Personal';

import MapPost_baseball from './mappost_baseball';
import MapPost_basketball from './mappost_basketball';
import MapPost_soccer from './mappost_soccer';
import MapPost_swim from './mappost_swim';
import MapPost_volleyball from './mappost_volleyball';
import MapPost_tabletennis from './mappost_tabletennis';
import MapPost_badminton from './mappost_badminton';
import MapPost_B_V from './mappost_B_V';
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
            
        }
    }

    render(){
        return (
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='main'>
                <Stack.Screen name='main'>
                    {(props) => <MainScreen {...props} statee = {this.state} setPostState={this.setPostState.bind(this)}/>}
                </Stack.Screen>
                <Stack.Screen name='mappost_tennis'>
                    {(props) => <MapPost_tennis {...props} statee = {this.state}/>}
                </Stack.Screen>
                <Stack.Screen name='postdetail'>
                    {(props) => <PostDetail {...props} statee = {this.state}/>}
                </Stack.Screen>
                <Stack.Screen name='success'>
                    {(props) => <Success {...props} statee = {this.state}/>}
                </Stack.Screen>
                <Stack.Screen name="Notification" component={NotificationScreen} />
                <Stack.Screen name="Personal">
                    {(props) => <PersonalScreen {...props} statee = {this.state}/>}
                </Stack.Screen>
                
                <Stack.Screen name="mappost_badminton">
                    {(props) => <MapPost_badminton {...props} statee = {this.state}/>}
                </Stack.Screen>
                <Stack.Screen name="mappost_tabletennis">
                    {(props) => <MapPost_tabletennis {...props} statee = {this.state}/>}
                </Stack.Screen>
                <Stack.Screen name="mappost_baseball">
                    {(props) => <MapPost_baseball {...props} statee = {this.state}/>}
                </Stack.Screen>
                <Stack.Screen name="mappost_basketball">
                    {(props) => <MapPost_basketball {...props} statee = {this.state}/>}
                </Stack.Screen>
                <Stack.Screen name="mappost_volleyball">
                    {(props) => <MapPost_volleyball {...props} statee = {this.state}/>}
                </Stack.Screen>
                <Stack.Screen name="mappost_soccer">
                    {(props) => <MapPost_soccer {...props} statee = {this.state}/>}
                </Stack.Screen>
                <Stack.Screen name="mappost_swim">
                    {(props) => <MapPost_swim {...props} statee = {this.state}/>}
                </Stack.Screen>
                <Stack.Screen name="mappost_B_V">
                    {(props) => <MapPost_B_V {...props} statee = {this.state}/>}
                </Stack.Screen>
                
            </Stack.Navigator>
        )
    }

   

    setPostState = async (props) => {
        this.setState({
            sport:props.sport,
            place:props.place,
            starttime:props.starttime,
            endtime:props.endtime,
            people:props.prople,
            participant:props.participant,
            tag:props.tag,
            memo:props.memo
        })
    }
}