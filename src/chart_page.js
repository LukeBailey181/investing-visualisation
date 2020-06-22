import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { StockLineChart } from "./helperUI"
import styles from "./styles.js";



export default function Chart_Page({ navigation }) {

    return (
        <View style={styles.container}>
            <Text>Chart Page</Text>
            <View>
                <StockLineChart 
                data={[1,2,1,5]}
                labels={["1","2","3","4"]}
                />
            </View>
            <Button 
                title="Go to home page"
                onPress={() => navigation.navigate("Home")}
            />
        </View>
    )
}