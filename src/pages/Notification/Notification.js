import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, Image, FlatList, Button, TouchableOpacity, SafeAreaView, StatusBar, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import NotifyScreen from './Notify';
import ApprovalScreen from './Approval';
import ReminderScreen from './Reminder';

const Tab = createMaterialTopTabNavigator();

const NotificationScreen = ({navigation,statee}) => {
    //const navigation = useNavigation();

    const goBacktoDiscover = () => {
        navigation.navigate('main');
    }
    return (
        
        <NavigationContainer independent={true} style={styles.root}>
             <View style={styles.containerRow}>
                <TouchableOpacity style={{ height: 40, width: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 100, marginHorizontal: 10 }} onPress={goBacktoDiscover}>
                    <Image source={require('../../images/back.png')} style={{ height: 80, width: 80 }} />
                </TouchableOpacity>
            </View>
            <Tab.Navigator initialRouteName="通知" screenOptions={{ 
                headerShown: false ,
                tabBarActiveBackgroundColor: '#F5AC78',
                tabBarStyle: {width: '90%', height: '8%', borderRadius: 10, alignSelf: 'center', position: 'relative'}

            }}>
                <Tab.Screen name="通知">
                    {(props) => <NotifyScreen {...props} navigation={navigation} statee={statee}/>}
                </Tab.Screen>
                <Tab.Screen name="待審核">
                    {(props) => <ApprovalScreen {...props} navigation={navigation} statee={statee}/>}
                </Tab.Screen>
                <Tab.Screen name="活動提醒">
                    {(props) => <ReminderScreen {...props} navigation={navigation} statee={statee}/>}
                </Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    root: {
        paddingVertical: '5%',
        paddingHorizontal: '10%'
    },
    containerRow: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginVertical: '9%'
    },
    TabContainerRow: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginVertical: 0,
        borderRadius: 10
    }
})

export default NotificationScreen;