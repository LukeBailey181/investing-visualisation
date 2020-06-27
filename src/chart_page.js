import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { StockLineChart, Accordian, AccordianList } from "./helperUI"
import styles, { colors } from "./styles.js";



export default function Chart_Page({ navigation }) {

    const DATA = [
        {
            data: "example dropdown",
            title: "example list item",
            id: "234534134"
        },
        {
            data: "example dropdown",
            title: "example list item",
            id: "1"
        },
        {
            data: "example dropdown",
            title: "example list item",
            id: "2"
        },
        {
            data: "example dropdown",
            title: "example list item",
            id: "3"
        },
        {
            data: "example dropdown",
            title: "example list item",
            id: "4"
        },
        {
            data: "example dropdown",
            title: "example list item",
            id: "5"
        },
        {
            data: "example dropdown",
            title: "example list item",
            id: "6"
        }
    ]

    return (
        <View style={styles.topContainer}>
            <View style = {{flex:7}}> 
                <AccordianList
                    data={DATA}
                />
            </View>
            <View style = {{flex:1}}>
                <Button 
                    title="Go to home page"
                    onPress={() => navigation.navigate("Home")}
                />
            </View>
        </View>
    )
}
