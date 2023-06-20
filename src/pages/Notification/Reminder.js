import React, {useState, Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, FlatList, Button, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import {ReminderItems} from '../utility/utility_Notification';
import axios from 'axios';

const ReminderScreen = ({navigation,statee,setPostState}) => {
    const url = `http://test.eba-rrzupcxn.us-west-2.elasticbeanstalk.com`;
    const [ReminderList, setList] = useState([]);

    axios.get(`${url}/posts`,{
        params:{
          participant: statee.userid,
          finish: 0,
          order:'starttimeasc'
        }
    }).then(res => {
        setList(
          res.data.post
        )
    }).catch(err => {
        console.log(err);
    })
    //console.log(ReminderList);
    return (
        <View style={styles.root}>
            <SafeAreaView style={styles.container}>
            <View style={{ height: 450, backgroundColor: '#FFF2E2' }}>
                <FlatList
                    nestedScrollEnabled={true}
                    data={ReminderList}
                    renderItem={({ item }) => { return <ReminderItems navigation={navigation} item={item} setPostState={setPostState}/> ;}}
                    />
            </View>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 0
    },
})

export default ReminderScreen;