import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  TextInput,
} from 'react-native';
import Logo from '../../../assets/JioJioLogo.jpg';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
//自動登入
import AsyncStorage from "@react-native-async-storage/async-storage";
import {Auth} from  'aws-amplify';

import axios from 'axios';

const InitialScreen = ({setUserid}) => {
  const {height} = useWindowDimensions();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const {
    formState: {errors},
  } = useForm();


  const onSignUpPress = () => {
    navigation.navigate('SignUp');
  };

  const onSignInPress = async () => {
    setLoading(true);
    try {
      //嘗試從AsyncStorage抓取帳密
      const username_item = await AsyncStorage.getItem('Data_username');
      const username_stringfyItem = JSON.stringify(username_item);
      const username = JSON.parse(username_stringfyItem);
      console.log(`trying to get username:${username}`);
      const password_item = await AsyncStorage.getItem('Data_password');
      const password_stringfyItem = JSON.stringify(password_item);
      const password = JSON.parse(password_stringfyItem);
      const response = await Auth.signIn(username, password);
      //取得使用者id
      const url = `http://sample.eba-2nparckw.us-west-2.elasticbeanstalk.com/users/fromaccount`;
      await axios.get(url,{
        params:{
          account: username
        }
      }).then(async(res) => {
        console.log(res.data)
        AsyncStorage.setItem('Data_id', JSON.stringify(res.data.userid));
        await setUserid(res.data.userid);
      }).catch(err => {console.log(err)})
      //跳過SignIn
      const userid_item = await AsyncStorage.getItem('Data_id');
      const userid_stringfyItem = JSON.stringify(userid_item);
      const userid = JSON.parse(userid_stringfyItem);
      navigation.navigate('Home', {userid})
    } catch (e) {
      console.log('無法自動登入');
      console.log(e);
      navigation.navigate('SignIn');
    }
    setLoading(false);
  };

  /// !!! Test !!! ///
  const onNicknamePress = () => {
    navigation.navigate('NicknameSetting');
  };
  const onHeadshotPress = () => {
    navigation.navigate('HeadshotSetting');
  };
  const onIntroductionPress = () => {
    navigation.navigate('IntroductionSetting');
  }
  /// !!! //// !!! ///


  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, {height: height}]}
          resizeMode="contain"
        />

        <CustomButton
          text={loading ? "載入中.." : "登  入"}
          onPress={onSignInPress}
          type="THEME"
        />

        <CustomButton
          text="註  冊"
          onPress={onSignUpPress}
          type="THEME"
        />


         {/* <Text>Testing</Text>
        <CustomButton
          text="取暱稱"
          onPress={onNicknamePress}
          type="THEME"
        />
        <CustomButton
          text="設定大頭貼"
          onPress={onHeadshotPress}
          type="THEME"
        />
        <CustomButton
          text="自我介紹"
          onPress={onIntroductionPress}
          type="THEME"
        />  */}


      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F6663F',
  },
  logo: {
    marginTop:90,
    height: '20%',
    width: '68%',
    maxHeight: 350,
  },
});

export default InitialScreen;
