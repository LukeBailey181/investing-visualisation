import React from 'react';
import { Button, StyleSheet, Text, View, ViewBase } from 'react-native';
import styles from "./styles";
import { colors, width, height } from "./styles";
import { HomeScreen, HomeScreenButton, Images } from "./helperUI";
import { color } from 'react-native-reanimated';


export default function Forrest_Page({ navigation }) {

    return (
        <View style={[styles.container, {width:width, height:height}]}>
            <View style={{flex:4, width: width}}> 
                <View style={{justifyContent:"center", alignItems:"center"}}>
                    <Text>Forrest Page</Text>
                </View>
                <Button 
                    title="Go to Charts"
                    onPress={() => navigation.navigate("Charts")}
                />
                <Button 
                    title="Go to Tree Store Page"
                    onPress={() => navigation.navigate("Tree Store")}
                />
            </View>
            <View style={{ flexDirection:'row', flex: 1, justifyContent:"center", width:width, alignItems:"center"}}>
                <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
                    <HomeScreenButton 
                    image={Images.tree}
                    width={50}
                    height={50}
                    nav={false}
                    borderColor={colors.primaryColor}
                    />
                </View>
                <View stlye ={{flex:1, alignItems:"center", justifyContent:"center"}}>
                    <View style={{justifyContent:"center", alignItems:"center"}}>
                        <HomeScreenButton 
                        image={Images.trees}
                        width={50}
                        height={50}
                        nav={false}
                        borderColor={colors.secondaryColor}
                        />
                    </View>
                </View>
                <View style ={{flex:1, alignItems:"center", justifyContent:"center"}}>
                    <HomeScreenButton 
                    image={Images.chart}
                    width={40}
                    height={40}
                    nav={true}
                    route={"Charts"}
                    borderColor={colors.tertiaryColor}
                    />
                </View>
            </View>
        </View>
    )
}