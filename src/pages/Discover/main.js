import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, Image, FlatList, Button, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Map  from './map.js';
import Post from './post.js';
import axios from 'axios';



export default class MainScreen extends React.Component{
    constructor(props){
        super(props)
        this.state={
            postList:[]
        }
        this.updatePosts();
    }

    render(){
        const post = this.state.postList.map((item) => {return (<Post props={item} f={this.setPostState.bind(this)} navigate={() => {this.props.navigation.navigate('postdetail')}}/>)})
        return(
            <ScrollView >
            <View style={styles.root}>
                <StatusBar barStyle="light-content" />
                <View style={styles.ContainerTop}>
                    <TouchableOpacity style={styles.Notification} onPress={()=>{this.props.navigation.navigate('Notification')}}>
                        <Image source={require('../../images/bell.png')}/>
                    </TouchableOpacity>
                    <Text style={styles.banner}>運動揪揪</Text>
                    <TouchableOpacity style={styles.Notification} onPress={() => {this.props.navigation.navigate('Personal')}}>
                        <Image source={require('../../images/Person.png')}/>
                    </TouchableOpacity>
                </View>

                <ScrollView style={styles.scrollview}>

                    <Map navigate={() => {this.props.navigation.navigate('mappost')}}/>

                    <View style={styles.shortLine} /> 

                    <View style={styles.iconRow}>

                    <Text style={styles.iconText}>即時揪揪:</Text>
                    </View>
                
                    <Text style={styles.scrolltext}>周圍正在揪揪的夥伴</Text>
                    <View style={styles.line} />
                    
                    {post}
                    
                </ScrollView>
            </View>
        </ScrollView>
        )
    }

    updatePosts = async() => {
        const url = `http://sample.eba-2nparckw.us-west-2.elasticbeanstalk.com/posts`;

        await axios.get(url,{
            params:{
                finish:0,
                order:'starttimeasc'
            }
        }).then(res => {
            //console.log(res.data);
            this.setState({postList:res.data.post});
        }).catch(err => {console.log(err)});


    }

    setPostState = async (props) => {
        await this.props.setPostState({...props, state: 0});
        //console.log(this.props.statee);
    }

    dummyData = [
        {
          avatar: '../assets/me.jpg',
          sport: '羽球',
          place: '清大校友體育館',
          starttime: "2023-6-10 15:00",
          endtime: "2023-6-10 18:00",
          participant: [1,2,3],
          people: 5,
          tag: ["新手"],
          memo: "都可以來喔"
        }
          
      ];
}

const styles = StyleSheet.create({
    root: {
        alignItem: 'center',
        padding:20,
    },
    ContainerTop: {
        flexDirection: 'row',
        flex: 3,
        height: '5%',
        width: '95%',
        justifyContent: 'space-around',
        alignSelf: 'center',
        borderRadius: 10,
        borderWidth: 1,
    },
    banner: {
        fontSize: RFPercentage(3),
    },
    safeArea: {
        flex: 1,
        backgroundColor: 'white',
      },
      navbar: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey',
      },
      navbarText: {
        color: 'white',
        fontSize: 20,
      },
      scrollview: {
        flex: 1,
      },
      scrolltext: {
        color: 'black',
        
      },
      line: {
        borderBottomColor: 'gold',
        borderBottomWidth: 2,
        width: '0%', 
        alignSelf: 'center',
        marginVertical: 10,
        
      },
      iconRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 15,
      },
      iconText: {
        //marginLeft: 5,
        fontSize: 17,
      },
      shortLine: {
        borderBottomColor: 'gold',
        borderBottomWidth: 2,
        width: '30%', 
        alignSelf: 'center',
        marginBottom: 10,
    
        position: 'absolute',
        top: 310,
        
      },
});
