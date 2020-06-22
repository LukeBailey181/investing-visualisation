import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './src/home_page';
import Chart_Page from './src/chart_page';
import TreeStorePage from './src/tree_store_page';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  ForestPage  from './src/forest_page';

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomePage} />
            <Stack.Screen name="Charts" component={Chart_Page} />
            <Stack.Screen name="Tree Store" component={TreeStorePage} />
            <Stack.Screen name="Forest Page" component={ForestPage} />
        </Stack.Navigator>
     </NavigationContainer>
  );
}
