import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, Image, FlatList, Button, TouchableOpacity, SafeAreaView, StatusBar, ImageBackground } from 'react-native';
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
        const post = this.state.postList.map((item) => { return (<Post props={item} f={this.setPostState.bind(this)} navigate={() => {this.props.navigation.navigate('postdetail')}}/>)})
        return(



  
                

                    // {/* <ImageBackground 
                    //     source={require('../../images/Top_app_bar.png')} 
                    //     style={styles.ContainerTop}
                    //     resizeMode="cover"
                    // >
                    //     <View style={styles.topBar}>
                    //         <TouchableOpacity style={styles.Notification} onPress={()=>{this.props.navigation.navigate('Notification')}}>
                    //             <Image source={require('../../images/bell.png')}/>
                    //         </TouchableOpacity>
                    //         <TouchableOpacity style={styles.Notification} onPress={()=>{this.props.navigation.navigate('Personal')}}>
                    //             <Image source={require('../../images/Person.png')}/>
                    //         </TouchableOpacity>
                    //     </View>
                    // </ImageBackground> */}


            

                    // {/* <ImageBackground 
                    //     source={require('../../images/Top_app_bar.png')} 
                    //     style={styles.ContainerTop}
                    //     resizeMode="cover"
                    // >
                    //     <View style={styles.topBar}>
                    //         <TouchableOpacity style={styles.Notification} onPress={()=>{this.props.navigation.navigate('Notification')}}>
                    //             <Image source={require('../../images/bell.png')}/>
                    //         </TouchableOpacity>
                    //         <TouchableOpacity style={styles.Notification} onPress={()=>{this.props.navigation.navigate('Personal')}}>
                    //             <Image source={require('../../images/Person.png')}/>
                    //         </TouchableOpacity>
                    //     </View>
                    // </ImageBackground> */}

                    <View style={[styles.root,{flexDirection:'column',flex:1}]}>
                    {/* <StatusBar barStyle="light-content" /> */}
                      <View style={{flex:0.5}}></View>

                            <View style={{flex:4}}>
                               
                                    <Map navigate_No={() => {this.props.navigation.navigate('Notification')}}
                                    navigate_Per={() => {this.props.navigation.navigate('Personal')}} 
                                    navigate_soccer={() => {this.props.navigation.navigate('mappost_soccer')}} 
                                    navigate_swim={() => {this.props.navigation.navigate('mappost_swim')}} 
                                    navigate_badminton={() => {this.props.navigation.navigate('mappost_badminton')}}
                                    navigate_basketball={() => {this.props.navigation.navigate('mappost_basketball')}}
                                    navigate_baseball={() => {this.props.navigation.navigate('mappost_baseball')}}
                                    navigate_volleyball={() => {this.props.navigation.navigate('mappost_volleyball')}}
                                    navigate_tennis={() => {this.props.navigation.navigate('mappost_tennis')}}
                                    navigate_tabletennis={() => {this.props.navigation.navigate('mappost_tabletennis')}}
                                    navigate_B_V={() => {this.props.navigation.navigate('mappost_B_V')}}
                                    />
                            </View >


                            <View style={{flex:3}}>
                              <ScrollView>
                                      <View style={styles.shortLine} /> 

                                      <View style={styles.iconRow}>
                                          <Image source={require('../../images/Vector.png')} style={styles.bellIcon} />
                                          <Text style={styles.iconText}>即時揪揪:</Text>
                                      </View>

                                      <Text style={styles.scrolltext}>周圍正在揪揪的夥伴</Text>
                                      <View style={styles.line} />

                                      {post}
                              </ScrollView>
                            </View>
                    
                    <View style={styles.shortLine} /> 
                
            </View>



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
            this.setState({postList:res.data.post});
        }).catch(err => {console.log(err)});


    }

    setPostState = async (props) => {
        await this.props.setPostState({...props, state: 0});
        //console.log(this.props.statee);
    }

}

const styles = StyleSheet.create({
    root: {
        //alignItem: 'center',
        padding:0,
        //height:'100%',
    },
    ContainerTop: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width:'100%',
      marginTop: '5%',
    },
    topBar: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 10, 
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
        marginTop: 10,
        marginLeft: '5%',
        fontSize: 22,
      },
      line: {
        borderBottomColor: 'gold',
        borderBottomWidth: 2,
        width: '40%', 
      
        marginVertical: 10,
        marginLeft: '5%',
      },
      iconRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '3%',
        marginLeft: '5%',
      },
      iconText: {
        //marginTop: 15,
        fontSize: 17,
      },
      shortLine: {
        borderBottomColor: 'gold',
        borderBottomWidth: 2,
        width: '30%', 
        alignSelf: 'center',
        
        // position: 'absolute',
        // top: 310,
        
      },
      bellIcon: {
        height: 20, 
        width: 20, 
        //marginRight: 5, 
    },
});