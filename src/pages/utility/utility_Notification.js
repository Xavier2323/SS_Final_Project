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

export const NotificationItems = ({posterprofile, post, navigation, setPostState}) => {
    //const navigation = useNavigation();
    //console.log(post);
    //Notify: state = 1
    const gotoDetails = async () => {
        await setPostState({...post, state: 1,from:1});
        navigation.navigate('postdetail');
    }
    return (
        <View style={styles.NotificationContainer}>
            <Image style={styles.sportIcon} source={require("../../images/badminton.png")} alignSelf='center'></Image>
            <View style={styles.informationContainer} alignSelf='center'>
                <Text style={styles.UpperPart}>{posterprofile.name}同意你的加入</Text>
                <View style={styles.LowerPart}>
                    <Text style={{flex: 1}}>
                        {post.sport}
                    </Text>
                    <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', borderRadius: 100 }} onPress={() => {gotoDetails()}}>
                            <Image source={require('../../images/DetailsButton.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
            <Image style={styles.Avatar} source={require("../../images/Brandon.png")}></Image>
        </View>
    );
}

export const ApprovalItems = ({applicantprofile, post,applyid, navigation, setPostState}) => {
    //const navigation = useNavigation();
    //Approal: state = 2
    const gotoDetails = async() => {
        await setPostState({...post,applyid:applyid, state: 2,from:1});
        navigation.navigate('postdetail');
    }
    return (
        <View style={styles.NotificationContainer}>
            <Image style={styles.sportIcon} source={require("../../images/badminton.png")} alignSelf='center'></Image>
            <View style={styles.informationContainer} alignSelf='center'>
                <Text style={styles.UpperPart}>{applicantprofile.name}想加入你的活動</Text>
                <View style={styles.LowerPart}>
                    <Text style={{flex: 1}}>
                        {post.sport}
                    </Text>
                    <TouchableOpacity onPress={() => {gotoDetails()}} style={{justifyContent: 'center', alignItems: 'center', borderRadius: 100 }}>
                            <Image source={require('../../images/DetailsButton.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
            <Image style={styles.Avatar} source={require("../../images/Brandon.png")}></Image>
        </View>
    );
}

export const ReminderItems = ({item, navigation, setPostState}) => {
    //const navigation = useNavigation();
    //Reminder: state = 3
    const gotoDetails = async () => {
        await setPostState({...item, state:3,from:1});
        navigation.navigate('postdetail');
    }
    const date = item.start_time.split(' ')[0], time = item.start_time.split(' ')[1];
    return (
        <View style={styles.NotificationContainer}>
            <Image style={styles.sportIcon} source={getPic(item.sport)} alignSelf='center'></Image>
            <View style={styles.informationContainer} alignSelf='center'>
                <Text style={styles.UpperPart}>於今天{time}開始</Text>
                <View style={styles.LowerPart}>
                    <Text style={{flex: 1}}>
                        {item.sport}
                    </Text>
                    <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', borderRadius: 100 }} onPress={() => (gotoDetails())}>
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