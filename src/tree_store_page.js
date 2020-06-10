import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import styles from "./styles.js";


export default function TreeStorePage({ navigation }) {

    return (
        <View style={styles.container}>
            <Text>TreeStorePage</Text>
            <Button 
                title="Go to forrest page"
                onPress={() => navigation.navigate("Home")}
            />
        </View>
    )
}