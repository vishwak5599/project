import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Pressable,
} from "react-native";
import { useStateContext } from "../ContextProvider/ContextProvider";
import Lottie from 'lottie-react-native';
import { useEffect } from "react";



export default function LoginPage({ navigation }) {

    const { theme, userName, setUserName, password, setPassword } = useStateContext();

    const [error, setError] = useState(false);

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('@user')
            if (value !== null) {
                setUserName(value);
                navigation.navigate("Home");
            }
        } catch (e) {
            // error reading value
        }
    }



    useEffect(() => {
        getData();
    }, [])

    function submitClicked() {
        if (userName === "" || password === "")
            setError(true);

        else {
            const storeData = async (value) => {
                try {
                    await AsyncStorage.setItem('@user', value)
                } catch (e) {
                    // saving error
                }
            }
            storeData(userName);
            navigation.navigate("Home");
        }

    }

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: theme === "dark" ? "white" : "black" }}>
            <Lottie source={require('../assets/food.json')} autoPlay loop style={{ position: "absolute", height: 200, top: 25 }} />
            <Image style={styles.image} source={require('../assets/MealVillageIcon.png')} />
            <StatusBar style="auto" />
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="User Name"
                    placeholderTextColor="#003f5c"
                    onChangeText={(userName) => { setUserName(userName), setError(false) }}
                    value={userName}
                    underlineColorAndroid="transparent"
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Password"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(password) => { setPassword(password), setError(false) }}
                    value={password}
                />
            </View>
            {error && <Text style={{ color: "red" }}>All fields are mandatory *</Text>}
            <TouchableOpacity style={styles.loginBtn}>
                <Pressable onPress={submitClicked}>
                    <Text style={styles.loginText}>Login</Text>
                </Pressable>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    image: {
        marginTop: 30,
        marginBottom: 40,
        width: 200,
        height: 60,
    },
    inputView: {
        backgroundColor: "#D1F58F",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 10,
    },
    forgot_button: {
        height: 30,
        marginBottom: 30,
    },
    loginBtn: {
        width: "60%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#63d13e",
    },
});