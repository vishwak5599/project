import React, { useEffect } from "react";
import { View, Text, SafeAreaView, TextInput, TouchableOpacity } from "react-native";
import { useStateContext } from "../ContextProvider/ContextProvider";
import Navigation from "./NavigationBar";
import Lottie from "lottie-react-native";
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
import AsyncStorage from "@react-native-async-storage/async-storage";



export default function UserPage({ navigation }) {

    const { styles, setCurrComponent, userName, theme, password, setUserName, setPassword, setMapProvider } = useStateContext();

    useEffect(() => {
        setCurrComponent("User");
    }, [])

    function gestureMotion(direction) {
        if (direction === "SWIPE_RIGHT") {
            navigation.navigate("Home");
        }
        else if (direction === "SWIPE_LEFT") {
            navigation.navigate("Settings");
        }
    }

    function logoutFunction() {
        setUserName("");
        setPassword("");
        navigation.navigate("Login");
    }

    async function clearCache() {
        await AsyncStorage.removeItem("@mapProvider");
        setMapProvider("none");
    }


    return (

        <View style={styles.userView}>
            <SafeAreaView>

                <Lottie source={require('../assets/add-user.json')} autoPlay loop style={{ position: "absolute", height: 200, top: 25, left: "10%" }} />
                <View style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: 250 }}>
                    <View style={{ display: "flex", flexDirection: "row" }}>
                        <Text style={{ color: theme === "dark" ? "white" : "black", fontSize: 20, marginRight: 20, top: 10 }}>User Name</Text>
                        <TextInput value={userName} editable="false" style={{ color: theme === "dark" ? "black" : "white", fontSize: 20, backgroundColor: "#8cc63f", width: 150, textAlign: "center", height: 50, borderRadius: 50 }} />
                    </View>
                    <View style={{ display: "flex", marginTop: 30, flexDirection: "row", flexWrap: "wrap", justifyContent: "space-evenly" }}>

                        <TextInput textAlign="center" editable="false" style={{ backgroundColor: "#3B71CA", widht: 150, padding: 25, height: 50, color: "white", fontSize: 15, borderRadius: 5, marginTop: 25 }}>Change Password</TextInput>

                        <TextInput textAlign="center" editable="false" onTouchStart={clearCache} style={{ backgroundColor: "#E4A11B", width: 150, height: 50, color: "white", fontSize: 15, borderRadius: 5, marginTop: 25 }}>Clear Cache</TextInput>


                        <TextInput textAlign="center" editable="false" onTouchStart={logoutFunction} style={{ backgroundColor: "#DC4C64", width: 150, height: 50, color: "white", fontSize: 15, borderRadius: 5, marginTop: 25 }}>Logout</TextInput>
                    </View>
                </View>

            </SafeAreaView>
            <GestureRecognizer style={{ flex: 1 }} onSwipe={(direction, state) => { gestureMotion(direction) }}></GestureRecognizer>
            <Navigation navigation={navigation} componentProps="User" />
        </View>
    )
}