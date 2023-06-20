import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/core';
import {useForm} from 'react-hook-form';
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from 'axios';

const IntroductionSettingScreen = ({setUserid}) => {
  const {control, handleSubmit} = useForm();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);


  const onSendPressed = async data => {
    if (loading) return;
    setLoading(true);
  
    try {
      //從AsyncStorage取得剛輸入的使用者資料、處理
      const username_item = await AsyncStorage.getItem('Data_username');
      const username_stringfyItem = JSON.stringify(username_item);
      const username = JSON.parse(username_stringfyItem);
      const nickname_item = await AsyncStorage.getItem('Data_nickname');
      const nickname_stringfyItem = JSON.stringify(nickname_item);
      const nickname = JSON.parse(nickname_stringfyItem);
      const school_item = await AsyncStorage.getItem('Data_school');
      const school_stringfyItem = JSON.stringify(school_item);
      const school = JSON.parse(school_stringfyItem);
      const headshot_item = await AsyncStorage.getItem('Data_headshot');
      const headshot_stringfyItem = JSON.stringify(headshot_item);
      const headshot = JSON.parse(headshot_stringfyItem);  


      console.log('---最終資料---')
      console.log(`暱稱:${nickname}`);
      console.log(`系級:${school}`);
      console.log(`大頭照:${headshot}`);
      console.log(`自我介紹:${data.Introduction}`);
      console.log('--------------');

      //建立userid
      const url = `http://test.eba-rrzupcxn.us-west-2.elasticbeanstalk.com/users/create?account=${username}&name=${nickname}&schoolgrade=${school}&intro=${data.Introduction}&avatar=${headshot}`;
      await axios.post(url).then(async(res) => {
        console.log(res.data)
        AsyncStorage.setItem('Data_id', JSON.stringify(res.data.profile.userid));
        await setUserid(res.data.profile.userid);
      }).catch(err => {console.log(err)})

      navigation.navigate('Home');
    } catch (e) {
      console.log("error", e);
    }
    
    setLoading(false);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>來個自我介紹吧！</Text>

        <CustomInput
          name="Introduction"
          control={control}
          placeholder="大家好! 我是個喜歡..."
          rules={{
            required: '介紹一下自己啦!',
          }}
          type='introduction'
        />

        <Text></Text>

        <CustomButton 
          text={loading ? "載入中.." : "送出"} 
          type="SETTING"
          onPress={handleSubmit(onSendPressed)} />
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
    marginBottom: '4.5%',
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
});

export default IntroductionSettingScreen;
