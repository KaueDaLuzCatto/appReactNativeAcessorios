import React from 'react'; 

import { createStackNavigator } from '@react-navigation/stack'; 

import { NavigationContainer } from '@react-navigation/native'; 

 

import HomeScreen from './screens/HomeScreen'; 

import AddAcessorioScreen from './screens/AddAcessorioScreen'; 

import EditAcessorioScreen from './screens/EditAcessorioScreen'; 

import ViewAcessorioScreen from './screens/ViewAcessorioScreen'; 

 

const Stack = createStackNavigator(); 

 

function AppNavigator() { 

 return ( 

  <NavigationContainer> 

   <Stack.Navigator initialRouteName="Home"> 

    <Stack.Screen name="Home" component={HomeScreen} /> 

    <Stack.Screen name="AddAcessorio" component={AddAcessorioScreen} /> 

    <Stack.Screen name="EditAcessorio" component={EditAcessorioScreen} /> 

    <Stack.Screen name="ViewAcessorio" component={ViewAcessorioScreen} /> 

   </Stack.Navigator> 

  </NavigationContainer> 

 ); 

} 

 

export default AppNavigator; 