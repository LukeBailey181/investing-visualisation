import React from 'react';
import { Button, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import styles from "./styles.js";
import { LineChart } from "react-native-chart-kit";


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

    return (
        <View>
            <TouchableOpacity>
                <Text>Button Time</Text>
            </TouchableOpacity>
        </View>
    )
}