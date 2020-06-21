import React from 'react';
import { Button, Text, View, TouchableOpacity, Dimensions, Image } from 'react-native';
import styles, { colors } from "./styles.js";
import { LineChart } from "react-native-chart-kit";
import { useNavigation, useBackButton } from '@react-navigation/native';


export const Images = {
    trees: require("../assets/trees.png"),
    tree: require("../assets/new_tree.png"),
    chart: require("../assets/new_chart.png")
}

export function StockLineChart(props) {

    //props.data is a list of y coordinates for the data provided by props.labeks
    //props.labels is alist of string labels for each props.data element
    //length of props.data = length of props.labels


    //TODO background color is not working as intended
    return (
        <View>
            <LineChart
                data={{
                labels: props.labels,
                datasets: [
                    {
                    data: props.data
                    }
                ]
                }}
                width={defaultValue(props.width, Dimensions.get("window").width)} 
                height={defaultValue(props.hieght,200)}
                yAxisLabel= {defaultValue(props.yAxisLabel, "")}
                yAxisSuffix= {defaultValue(props.yAxisSuffix, "$")}
                yAxisInterval={1} // optional, defaultValues to 1
                chartConfig={{
                backgroundGradientFrom: (defaultValue(props.backgroundGradientFrom, "#fb8c00")), 
                backgroundGradientTo: (defaultValue(props.backgroundGradientTo, "#ffa726")), 
                decimalPlaces: 1, // optional, default to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                    borderRadius: 16
                },
                propsForDots: {
                    r: "6",
                    strokeWidth: "2",
                    stroke: (defaultValue(props.dotColor, "#ffa726"))
                }
                }}
                bezier 
                style={{
                marginVertical: 8,
                borderRadius: 16
                }}
            />
        </View>
    );
}

function defaultValue(possibleInput, defaultValueValue) {
    return (possibleInput ? possibleInput : defaultValueValue);
}

export function HomeScreenButton(props) {

    const navigation = useNavigation();

    const navigate = () => {
        if (props.nav) {
            navigation.navigate(props.route)
        }
    }

    return (
        <View>
            <TouchableOpacity 
            style={[styles.homeScreenButton, {backgroundColor: '#FFFF', borderColor:props.borderColor}]}
            onPress={navigate}
            >
                <Image
                style={{height:props.height,width:props.width}}
                source={props.image}
                >
                </Image>
            </TouchableOpacity>
        </View>
    )
}