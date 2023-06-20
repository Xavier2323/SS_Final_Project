import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, FlatList, Button, TouchableOpacity, SafeAreaView } from 'react-native';


export default class ColorBar extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
        <View style={{marginBottom: 10}}>
          <Text style={styles.text}>{this.props.text}</Text>
          <View style={{height: 5, width: 80, backgroundColor: this.props.color}}></View>
        </View>
      );
  }
}

const styles = StyleSheet.create({
    text: {
      fontSize: 20,
      color: 'black',
      fontWeight: '800',
      paddingBottom: 5
    },
});