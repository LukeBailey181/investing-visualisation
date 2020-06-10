import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Forrest_Page from './src/forrest_page';
import Chart_Page from './src/chart_page';
import TreeStorePage from './src/tree_store_page';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Forrest_Page} />
            <Stack.Screen name="Charts" component={Chart_Page} />
            <Stack.Screen name="Tree Store" component={TreeStorePage} />
        </Stack.Navigator>
     </NavigationContainer>
  );
}
