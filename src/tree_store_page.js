import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import styles from "./styles.js";
import {width, height, colors} from "./styles.js"
import { HomeScreen, HomeScreenButton, Images } from "./helperUI";
import AsyncStorage from '@react-native-community/async-storage';


export default function TreeStorePage({ navigation }) {

    return (
        <View style={[styles.container, {width:width, height:height}]}>
            <View style={{flex:4, width: width}}>
                <View style={{justifyContent:"center", alignItems:"center"}}>
                    <Text>Tree store Page</Text>
                </View>
                <Button 
                    title="Go to home page"
                    onPress={() => navigation.navigate("Home")}
                />
                <Button 
                    title="Log stocks from stoage"
                    onPress={async () => {
                        const data = await getData("stocks")
                        console.log(await data.example)
                    }}
                />
            </View>
            <View style={{ flexDirection:'row', flex: 1, justifyContent:"center", width:width, alignItems:"center"}}>
                <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
                    <HomeScreenButton
                    image={Images.plus}
                    width={50}
                    height={50}
                    nav={false}
                    borderColor={colors.primaryColor}
                    onPress ={() => {
                        storeData({example:"example"})
                    }}
                    />
                </View>
                <View style ={{flex:1, alignItems:"center", justifyContent:"center"}}>
                    <HomeScreenButton
                    image={Images.house}
                    width={40}
                    height={40}
                    nav={true}
                    route={"Home"}
                    borderColor={colors.tertiaryColor}
                    />
                </View>
            </View>
        </View>
    )
}

const storeData = async (data) => {

    const new_data = JSON.stringify(data)

    try {
      await AsyncStorage.setItem('stocks', new_data)
      console.log(new_data)
    } catch (e) {
      console.log(e)
    }
  }

const getData = async (key) => {
    
    try {
       const jsonValue = await AsyncStorage.getItem(key)
       if (jsonValue !== null) {
            return JSON.parse(jsonValue)
       }

    } catch(e) {
        console.log(e)
    }
}


