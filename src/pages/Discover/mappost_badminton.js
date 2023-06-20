import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, Image, FlatList, Button, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Map  from './map.js';
import Post from './post.js';
import axios from 'axios';



export default class MapPost_badminton extends React.Component{
    constructor(props){
        super(props)
        this.state={
            postList:[]
        }
        this.updatePosts();
    }

    render(){
        const post = this.state.postList
        .filter(item => item.place === '校友體育館')
        .map((item) => {return (<Post props={item} f={this.setPostState.bind(this)} navigate={() => {this.props.navigation.navigate('postdetail')}}/>)})

        return(
            <ScrollView >
            <View>
            <View style={{flex:40, flexDirection:'row', alignItems:'center',justifyContent:'space-between'}}>
                    <TouchableOpacity style={{ height: 40, width: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 100}} onPress={()=>{this.props.navigation.navigate('main')}}>
                        <Image source={require('../../images/back.png')} style={{ height: 80, width: 80 } } /> 
                    </TouchableOpacity>
                    <Text style={styles.Placetext}>校友體育館</Text>
                    
                    <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginHorizontal:10}}>
                    </View>
                    <View style={{height:40,width:40}}></View>
                    
                </View>
                <View style={styles.line} />

                <ScrollView style={styles.scrollview}>

                   

                    
                    
                    {post}
                    
                </ScrollView>
            </View>
        </ScrollView>
        )
    }

    updatePosts = async() => {
        const url = `http://test.eba-rrzupcxn.us-west-2.elasticbeanstalk.com/posts`;

        await axios.get(url,{
            params:{
                finish:0,
                order:'starttimeasc'
            }
        }).then(res => {
            console.log(res.data);
            this.setState({postList:res.data.post});
        }).catch(err => {console.log(err)});


    }

    setPostState = async (props) => {
        await this.props.setPostState(props);
        console.log(this.props.statee);
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
      
      
      scrollview: {
        flex: 1,
      },
      scrolltext: {
        color: 'black',
        marginTop: 10,
        fontSize: 17,
      },
      line: {
        borderBottomColor: 'gold',
        borderBottomWidth: 2,
        width: '35%', 
        alignSelf: 'center',
        marginVertical: 10,
        
      },
      Placetext: {
        flexDirection: 'row',
        alignItems: 'center',
        //marginLeft: 15,
        fontSize:30,
      },
      
});