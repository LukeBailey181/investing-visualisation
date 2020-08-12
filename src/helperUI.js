import React, { useState } from 'react';
import { Button, Text, View, TouchableOpacity, Dimensions, Image, LayoutAnimation } from 'react-native';
import styles, { colors } from "./styles.js";
import { LineChart } from "react-native-chart-kit";
import { useNavigation, useBackButton } from '@react-navigation/native';
import Icon from "react-native-vector-icons/MaterialIcons";
import { FlatList } from 'react-native-gesture-handler';


export const Images = {
    trees: require("../assets/trees.png"),
    tree: require("../assets/new_tree.png"),
    chart: require("../assets/new_chart.png"),
    house: require("../assets/home.png"),
    plus: require("../assets/plus.png")
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
        } else {
            props.onPress()
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

export function Accordian (props) {

    const [data, setData] = useState(props.data);
    const [expanded, setExpanded] = useState(false);

    const Expand = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExpanded(!expanded)
    }

    return(
        <View>
            <TouchableOpacity style={styles.row} onPress={()=>Expand()}>
                <Text>{props.title}</Text>
                <Icon name={expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} color={colors.secondaryColor} />
            </TouchableOpacity>
            <View style={styles.Hr}/>
            {
                expanded &&
                <View style={styles.child}>
                    <Text>{props.data}</Text>    
                </View>
            }
       </View>
    )
}

export function AccordianList (props) {

    return(
        <FlatList
            data = {props.data}
            renderItem = {({ item }) => {
                return (<Accordian 
                    data={item.data}
                    title={item.title}
                />)
            }}
            keyExtractor = {item => item.id}
        />
    )
}