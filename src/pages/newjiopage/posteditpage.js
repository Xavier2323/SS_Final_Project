import React, {useState, Component} from 'react';
import { StyleSheet, Text, View, ScrollView, Image, FlatList, Button, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import axios from 'axios';

import { Tag } from '../utility/utility_JioJio.js';

export default class PostEdit extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const tagList = this.props.stat.tag.map((item) => { return (<Tag title={item} f={this.deleteTag.bind(this)}></Tag>) })
        const starttime = `${this.props.stat.from.getFullYear()}-${this.props.stat.from.getMonth()+1}-${this.props.stat.from.getDate()} ${this.props.stat.from.getHours()}:${this.props.stat.from.getMinutes() < 10 ? "0" : ""}${this.props.stat.from.getMinutes()}`;
        const endtime = `${this.props.stat.to.getFullYear()}-${this.props.stat.to.getMonth()+1}-${this.props.stat.to.getDate()} ${this.props.stat.to.getHours()}:${this.props.stat.to.getMinutes() < 10 ? "0" : ""}${this.props.stat.to.getMinutes()}`;
        return (
            <View style={styles.container}>
                <View style={{flex:40, flexDirection:'row', alignItems:'center',justifyContent:'space-between'}}>
                    <TouchableOpacity style={{ height: 40, width: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 100}} onPress={() => { this.props.reset(); this.props.navigation.navigate('overview') }}>
                        <Image source={require('../../images/back.png')} style={{ height: 80, width: 80 }} /> 
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginHorizontal:10}}>
                        <Text style={styles.title}>你的揪揪</Text>
                        <View style={styles.underOrangeLine}></View>
                    </View>
                    <TouchableOpacity style={{height:40,width:40,justifyContent: 'center', alignItems: 'center'}} onPress={() => {this.handleDeletePost();}}>
                        <Image source={require('../../images/trash_can.png')} style={{height:50,width:50}} />
                    </TouchableOpacity>
                </View>

                <View style={{flex:50,justifyContent:'center'}}>

                </View>
                

                <View style={{flex:400,alignItems:'center'}}>
                <ScrollView>
                        <View style={{flexDirection:'row',marginVertical:20}}>
                            <Text style={styles.subtitle1}>運動項目：</Text>
                            <Text style={styles.subtitle1}>{this.props.stat.sport}</Text>
                            <TouchableOpacity style={{marginHorizontal:20}} onPress={() => {this.props.navigation.navigate('page1')}}><Image style={{height:40,width:40}} source={require('../../images/edit.png')}/></TouchableOpacity>
                        </View>
                        <View style={{flexDirection:'row',marginVertical:20}}>
                            <Text style={styles.subtitle1}>運動場地：</Text>
                            <Text style={styles.subtitle1}>{this.props.stat.place}</Text>
                            <TouchableOpacity style={{marginHorizontal:20}} onPress={() => {this.props.navigation.navigate('page2')}}><Image style={{height:40,width:40}} source={require('../../images/edit.png')}/></TouchableOpacity>
                        </View>
                        <View style={{flexDirection:'row',marginVertical:20}}>
                            <Text style={styles.subtitle1}>開始時間：</Text>
                            <Text style={styles.subtitle1}>{starttime}</Text>
                            <TouchableOpacity style={{marginHorizontal:20}} onPress={() => {this.props.navigation.navigate('page3')}}><Image style={{height:40,width:40}} source={require('../../images/edit.png')}/></TouchableOpacity>
                        </View>
                        <View style={{flexDirection:'row',marginVertical:20}}>
                            <Text style={styles.subtitle1}>結束時間：</Text>
                            <Text style={styles.subtitle1}>{endtime}</Text>
                            <TouchableOpacity style={{marginHorizontal:20}} onPress={() => {this.props.navigation.navigate('page3')}}><Image style={{height:40,width:40}} source={require('../../images/edit.png')}/></TouchableOpacity>
                        </View>
                        <View style={{flexDirection:'row',marginVertical:20}}>
                            <Text style={styles.subtitle1}>運動人數：</Text>
                            <Text style={styles.subtitle1}>{this.props.stat.people}</Text>
                            <TouchableOpacity style={{marginHorizontal:20}} onPress={() => {this.props.navigation.navigate('page4')}}><Image style={{height:40,width:40}} source={require('../../images/edit.png')}/></TouchableOpacity>
                        </View>
                        <View style={{flexDirection:'row',marginVertical:20}}>
                            <Text style={styles.subtitle1}>Tags:</Text>
                            <View style={{flexDirection:'column',alignItems:'flex-start'}}>
                                {tagList}
                                <TouchableOpacity onPress={this.handlePressAdd.bind(this)}><Text style={[styles.subtitle1, { marginLeft: 20, color: 'grey' }]}>+</Text></TouchableOpacity>
                            </View>
                        </View>
                        <View style={{flexDirection:'column',marginVertical:20}}>
                            <Text style={styles.subtitle1}>備註:</Text>
                            <View style={{ backgroundColor: '#FFF9E9', width: 300, borderRadius: 5, borderColor: '#000000', borderWidth: 1, marginTop: 20}}>
                            <TextInput
                                        editable
                                        multiline
                                        numberOfLines={8}
                                        maxLength={100}
                                        onChangeText={(text) => { this.props.finishSelectTagMemo(this.props.stat.tag,text); }}
                                        value={this.props.stat.memo}
                                        style={{ padding: 10, fontSize: 18 }}
                            />
                            </View>
                        </View>
                    </ScrollView>
                </View>

                <View style={{flex:50,justifyContent:'center',alignItems:'center'}}>
                    <TouchableOpacity style={styles.nextButtonStyle} onPress={this.handleConfirm.bind(this)}>
                        <Text style={styles.subtitle2}>完成編輯</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flex:5}}></View>
            </View>

        );
    }

    handleDeletePost = async () => {
        const url = `http://test.eba-rrzupcxn.us-west-2.elasticbeanstalk.com/posts/deletepost?postid=${this.props.stat.postid}`;

        await axios.post(url).then(res => {

        }).catch(err => {console.log(err)})

        this.props.forceUpdate(1);
        this.props.navigation.navigate('overview');
    }

    checkValidation = async() => {
        this.props.updateValid(0);
        if (this.props.stat.sport == "") this.props.updateValid(-1);
        else if (this.props.stat.place == "") this.props.updateValid(-2);
        else {
            const url = `http://test.eba-rrzupcxn.us-west-2.elasticbeanstalk.com`;

            await axios.get(`${url}/places`,{
                params:{
                    sport:this.props.stat.sport
                }
            }).then(res => {
                var i,k=0;
                for (i=0;i<res.data.place.length;i++){
                    if (res.data.place[i].name == this.props.stat.place) k = 1
                }
                if (k == 0) this.props.updateValid(-3);
            })
        }
        const nowTime = new Date();
        const endTime = new Date(this.props.stat.to.getFullYear(),this.props.stat.to.getMonth(),this.props.stat.to.getDate(),this.props.stat.to.getHours(),this.props.stat.to.getMinutes());
        if (nowTime > endTime) this.props.updateValid(-4);
        if (this.props.stat.from > this.props.stat.to) this.props.updateValid(-5);
    }

    handlePressAdd = async () => {
        await this.props.setTagpageBack(2);
        this.props.navigation.navigate('tagpage');
    }

    handleConfirm = async () => {
        await this.checkValidation();

        if (this.props.stat.valid == 0){
            const from = this.props.stat.from;
            const to = this.props.stat.to;
            const date = this.props.stat.date;
            const starttime = `${from.getFullYear()}!${from.getMonth()+1}!${from.getDate()}!${from.getHours()}!${from.getMinutes()}`;
            const endtime = `${to.getFullYear()}!${to.getMonth()+1}!${to.getDate()}!${to.getHours()}!${to.getMinutes()}`;

            const url = `http://test.eba-rrzupcxn.us-west-2.elasticbeanstalk.com/posts/update?postid=${this.props.stat.postid}&sport=${this.props.stat.sport}&place=${this.props.stat.place}&starttime=${starttime}&endtime=${endtime}&people=${this.props.stat.people}&tags=${this.props.stat.tag.join('!')}&memo=${this.props.stat.memo}`;

            await axios.post(url).then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err);
            })
        }

        this.props.forceUpdate(1);
        this.props.navigation.navigate('launch');
    }

    deleteTag = (title) => {
        const pos = this.props.stat.tag.indexOf(title);
        if (this.props.stat.tag.length == 1) this.props.finishSelectTagMemo([], this.props.stat.memo);
        else {
            const newList = this.props.stat.tag;
            newList.splice(pos,1);
            this.props.finishSelectTagMemo(newList, this.props.stat.memo);
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
    nextButtonStyle: {
        height: 40,
        width: 150,
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
        marginVertical: 15
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
        color: 'grey'
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
        marginHorizontal: 15
    }

});