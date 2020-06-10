import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import styles from "./styles.js";


export default function Forrest_Page({ navigation }) {

    return (
        <View style={styles.container}>
            <Text>Forrest Page</Text>
            <Button 
                title="Go to Charts"
                onPress={() => navigation.navigate("Charts")}
            />
            <Button 
                title="Go to Tree Store Page"
                onPress={() => navigation.navigate("Tree Store")}
            />
        </View>
    )
}