import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { StockLineChart } from "./helperUI"
import styles from "./styles.js";



export default function Chart_Page({ navigation }) {

    return (
        <View style={styles.container}>
            <Text>Chart Page</Text>
            <View style={{backgroundColor:"#fb8c00", borderRadius:30}}>
                <StockLineChart 
                data={[1,2,3,4]}
                labels={["1","2","3","4"]}
                />
            </View>
            <Button 
                title="Go to forrest page"
                onPress={() => navigation.navigate("Home")}
            />
        </View>
    )
}