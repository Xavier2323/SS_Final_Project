import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, FlatList, Button, TouchableOpacity, SafeAreaView } from 'react-native';


export default class MainTab extends React.Component {

    constructor(props) {
        super(props);
    }

  render() {
    return (
        <View>
          <View style={[{backgroundColor: this.props.color},styles.label_box]}>
            <Text style={styles.label_text}>{this.props.title}</Text>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    label_box: {
      alignSelf: 'flex-start',
      alignItems: 'center',
      padding: 5,
      borderRadius: 10,
      marginBottom: 10
    },
    label_text: {
      fontSize: 12,
      color: 'white',
      fontWeight: 'bold'
    },
});