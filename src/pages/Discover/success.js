
import React from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity,ScrollView } from 'react-native';


export default class Success extends React.Component{
    constructor(props){
        super(props)
    }

    render(){

        <View>

                    <TouchableOpacity style={{ height: 40, width: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 100}} onPress={()=>{this.props.navigation.navigate('main')}}>
                    <Text style={{fontSize:25}}>回到上頁</Text>
                    </TouchableOpacity>

        
                                    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:10}}>
                                        <View style={{height:10}}></View>
                                        <TouchableOpacity  onPress={()=>{this.props.navigation.navigate('postdetail')}}>
                                            <Text style={{fontSize:25}}>回到首頁</Text>
                                        </TouchableOpacity>

                                    </View>


        </View>
    }
}