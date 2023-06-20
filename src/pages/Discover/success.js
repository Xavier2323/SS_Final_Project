import React from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity, ScrollView } from 'react-native';

export default class Success extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={require('../../images/success.png')}
                />
                
                <TouchableOpacity 
                    style={styles.backButton} 
                    onPress={()=>{this.props.navigation.navigate('postdetail')}}
                >
                    <Text style={styles.backButtonText}>回到上頁</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.homeButton} 
                    onPress={()=>{this.props.navigation.navigate('main')}}
                >
                    <Text style={styles.homeButtonText}>回到首頁</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        marginBottom: 220, 
    },
    backButton: {
        backgroundColor: '#EB7943',
        padding: 5,
        borderRadius: 15,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width:'80%',
    },
    backButtonText: {
        color: 'white',
        fontSize: 25,
        textAlign:'center',
    },
    homeButton: {
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width:'80%',
    },
    homeButtonText: {
        color: '#EB7943',
        fontSize: 25,
        textAlign:'center',
    },
});