import React, {useState, Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, FlatList, Button, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';

const getPic = sport => {
    if (sport == "羽球") return require('../../images/badminton.png');
    else if (sport == "籃球") return require("../../images/basketball.png");
    else if (sport == "排球") return require("../../images/volleyball.png");
    else if (sport == "足球") return require("../../images/soccer.png");
    else if (sport == "棒球") return require("../../images/baseball.png");
    else if (sport == "桌球") return require("../../images/pingpong.png");
    else if (sport == "網球") return require("../../images/tennis.png");
    else if (sport == "游泳") return require("../../images/swim.png");
    else return "";
}

export const NotificationItems = ({ sport, posterid, process}) => {
    return (
        <View style={styles.NotificationContainer}>
            <Image style={styles.sportIcon} source={require("../../images/badminton.png")} alignSelf='center'></Image>
            <View style={styles.informationContainer} alignSelf='center'>
                <Text style={styles.UpperPart}>{posterid}同意你的加入</Text>
                <View style={styles.LowerPart}>
                    <Text style={{flex: 1}}>
                        {sport}
                    </Text>
                    <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', borderRadius: 100 }}>
                            <Image source={require('../../images/DetailsButton.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
            <Image style={styles.Avatar} source={require("../../images/Brandon.png")}></Image>
        </View>
    );
}

export const ApprovalItems = ({ sport, applicant}) => {
    return (
        <View style={styles.NotificationContainer}>
            <Image style={styles.sportIcon} source={require("../../images/badminton.png")} alignSelf='center'></Image>
            <View style={styles.informationContainer} alignSelf='center'>
                <Text style={styles.UpperPart}>{applicant}想加入你的活動</Text>
                <View style={styles.LowerPart}>
                    <Text style={{flex: 1}}>
                        {sport}
                    </Text>
                    <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', borderRadius: 100 }}>
                            <Image source={require('../../images/DetailsButton.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
            <Image style={styles.Avatar} source={require("../../images/Brandon.png")}></Image>
        </View>
    );
}

export const ReminderItems = ({ sport, start_time}) => {
    const date = start_time.split(' ')[0], time = start_time.split(' ')[1];
    return (
        <View style={styles.NotificationContainer}>
            <Image style={styles.sportIcon} source={getPic(sport)} alignSelf='center'></Image>
            <View style={styles.informationContainer} alignSelf='center'>
                <Text style={styles.UpperPart}>於今天{time}開始</Text>
                <View style={styles.LowerPart}>
                    <Text style={{flex: 1}}>
                        {sport}
                    </Text>
                    <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', borderRadius: 100 }}>
                            <Image source={require('../../images/DetailsButton.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
            <Image style={styles.Avatar} source={require("../../images/Brandon.png")}></Image>
        </View>
    );
}

const styles = StyleSheet.create({
    UpperPart: {
        fontSize: 14,
    },
    LowerPart: {
        flexDirection: 'row',
        fontSize: 13,
        color: 'grey'
    },
    sportIcon: {
        width: 50,
        height: 50,
        marginLeft: 5,
        flex: 1
    },
    NotificationContainer: {
        alignSelf: 'center',
        width: 360,
        flex: 3,
        flexDirection: 'row',
        paddingVertical: 0,
        borderColor: '#CAC4D0',
        borderWidth: 0.8,
        borderRadius: 10,
    },
    informationContainer: {
        flexDirection: 'column',
        marginLeft: 5,
        flex: 4
    },
    Avatar: {
        alignSelf: 'flex-end'
    }
})