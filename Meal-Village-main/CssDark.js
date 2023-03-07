import { StyleSheet, Text, View, Platform } from 'react-native';
import { Dimensions } from 'react-native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const stylesDark = StyleSheet.create({
    mainContainer: {
        backgroundColor: 'black',
        flex: 1,
    },
    container: {
        paddingTop: 50,
        paddingBottom: 50,
        alignItems: 'center',
        marginBottom: 60,
        flex: 1,
        backgroundColor: 'black',
    },

    setFontSize1: {
        paddingTop: 15,
        fontSize: 30,
        marginBottom: 15,
        color: 'white',
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
        color: 'white',
    },
    singleOrderDescribe: {
        padding: 25,
        paddingBottom: 10,
        paddingTop: 10,
        fontSize: 18,
        color: 'white',
    },
    singleBox: {
        alignItems: 'center',
        borderRadius: 25,
        borderColor: 'white',
        borderWidth: 2,
        margin: 5,
    },
    numberText: {
        fontSize: 22,
        paddingBottom: 10,
        color: 'white'
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
        color: 'white',
        width: windowWidth - 100,
        left: 20,
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
        backgroundColor: 'black',
        flex: 1,
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
        backgroundColor: 'white',
    },
    settingMain: {
        flex: 1,
        backgroundColor: "black",
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
        backgroundColor: "black",
        flex: 1,
    }
});


export default stylesDark;