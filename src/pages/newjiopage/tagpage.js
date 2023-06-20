import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, FlatList, Button, TouchableOpacity, SafeAreaView, SectionList, TextInput } from 'react-native';
import axios from 'axios';

import { Tag, TagList } from '../utility/utility_JioJio';

export default class TagPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            search:"",
            list:[]
        }

        const url = `http://sample.eba-2nparckw.us-west-2.elasticbeanstalk.com`;
        
        axios.get(`${url}/tags`).then(res => {
            this.setState({...this.state,list:[...res.data.tags]});
        })
    }

    render(){
        const tagList = this.props.stat.tag.map((item) => { return (<Tag title={item} f={this.deleteTag.bind(this)}></Tag>) })
        const searchList = this.state.list.map((item) => { return (<TagList name={item.name} times={item.times} f={this.onSelectTag.bind(this)}/>)})

        return(
            <View style={styles.container}>
                <View style={{flex:40, flexDirection:'row', alignItems:'center',justifyContent:'space-between'}}>
                    <TouchableOpacity style={{ height: 40, width: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 100}} onPress={async () => {if (this.props.stat.tagpageBack == 0) this.props.navigation.navigate('page5'); else if (this.props.stat.tagpageBack == 2) this.props.navigation.navigate('postedit'); else {this.props.navigation.navigate('verify'); this.props.setTagpageBack(0);} }}>
                        <Image source={require('../../images/back.png')} style={{ height: 80, width: 80 }} /> 
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginHorizontal:10}}>
                        <Text style={styles.title}>Tags</Text>
                        <View style={styles.underOrangeLine}></View>
                    </View>
                    <View style={{height:40,width:40}}></View>
                </View>

                <View style={{flex:200,justifyContent:'center'}}>
                    <ScrollView style={{marginTop:30}}>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.subtitle1}>目前的Tags:</Text>
                        <View style={{flexDirection:'column',alignItems:'flex-start'}}>
                            {tagList}
                        </View>
                    </View>
                    </ScrollView>
                </View>

                <View style={{flex:300,flexDirection:'column',alignItems:'center',justifyContent:'center',paddingTop:30}}>
                    
                    <TextInput onChangeText={(newText) => {this.handleSearchTextChange(newText)}}
                                value={this.state.search}
                                placeholder=" 搜尋"
                                style={{borderColor:'black',fontSize:23,width:300,borderRadius:10,backgroundColor:'#CECECE'}}/>
                    <ScrollView>
                        {searchList}
                    </ScrollView>
                </View>

                <View style={{flex:50,justifyContent:'center',alignItems:'center'}}>
                    
                </View>

                <View style={{flex:5}}></View>
            </View>
        );
    }

    onSelectTag = (name) => {
        var code = 1;
        for (let i=0;i<this.props.stat.tag.length;i++){
            if (this.props.stat.tag[i] == name) code = 0;
        }
        if (code) this.props.finishEditTag([...this.props.stat.tag,name]);
    }

    handleSearchTextChange = (newText) => {
        this.setState({...this.state,search:newText})
        const url = `http://sample.eba-2nparckw.us-west-2.elasticbeanstalk.com`;
        
        axios.get(`${url}/tags`,{
            params:{
                name:newText
            }
        }).then(res => {
            if (res.data.status == "ok") this.setState({...this.state,list:[...res.data.tags,{name:"",times:-1}]});
            else this.setState({...this.state,list:[{name:newText,times:-1}]});
        })
    }

    deleteTag = (title) => {
        const pos = this.props.stat.tag.indexOf(title);
        if (this.props.stat.tag.length == 1) this.props.finishEditTag([]);
        else {
            const newList = this.props.stat.tag;
            newList.splice(pos,1);
            this.props.finishEditTag(newList);
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        flexDirection: 'column',
        marginHorizontal:30
      },
    containerColumn: {
        flexDirection: 'column',
        marginHorizontal: 0
    },
    containerRow: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginVertical: 30
    },
    tagContainer: {
        borderRadius: 5,
        backgroundColor: '#AEAEAE',
        width: 60,
        marginHorizontal: 20,
        flexDirection: 'row',
    },
    selected: {
        borderWidth: 1,
        borderColor: 'grey',
        marginHorizontal: 2,
        marginVertical: 0,
    },
    unselected: {
        borderWidth: 0,
        marginHorizontal: 2,
        marginVertical: 1
    },
    xmarkcontainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 5
    },
    nextButtonStyle: {
        height: 40,
        width: 110,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: '#EB7943',
        elevation: 5
    },
    title: {
        textAlign: 'center',
        fontSize: 35,
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: 22,
        fontWeight: 500,
    },
    subtitle1: {
        fontSize: 20
    },
    subtitle2: {
        fontSize: 20,
        color: 'white',
        paddingBottom: 5
    },
    subtitle3: {
        fontSize: 15,
        marginLeft: 8,
        paddingTop: 4
    },
    underOrangeLine: {
        height: 6,
        width: 110,
        backgroundColor: '#FFC700',
        marginTop: 5,
        marginLeft: 15
    },
    listStyle: {
        marginHorizontal: 30
    },
    sportIcon: {
        width: 50,
        height: 50
    },
    scrollStyle: {
        height: 500,
        marginHorizontal: 30
    }

});