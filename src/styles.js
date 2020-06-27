import {StyleSheet, Dimensions} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export const width = Dimensions.get('window').width; //width of screen
export const height = Dimensions.get('window').height; //height of screen


//colors can be changes, from here, example Jewel tone colors used for testing
export const colors = {
    primaryColor: '#05878a', //lighter blue
    secondaryColor: '#dd9933', //orange 
    tertiaryColor: '#5a175d' //plum
}

export default StyleSheet.create({
    topContainer: {
        flex:1,
        paddingTop: 100,
        height: height,
        flexDirection: "column",
    },
    container: {
        flex: 1,
        flexDirection:'column',
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
        borderRadius: 50,
        width:85,
        height:85,
        borderWidth: 2
    },
    hr: {
        height:3,
        color: colors.secondaryColor,
        width: width
    },
    row: { //TODO change this styling
        flexDirection: 'row',
        justifyContent:'space-between',
        height:56,
        paddingLeft:25,
        paddingRight:18,
        alignItems:'center',
        backgroundColor: Colors.CGRAY,
    },
    title:{ //TODO change this styling
        fontSize: 14,
        fontWeight:'bold',
        color: Colors.DARKGRAY,
    },
    child:{ //TODO change this styling
        backgroundColor: Colors.LIGHTGRAY,
        padding:16,
    }
})

