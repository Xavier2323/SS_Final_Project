import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Constants from 'expo-constants';
import SportPage from './SportPage';
import PostDetail from './PostDetail';
import JoinSuccess from './JoinSuccess';
import Home from './Home';

const Stack = createStackNavigator();

const CategoryScreen = () => {
    const navigation = useNavigation();
    const handleImagePress = (destination, data) => {
        navigation.navigate(destination, { data });
    };


  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="SportPage" component={SportPage} />
        <Stack.Screen name="PostDetail" component={PostDetail} />
        <Stack.Screen name="JoinSuccess" component={JoinSuccess} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default CategoryScreen;



