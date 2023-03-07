import React from "react";
import { View, Pressable, StyleSheet, Text, Dimensions } from "react-native";
import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/Feather';
import Icon4 from 'react-native-vector-icons/AntDesign';
import { useStateContext } from "../ContextProvider/ContextProvider.js";
import { useState } from "react";
import { createOpenLink, createMapLink } from 'react-native-open-maps';


export default function Navigation({ navigation, componentProps }) {

    const { styles, theme, setCurrComponent, mapProvider, setMapProvider } = useStateContext();


    const color = theme === "dark" ? "black" : "white";
    const [mapClicked, setMapClicked] = useState(false);
    const windowWidth = Dimensions.get('window').width;



    function chooseMap() {
        if (mapProvider === "none") {
            setMapClicked(true);
        }
        else {
            const newYork = createOpenLink({ provider: mapProvider, end: 'Indian institute of information techonology Vadodara' })
            newYork();
        }
    }

    function setGoogle() {
        setMapProvider("google");
        const newYork = createOpenLink({ provider: "google", end: 'Indian institute of information techonology Vadodara' })
        newYork();
        setMapClicked(false);
        const storeData = async (value) => {
            try {
                await AsyncStorage.setItem('@mapProvider', value)
            } catch (e) {
                // saving error
            }
        }
        storeData("google");
    }

    function setApple() {
        setMapProvider("apple");
        const newYork = createOpenLink({ provider: "apple", end: 'Indian institute of information techonology Vadodara' })
        newYork();
        setMapClicked(false);
        const storeData = async (value) => {
            try {
                await AsyncStorage.setItem('@mapProvider', value)
            } catch (e) {
                // saving error
            }
        }
        storeData("apple");
    }

    return (
        <View style={styles.navBar}>
            <View style={{ top: 12 }}>
                <Pressable onPress={() => { navigation.navigate("Home"), setCurrComponent("Home") }}>
                    <Icon name="home" size={30} color={componentProps === "Home" ? "#8cc63f" : color} />
                </Pressable>
            </View>
            <View style={{ top: 12 }}>
                <Pressable onPress={chooseMap}>
                    <Icon1 name="map-marker" size={30} color={theme === "dark" ? "black" : "white"} />
                </Pressable>
            </View>
            <View style={{ top: 12 }}>
                <Pressable onPress={() => { navigation.navigate("User"), setCurrComponent("User") }}>
                    <Icon2 name="account" size={30} color={componentProps === "User" ? "#8cc63f" : color} />
                </Pressable>
            </View>
            <View style={{ top: 12 }}>
                <Pressable onPress={() => { navigation.navigate("Settings"), setCurrComponent("Settings") }}>
                    <Icon3 name="settings" size={30} color={componentProps === "Settings" ? "#8cc63f" : color} />
                </Pressable>
            </View>
            {mapClicked &&

                <View style={{ position: "absolute", height: 150, bottom: 0, backgroundColor: theme === "dark" ? "white" : "black", width: "100%", left: 0 }}>
                    <Text style={{ fontSize: 20, left: 10, top: 10, color: theme === "dark" ? "black" : "white" }}>Please choose provider of maps.</Text>

                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", top: 25 }}>
                        <View>
                            <Pressable onPress={setGoogle}>
                                <Icon4 name="google" size={50} color="#8cc63f" />
                            </Pressable>
                        </View>
                        <Text style={{ fontSize: 50, top: -10, color: theme === "dark" ? "black" : "white" }}>|</Text>
                        <View>
                            <Pressable onPress={setApple}>
                                <Icon4 name="apple1" size={50} color="#8cc63f" />
                            </Pressable>
                        </View>

                    </View>
                    <Pressable onPress={() => setMapClicked(false)}>
                        <Text style={{ fontSize: 25, top: -80, left: windowWidth - 30, color: "red" }}>×</Text>
                    </Pressable>
                </View>
            }
        </View>
    )
}