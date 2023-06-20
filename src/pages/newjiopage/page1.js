import React, {useState, Component} from 'react';
import { StyleSheet, Text, View, ScrollView, Image, FlatList, Button, TouchableOpacity, SafeAreaView } from 'react-native';

import {Card, Progresss} from '../utility/utility_JioJio.js';

export default class Page1 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const f = this.props.finishSelectSport;
        const progress = this.props.stat.editing == 0 ? (
            <View style={{flex:50,justifyContent:'center'}}>
                    <Progresss now={1}
                               pressnumber={this.handlePressNumber.bind(this)}/>
                </View>
        ) : (
            <View style={{flex:50,justifyContent:'center'}}></View>
        );
        return (
            <View style={styles.container}>
                <View style={{flex:40, flexDirection:'row', alignItems:'center',justifyContent:'space-between'}}>
                    <TouchableOpacity style={{ height: 40, width: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 100}} onPress={() => { if (this.props.stat.editing == 1) this.props.navigation.navigate('postedit') ; else {this.props.reset(); this.props.navigation.navigate('overview')} }}>
                        <Image source={require('../../images/back.png')} style={{ height: 80, width: 80 }} /> 
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginHorizontal:10}}>
                        <Text style={styles.title}>新的揪揪</Text>
                        <View style={styles.underOrangeLine}></View>
                    </View>
                    <View style={{height:40,width:40}}></View>
                </View>
                
                {progress}
                
                <View style={{flex:50, justifyContent:'center', alignItems:'center'}}>
                    <Text style={styles.subtitle}>請{this.props.stat.editing==1?"編輯":"選擇"}運動項目</Text>
                </View>

                <View style={{flex:400}}>
                    <ScrollView style={{flex:1}}>
                        <View style={styles.containerColumn}>
                            <View style={styles.containerRow}>
                                <TouchableOpacity style={this.props.stat.sport == "羽球" ? styles.selected : styles.unselected}
                                                  onPress={() => { if (this.props.stat.sport == "羽球") f("") ; else f("羽球"); }}>
                                    <Card sport="羽球" />
                                </TouchableOpacity>
                                <TouchableOpacity style={this.props.stat.sport == "籃球" ? styles.selected : styles.unselected}
                                                  onPress={() => { if (this.props.stat.sport == "籃球") f(""); else f("籃球"); }}>
                                    <Card sport="籃球" />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.containerRow}>
                                <TouchableOpacity style={this.props.stat.sport == "足球" ? styles.selected : styles.unselected}
                                                  onPress={() => { if (this.props.stat.sport == "足球") f(""); else f("足球"); }}>
                                    <Card sport="足球" />
                                </TouchableOpacity>
                                <TouchableOpacity style={this.props.stat.sport == "棒球" ? styles.selected : styles.unselected}
                                                  onPress={() => { if (this.props.stat.sport == "棒球") f(""); else f("棒球"); }}>
                                    <Card sport="棒球" />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.containerRow}>
                                <TouchableOpacity style={this.props.stat.sport == "桌球" ? styles.selected : styles.unselected}
                                                  onPress={() => { if (this.props.stat.sport == "桌球") f(""); else f("桌球"); }}>
                                    <Card sport="桌球" />
                                </TouchableOpacity>
                                <TouchableOpacity style={this.props.stat.sport == "網球" ? styles.selected : styles.unselected}
                                                  onPress={() => { if (this.props.stat.sport == "網球") f(""); else f("網球"); }}>
                                    <Card sport="網球" />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.containerRow}>
                                <TouchableOpacity style={this.props.stat.sport == "排球" ? styles.selected : styles.unselected}
                                                  onPress={() => { if (this.props.stat.sport == "排球") f(""); else f("排球"); }}>
                                    <Card sport="排球" />
                                </TouchableOpacity>
                                <TouchableOpacity style={this.props.stat.sport == "游泳" ? styles.selected : styles.unselected}
                                                  onPress={() => { if (this.props.stat.sport == "游泳") f(""); else f("游泳"); }}>
                                    <Card sport="游泳" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </View>
                
                <View style={{flex:50,justifyContent:'center',alignItems:'center'}}>
                    <TouchableOpacity style={styles.nextButtonStyle} onPress={this.handleNextPage.bind(this)}>
                        <Text style={styles.subtitle2}>{(this.props.stat.tagpageBack == 0 && this.props.stat.editing == 0) ? "下一步" : "確認"}</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flex:5}}></View>
            </View>

        );
    }
    
    handlePressNumber =  (now,page) => {
        if (page <= now) this.props.navigation.navigate(`page${page}`);
    }

    handleNextPage = async () => {
        if (this.props.stat.tagpageBack == 0 && this.props.stat.editing == 0) this.props.navigation.navigate("page2");
        else if (this.props.stat.editing == 1) this.props.navigation.navigate('postedit');
        else {this.props.setTagpageBack(0); this.props.navigation.navigate('verify'); }
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
    },
    containerRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20
    },
    selected: {
        borderWidth: 1,
        borderColor: 'grey',
        height: 150,
        width: 150,
        marginHorizontal: 10,
        justifyContent:'center'
    },
    unselected: {
        borderWidth: 0,
        height: 150,
        width: 150,
        marginHorizontal: 10,
        justifyContent:'center'
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

});