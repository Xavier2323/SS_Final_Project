import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/core';
import {useForm} from 'react-hook-form';
import AsyncStorage from "@react-native-async-storage/async-storage";

const NicknameSettingScreen = () => {
  const {control, handleSubmit} = useForm();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const onSendPressed = async data => {
    if (loading) return;
    setLoading(true);

    try {
      AsyncStorage.setItem('Data_nickname', data.nickname);
      navigation.navigate('SchoolSetting');
    } catch (e) {
      console.log("error", e);
    }
    
    setLoading(false);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>設定暱稱</Text>
        <Text style={styles.subtitle}>請輸入您的名字或暱稱</Text>
        <CustomInput
          name="nickname"
          control={control}
          placeholder="請輸入"
          rules={{
            required: '請輸入您的暱稱',
          }}
          type='nickname'
        />
        <Text></Text>
        <CustomButton 
          text={loading ? "載入中.." : "確認" } 
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
    marginBottom: '67%',
  },
  subtitle: {
    fontSize: 16.5,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
});

export default NicknameSettingScreen;
