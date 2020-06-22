import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import styles from "./styles.js";


export default function TreeStorePage({ navigation }) {

    return (
        <View style={styles.container}>
            <Text>Tree Store Page</Text>
            <Button 
                title="Go to home page"
                onPress={() => navigation.navigate("Home")}
            />
        </View>
    )
}