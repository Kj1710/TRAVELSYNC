import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Animation from '../screens/Animation';
import Destination from '../screens/Destination';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Animation"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Animation" component={Animation} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Destination" component={Destination} />
    </Stack.Navigator>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});