import React, {useState, Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, FlatList, Button, TouchableOpacity, TextInput, SafeAreaView} from 'react-native';
import axios from 'axios';

export default class Launch extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        var mid = (<View></View>);
        var bot = (<View></View>);
        if (this.props.stat.valid == 0) {
            mid = (
                <View style={{flex:400, justifyContent:'center', alignItems:'center'}}>
                    <Text style={[styles.subtitle1,{marginVertical:30}]}>你的揪揪已成功{this.props.stat.editing == 1 ? "編輯" : "發起"}</Text>
                    <Image style={{width:250,height:250}} source={require('../../images/launch_successfully.png')}/>
                </View>
            )
            bot = (
                <View style={{flex:150,justifyContent:'center',alignItems:'center'}}>
                    <TouchableOpacity style={styles.nextButtonStyle} onPress={this.handleReturn.bind(this)}>
                        <Text style={styles.subtitle2}>返回揪揪頁面</Text>
                    </TouchableOpacity>
                </View>
            )
        }
        else {
            mid = (
                <View style={{flex:400, justifyContent:'center', alignItems:'center'}}>
                    <Text style={[styles.subtitle1,{marginVertical:30}]}>{this.props.stat.editing == 1 ? "編輯" : "發起"}失敗</Text>
                    <Image style={{width:250,height:250}} source={require('../../images/fail.png')}/>
                </View>
            )
            if (this.props.stat.valid == -1){
                bot =(
                    <View style={{flex:150,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:15,color:'#F60000'}}>缺少運動項目</Text>
                        <View style={{flexDirection:'row'}}>
                            <TouchableOpacity style={styles.nextButtonStyle} onPress={this.handleReturn.bind(this)}>
                                <Text style={styles.subtitle2}>取消發起</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.nextButtonStyle} onPress={this.handleReturnVerify.bind(this)}>
                                <Text style={styles.subtitle2}>返回確認頁面</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            }
            else if (this.props.stat.valid == -2){
                bot =(
                    <View style={{flex:150,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:15,color:'#F60000'}}>缺少運動地點</Text>
                        <View style={{flexDirection:'row'}}>
                            <TouchableOpacity style={styles.nextButtonStyle} onPress={this.handleReturn.bind(this)}>
                                <Text style={styles.subtitle2}>取消發起</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.nextButtonStyle} onPress={this.handleReturnVerify.bind(this)}>
                                <Text style={styles.subtitle2}>返回確認頁面</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            }
            else if (this.props.stat.valid == -3){
                bot =(
                    <View style={{flex:150,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:15,color:'#F60000'}}>該運動項目不支援該運動地點</Text>
                        <View style={{flexDirection:'row'}}>
                            <TouchableOpacity style={styles.nextButtonStyle} onPress={this.handleReturn.bind(this)}>
                                <Text style={styles.subtitle2}>取消發起</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.nextButtonStyle} onPress={this.handleReturnVerify.bind(this)}>
                                <Text style={styles.subtitle2}>返回確認頁面</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            }
            else if (this.props.stat.valid == -4){
                bot =(
                    <View style={{flex:150,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:15,color:'#F60000'}}>揪揪結束時間必須晚於現在</Text>
                        <View style={{flexDirection:'row'}}>
                            <TouchableOpacity style={styles.nextButtonStyle} onPress={this.handleReturn.bind(this)}>
                                <Text style={styles.subtitle2}>取消發起</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.nextButtonStyle} onPress={this.handleReturnVerify.bind(this)}>
                                <Text style={styles.subtitle2}>返回確認頁面</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            }
            else{
                bot =(
                    <View style={{flex:150,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:15,color:'#F60000'}}>揪揪結束時間必須晚於開始時間</Text>
                        <View style={{flexDirection:'row'}}>
                            <TouchableOpacity style={styles.nextButtonStyle} onPress={this.handleReturn.bind(this)}>
                                <Text style={styles.subtitle2}>取消發起</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.nextButtonStyle} onPress={this.handleReturnVerify.bind(this)}>
                                <Text style={styles.subtitle2}>返回確認頁面</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            }
        }
        return (
            <View style={styles.container}>
                <View style={{flex:40, flexDirection:'row', alignItems:'center',justifyContent:'space-between'}}>
                    <View style={{ height: 40, width: 40}}/>
                    <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginHorizontal:10}}>
                        <Text style={styles.title}>{this.props.stat.editing == 1 ? "你的揪揪" : "新的揪揪"}</Text>
                        <View style={styles.underOrangeLine}></View>
                    </View>
                    <View style={{height:40,width:40}}></View>
                </View>
                {mid}
                {bot}
                <View style={{flex:5}}></View>
            </View>
        );
    }

    handleReturnVerify = () => {
        if (this.props.editing == 1) this.props.navigation.navigate('postedit');
        else this.props.navigation.navigate('verify');
    }

    handleReturn = async () => {
        await this.props.reset();
        this.props.navigation.navigate('overview');
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
        elevation: 5,
        marginHorizontal:20,
        marginTop:30
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