import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, FlatList, Button, TouchableOpacity, SafeAreaView } from 'react-native';


export default class Tag extends React.Component {

    constructor(props) {
        super(props);
    }

  render() {
    return (
        <View style={{marginRight: 8}}>
          <View style={[{backgroundColor: '#989898'},styles.label_box]}>
            <Text style={styles.label_text}>{this.props.title}</Text>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    label_box: {
      alignItems: 'center',
      paddingTop: 5,
      paddingBottom: 5,
      paddingLeft: 10,
      paddingRight: 10,
      borderRadius: 10,
    },
    label_text: {
      fontSize: 12,
      color: 'white',
      fontWeight: 'bold'
    },
});