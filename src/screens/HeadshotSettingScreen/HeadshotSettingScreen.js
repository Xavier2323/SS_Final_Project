import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/core';
import {useForm} from 'react-hook-form';
import AsyncStorage from "@react-native-async-storage/async-storage";
import SetProfileImage from './SetProfileImg';

import { set_pfpimg } from '../../pages/utility/utility_img';

const ForgotPasswordScreen = () => {
  const {control, handleSubmit} = useForm();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [img, setimg] = useState(null);
  const [imgid, setimgid] = useState(-1);

  // const onSendPressed = async data => {
  //   if (loading) return;
  //   setLoading(true);

  //   //上傳大頭照到Async storage
  //   //...
  //   //

  //   navigation.navigate('IntroductionSetting');

  //   setLoading(false);
  // };

  const onPassPress = async() => {
    var get_img_id=await set_pfpimg(img);
    
    setimgid(get_img_id);

    try {
      const string_imgid = JSON.stringify(get_img_id);
      AsyncStorage.setItem('Data_headshot', string_imgid);
      navigation.navigate('IntroductionSetting');
    } catch (e) {
      console.log("error", e);
    }

  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>設定大頭貼</Text>

        <SetProfileImage image={img} photonum={0} SetImg={(img) => { setimg(img) }}/>
        <CustomButton
          text="下一步"
          onPress={onPassPress}
          type="TERTIARY"/>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 30,
    paddingTop: '13%',
    color:'#EB7943',
    fontWeight: 900,
    borderColor: '#FFC700',
    borderBottomWidth: 5.3,
    paddingHorizontal:6,
    marginBottom: '30%',
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
});

export default ForgotPasswordScreen;
