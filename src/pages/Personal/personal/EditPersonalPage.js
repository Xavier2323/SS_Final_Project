import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, FlatList, Button, TouchableOpacity, SafeAreaView, TextInput} from 'react-native';

import MainTab from './MainTab';
import ProfileImage from './ProfileImage';
import ActivityImage from './ActivityImage';

import { Modal } from "../../../components/Modal";
import CustomButton from '../../../components/CustomButton';

export default class EditPersonalPage extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        editname: this.props.name,
        editimg: this.props.img,
        editschool: this.props.school,
        editintro: this.props.intro,
        editaimg1: this.props.aimg1,
        editaimg2: this.props.aimg2,
        editaimg3: this.props.aimg3,
        editaimg4: this.props.aimg4,
        editaimg5: this.props.aimg5,
        editaimg6: this.props.aimg6,

        isModalVisible : false,
    }
    this.onHandleModalTruePress = this.onHandleModalTruePress.bind(this);
    this.onHandleModalFalsePress = this.onHandleModalFalsePress.bind(this);
  }

  render() {
    return (
        <View style={styles.container}>
          <ScrollView
            onScroll={e => {
            const y = e.nativeEvent.contentOffset.y;
            }}
            style={{flex: 1}} // or set height directly
            >
            <View style={styles.mug}>
              <View style={{flexDirection: 'row', flex: 1, alignItems: 'center'}}>
                <TouchableOpacity onPress={() => this.setState({...this.state,isModalVisible : true})}>
                  <Image source={require('./images/tab/back.png')}/>
                </TouchableOpacity>
                <TextInput
                  style={[styles.input,{flex: 1,marginRight: 10}]}
                  onChangeText={(text) => { this.setState({ ...this.state, editname: text }); }}
                  value={this.state.editname}
                />
                </View>
                <TouchableOpacity onPress={this.store.bind(this)}>
                  <View style={{padding: 10, backgroundColor: '#EB7943', borderRadius: 10, marginRight: 10}}>
                    <Text style={{color: 'white',fontSize: 15, fontWeight: '500'}}>儲存</Text>
                  </View>
                </TouchableOpacity>
            </View>  

            <View style={{flexDirection: 'row', marginBottom: 10}}>
              <View style={{flex: 1}}>
                <View style={{alignItems: 'flex-start', flexWrap: 'wrap'}}>
                  <ProfileImage image={this.state.editimg} photonum={0} SetImg={(img) => { this.setState({...this.state, editimg: img}); }} />
                </View>
              </View>
              <View style={{flex: 1}}>
                <View style={styles.label_box}>
                  <Text style={styles.label_text}>校系年級</Text>
                </View>
                <TextInput
                  style={styles.input}
                  onChangeText={(text) => { this.setState({ ...this.state, editschool: text}); }}
                  value={this.state.editschool}
                />
              </View>
            </View>

            <MainTab title='活動照片' color='#EB7943'/>
            <View style={styles.activity_pictures}>
              <ActivityImage image={this.state.editaimg1} photonum={1} SetImg={(img) => { this.setState({...this.state, editaimg1: img}); }} />
              <ActivityImage image={this.state.editaimg2} photonum={2} SetImg={(img) => { this.setState({...this.state, editaimg2: img}); }} />
              <ActivityImage image={this.state.editaimg3} photonum={3} SetImg={(img) => { this.setState({...this.state, editaimg3: img}); }} />     
            </View>
            <View style={styles.activity_pictures}>
              <ActivityImage image={this.state.editaimg4} photonum={4} SetImg={(img) => { this.setState({...this.state, editaimg4: img}); }} />
              <ActivityImage image={this.state.editaimg5} photonum={5} SetImg={(img) => { this.setState({...this.state, editaimg5: img}); }} />
              <ActivityImage image={this.state.editaimg6} photonum={6} SetImg={(img) => { this.setState({...this.state, editaimg6: img}); }} />      
            </View>

            <MainTab title='自我介紹' color='#EB7943'/>
            <View>
              <View style={styles.intro_box}>
              <TextInput
                multiline
                onChangeText={(text) => { this.setState({...this.state, editintro: text}); }}
                value={this.state.editintro}
                style={{padding: 10}}
              />
              </View>
            </View>

            <Modal isVisible={this.state.isModalVisible}>
              <Modal.Container2>
                    <Modal.Body>
                      <Text style={styles.modal_text}>確認要放棄編輯嗎?</Text>
                    </Modal.Body>
                  <Modal.Footer>
                    <CustomButton
                      text="取消"
                      onPress={this.onHandleModalFalsePress}
                      type="LOGOUT_CANCEL"
                    />
                    <CustomButton
                      text="離開"
                      onPress={this.onHandleModalTruePress}
                      type="LOGOUT_TRUE"
                    />
                  </Modal.Footer>
              </Modal.Container2>
            </Modal>
            
          </ScrollView>
        </View>
    );
  }

  onHandleModalTruePress() {
    this.setState({...this.state,isModalVisible : false});
    this.props.navigation.goBack()
  }
  onHandleModalFalsePress() {
    this.setState({...this.state,isModalVisible : false});
  }

  store(){
    this.props.OnStore(
      this.state.editname,
      this.state.editimg,
      this.state.editschool,
      this.state.editintro,
      this.state.editaimg1,
      this.state.editaimg2,
      this.state.editaimg3,
      this.state.editaimg4,
      this.state.editaimg5,
      this.state.editaimg6
    );
  }
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10
      },
      container: {
        flex: 1,
        padding: 20
      },
      row: {
        flexDirection: 'row',
        flexWrap: 'wrap'
      },
      mug: {
        flexDirection: 'row',
        height: 100,
        alignItems: 'center'
      },
      activity_pictures: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
      },
      picture_box: {
        flex: 1,
        margin: 5,
        alignItems: 'center'
      },
      image: {
        width: 108,
        height: 192,
        borderRadius: 9
      },
      intro: {
        flex: 4,
        backgroundColor: 'red'
      },
      intro_box: {
        height: 250,
        padding: 5,
        backgroundColor: '#FBF1D6',
        borderRadius: 10,
        marginBottom: 10
      },
      label_box: {
        alignSelf: 'flex-start',
        padding: 5,
        backgroundColor: '#EB7943',
        borderRadius: 10,
        marginBottom: 10
      },
      label_text: {
        fontSize: 12,
        color: 'white',
        fontWeight: 'bold'
      },
      content_box: {
        alignSelf: 'flex-start',
        padding: 5,
        backgroundColor: '#FBF1D6',
        borderRadius: 10,
        marginBottom: 10
      },
      content_text: {
        fontSize: 12,
        borderRadius: 5,
        color: 'black',
        fontWeight: 'bold'
      },
      text: {
        fontSize: 20,
        color: 'white'
      },
      modal_text: {
        fontSize: 22,
        fontWeight: "400",
        textAlign: "center",
        color: "black",
        fontWeight: 'bold',
      },
});