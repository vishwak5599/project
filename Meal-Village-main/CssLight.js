import { StyleSheet, Text, View, Platform } from 'react-native';
import { Dimensions } from 'react-native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;


const stylesLight = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#99DDCC',
        flex: 1,
    },
    container: {
        paddingTop: 50,
        alignItems: 'center',
        paddingBottom: 50,
        marginBottom: 60,
        flex: 1,
    },

    setFontSize1: {
        paddingTop: 15,
        fontSize: 30,
        marginBottom: 15,
    },

    villageIcon: {
        height: 50,
        width: 150,
        justifyContent: 'center',
    },
    orderDetails: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 0,
        justifyContent: 'center',
        marginBottom: 20,
    },
    singleOrderDescribe: {
        padding: 25,
        paddingBottom: 10,
        paddingTop: 10,
        fontSize: 18,
    },
    singleBox: {
        alignItems: 'center',
        borderRadius: 25,
        borderColor: 'black',
        borderWidth: 2,
        margin: 5,
    },
    numberText: {
        fontSize: 22,
        paddingBottom: 10,
    },
    box1Main: {
        // backgroundColor: '#EDEAEB',
    },
    box2Main: {
        // backgroundColor: '#4BB543',
    },
    box3Main: {
        // backgroundColor: '#FA113D',
    },
    cityView: {
        fontSize: 20,
        marginTop: -20,
        marginLeft: 10,
        width: windowWidth - 100,
    },
    routeMap: {
        display: "flex",
        alignItems: "flex-start",
        alignContent: "flex-start",
        marginTop: 15
    },
    currentPosition: {
        position: 'absolute',
        borderRadius: 12 / 2,
        borderColor: 'blue',
        borderWidth: 6,
        zIndex: 10,
    },
    hoverStyle: {
        color: 'white',
        textDecorationLine: 'underline',
    },
    mapView: {
        paddingTop: 10,
        flex: 1,
    },
    startCity: {
        position: "absolute",
        left: 20,
        top: 10,
    },
    endCity: {
        position: "absolute",
        right: 20,
        top: 10,
    },
    mapText: {
        fontSize: 15,
        borderWidth: 2,
        padding: 5,
        borderRadius: 10 / 2,
    },
    navBar: {
        position: 'absolute',
        top: Platform.OS === "android" ? windowHeight - 25 : windowHeight - 65,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        height: 65,
        backgroundColor: 'black',
    },
    settingMain: {
        flex: 1,
    },
    mapDoneButton: {
        position: 'absolute',
        top: windowHeight - 60,
        width: 75,
        height: 20,
        display: 'flex'
    },
    mapEndButton: {
        position: 'absolute',
        top: windowHeight - 60,
        height: 20,
        marginLeft: 160,
        display: 'flex',
    },
    userView: {
        flex: 1,
        backgroundColor: "white",
    }
});


export default stylesLight;