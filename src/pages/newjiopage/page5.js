import React, {useState, Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, FlatList, Button, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';

import { Tag, Progresss } from '../utility/utility_JioJio.js';

export default class Page5 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const tagList = this.props.stat.tag.map((item) => { return (<Tag title={item} f={this.deleteTag.bind(this)} />) })

        return (
            <View style={styles.container}>
                <View style={{flex:40, flexDirection:'row', alignItems:'center',justifyContent:'space-between'}}>
                    <TouchableOpacity style={{ height: 40, width: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 100}} onPress={() => { this.props.reset(); this.props.navigation.navigate('overview') }}>
                        <Image source={require('../../images/back.png')} style={{ height: 80, width: 80 }} /> 
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginHorizontal:10}}>
                        <Text style={styles.title}>新的揪揪</Text>
                        <View style={styles.underOrangeLine}></View>
                    </View>
                    <View style={{height:40,width:40}}></View>
                </View>

                <View style={{flex:50,justifyContent:'center'}}>
                    <Progresss now={5} 
                               pressnumber={this.handlePressNumber.bind(this)} />
                </View>

                <View style={{flex:50, justifyContent:'center', alignItems:'center'}}>
                    <Text style={styles.subtitle}>補充一下你的揪揪吧</Text>
                </View>

                <View style={{flex:400,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                    <ScrollView>
                        <View style={{flexDirection:'row'}}>
                            <Text style={styles.subtitle1}>Tags:</Text>
                            <View style={{flexDirection:'column',alignItems:'flex-start'}}>
                                {tagList}
                                <TouchableOpacity onPress={this.handlePressAdd.bind(this)}><Text style={[styles.subtitle1, { marginLeft: 20, color: 'grey' }]}>+</Text></TouchableOpacity>
                            </View>
                        </View>
                        <Text style={[styles.subtitle1, { marginTop:10 }]}>備註:</Text>
                        <View style={{ backgroundColor: '#FFF9E9', width: 300, borderRadius: 5, borderColor: '#000000', borderWidth: 1, marginTop: 20 }}>
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
                    </ScrollView>
                </View>

                <View style={{flex:50,justifyContent:'center',alignItems:'center'}}>
                    <TouchableOpacity style={styles.nextButtonStyle} onPress={this.handleNextPage.bind(this)}>
                        <Text style={styles.subtitle2}>下一步</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flex:5}}></View>
            </View>
        );
    }

    handlePressAdd = async () => {
        this.props.setTagpageBack(0);
        this.props.navigation.navigate('tagpage');
    }

    handlePressNumber =  (now,page) => {
        if (page <= now) this.props.navigation.navigate(`page${page}`);
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

    handleNextPage = async () => {
        this.props.navigation.navigate('verify');
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
        justifyContent:'center'
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