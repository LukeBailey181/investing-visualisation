import {StyleSheet, Dimensions} from 'react-native';

export const width = Dimensions.get('window').width; //width of screen
export const height = Dimensions.get('window').height; //height of screen


//colors can be changes, from here, example Jewel tone colors used for testing
export const colors = {
    primaryColor: '#05878a', //lighter blue
    secondaryColor: '#dd9933', //orange 
    tertiaryColor: '#5a175d' //plum
}

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: "#fc9003"
    },
    homeScreenButton: {
        backgroundColor: colors.primaryColor,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50
    },
})

