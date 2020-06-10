import {StyleSheet, Dimensions} from 'react-native';

export const width = Dimensions.get('window').width; //width of screen
export const height = Dimensions.get('window').height; //height of screen

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "transparent",
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: "#fc9003"
    }
})

