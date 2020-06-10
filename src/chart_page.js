import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import styles from "./styles.js";


export default function Chart_Page({ navigation }) {

    return (
        <View style={styles.container}>
            <Text>Chart Page</Text>
            <Button 
                title="Go to forrest page"
                onPress={() => navigation.navigate("Home")}
            />
        </View>
    )
}