import { View, Text, Image, TouchableHighlight, Linking, SafeAreaView, ScrollView, Pressable, TextInput } from 'react-native'
import React from 'react';
import MapPage from './MapPage.js';
import { useState } from 'react';
import { Button, Icon } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';
import Navigation from './NavigationBar.js';
import { useEffect } from 'react';
import { useStateContext } from '../ContextProvider/ContextProvider.js';
import Icon4 from 'react-native-vector-icons/FontAwesome';
import { RadioButton } from 'react-native-paper';
import { Appearance, Alert } from 'react-native';
import stylesLight from '../CssLight.js';
import stylesDark from '../CssDark.js';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
import Icon5 from "react-native-vector-icons/AntDesign";


export default function SettingPage({ navigation }) {

    const { setCurrComponent, styles, setTheme, theme, setStyles, platform, mapProvider, setMapProvider } = useStateContext();
    const [radio, setRadio] = useState("Default");

    useEffect(() => {
        setCurrComponent("Settings");
    }, [])


    function handleClickDefault() {
        if (radio !== "Default") {
            Alert.alert(
                'Theme changed',
                'Do you want ' + radio + ' theme to Default.',
                [
                    {
                        text: 'Cancel',
                        style: 'cancel'
                    },
                    {
                        text: 'Change',
                        onPress: () => {
                            setRadio("Default");
                            if (Appearance.getColorScheme() === "light") {
                                setStyles(stylesDark);
                                setTheme("dark");
                            }
                            else {
                                setStyles(stylesLight);
                                setTheme("light");
                            }
                        }
                    }
                ]
            );
        }
    }

    function handleClickLight() {
        if (radio !== "Light") {
            Alert.alert(
                'Theme changed',
                'Do you want ' + radio + ' theme to Light.',
                [
                    {
                        text: 'Cancel',
                        style: 'cancel'
                    },
                    {
                        text: 'Change',
                        onPress: () => {
                            setRadio("Light");
                            setTheme("light");
                            setStyles(stylesLight);
                        }
                    }
                ]
            );
        }

    }

    function handleClickDark() {
        if (radio !== "Dark") {
            Alert.alert(
                'Theme changed',
                'Do you want ' + radio + ' theme to Dark.',
                [
                    {
                        text: 'Cancel',
                        style: 'cancel'
                    },
                    {
                        text: 'Change',
                        onPress: () => {
                            setRadio("Dark");
                            setTheme("dark");
                            setStyles(stylesDark);
                        }
                    }
                ]
            );
        }
    }

    function handleStandard() {
        if (currentMapType !== "standard") {
            Alert.alert(
                'Theme changed',
                'Do you want ' + currentMapType + ' map type to standard map type.',
                [
                    {
                        text: 'Cancel',
                        style: 'cancel'
                    },
                    {
                        text: 'Change',
                        onPress: () => {
                            setCurrentMapType("standard");
                        }
                    }
                ]
            );
        }

    }

    function handleSatellite() {
        if (currentMapType !== "satellite") {
            Alert.alert(
                'Theme changed',
                'Do you want ' + currentMapType + ' map type to satellite map type.',
                [
                    {
                        text: 'Cancel',
                        style: 'cancel'
                    },
                    {
                        text: 'Change',
                        onPress: () => {
                            setCurrentMapType("satellite");
                        }
                    }
                ]
            );
        }

    }

    function handleHybrid() {
        if (currentMapType !== "hybrid") {
            Alert.alert(
                'Theme changed',
                'Do you want ' + currentMapType + ' map type to hybrid map type.',
                [
                    {
                        text: 'Cancel',
                        style: 'cancel'
                    },
                    {
                        text: 'Change',
                        onPress: () => {
                            setCurrentMapType("hybrid");
                        }
                    }
                ]
            );
        }
    }

    function handleTerrain() {
        if (currentMapType !== "terrain") {
            Alert.alert(
                'Theme changed',
                'Do you want ' + currentMapType + ' map type to terrain map type.',
                [
                    {
                        text: 'Cancel',
                        style: 'cancel'
                    },
                    {
                        text: 'Change',
                        onPress: () => {
                            setCurrentMapType("terrain");
                        }
                    }
                ]
            );
        }
    }




    function gestureMotion(direction) {
        if (direction === "SWIPE_RIGHT") {

            navigation.navigate("User");
        }
    }

    return (
        <View style={styles.settingMain}>

            <GestureRecognizer
                onSwipe={(direction, state) => { gestureMotion(direction) }}
                style={{ flex: 1 }}
            >
                <View>
                    <SafeAreaView>
                        <View>
                            <Text style={{ fontSize: 20, marginTop: platform === "ios" ? 12 : 45, marginLeft: 10, color: theme === "dark" ? "white" : "black" }}>Which theme do you need ?</Text>
                            <Pressable onPress={handleClickDefault}>
                                <View style={{ display: 'flex', flexDirection: 'row', marginTop: 10 }}>
                                    <View>
                                        <RadioButton
                                            value='Default'
                                            status={radio === 'Default' ? 'checked' : 'unchecked'}
                                            onPress={handleClickDefault}
                                            color="#8cc63f"
                                        />
                                    </View>
                                    <View>
                                        <Text style={{ marginTop: 5, fontSize: 20, color: theme === "dark" ? "white" : "black" }}>Default</Text>
                                    </View>
                                </View>
                            </Pressable>
                            <Pressable onPress={handleClickDark}>
                                <View style={{ display: 'flex', flexDirection: 'row', marginTop: 10 }}>
                                    <View>
                                        <RadioButton
                                            value='Dark'
                                            status={radio === 'Dark' ? 'checked' : 'unchecked'}
                                            onPress={handleClickDark}
                                            color="#8cc63f"
                                        />
                                    </View>
                                    <View>
                                        <Text style={{ marginTop: 5, fontSize: 20, color: theme === "dark" ? "white" : "black" }}>Dark</Text>
                                    </View>
                                </View>
                            </Pressable>
                            <Pressable onPress={handleClickLight}>
                                <View style={{ display: 'flex', flexDirection: 'row', marginTop: 10 }}>
                                    <View>
                                        <RadioButton
                                            value='Light'
                                            status={radio === 'Light' ? 'checked' : 'unchecked'}
                                            onPress={handleClickLight}
                                            color="#8cc63f"
                                        />
                                    </View>
                                    <View>
                                        <Text style={{ marginTop: 5, fontSize: 20, color: theme === "dark" ? "white" : "black" }}>Light</Text>
                                    </View>
                                </View>
                            </Pressable>

                            {/* <Text style={{ fontSize: 20, marginTop: platform === "ios" ? 20 : 30, marginLeft: 10, color: theme === "dark" ? "white" : "black" }}>Which map style do you need ?</Text>
                            <Pressable onPress={handleStandard}>
                                <View style={{ display: 'flex', flexDirection: 'row', marginTop: 10 }}>
                                    <View>
                                        <RadioButton
                                            value='standard'
                                            status={currentMapType === 'standard' ? 'checked' : 'unchecked'}
                                            onPress={handleStandard}
                                            color="#8cc63f"
                                        />
                                    </View>
                                    <View>
                                        <Text style={{ marginTop: 5, fontSize: 20, color: theme === "dark" ? "white" : "black" }}>Standard</Text>
                                    </View>
                                </View>
                            </Pressable>

                            <Pressable onPress={handleSatellite}>
                                <View style={{ display: 'flex', flexDirection: 'row', marginTop: 10 }}>
                                    <View>
                                        <RadioButton
                                            value='satellite'
                                            status={currentMapType === 'satellite' ? 'checked' : 'unchecked'}
                                            onPress={handleSatellite}
                                            color="#8cc63f"
                                        />
                                    </View>
                                    <View>
                                        <Text style={{ marginTop: 5, fontSize: 20, color: theme === "dark" ? "white" : "black" }}>Satellite</Text>
                                    </View>
                                </View>
                            </Pressable>
                            <Pressable onPress={handleHybrid}>
                                <View style={{ display: 'flex', flexDirection: 'row', marginTop: 10 }}>
                                    <View>
                                        <RadioButton
                                            value='hybrid'
                                            status={currentMapType === 'hybrid' ? 'checked' : 'unchecked'}
                                            onPress={handleHybrid}
                                            color="#8cc63f"
                                        />
                                    </View>
                                    <View>
                                        <Text style={{ marginTop: 5, fontSize: 20, color: theme === "dark" ? "white" : "black" }}>Hybrid</Text>
                                    </View>
                                </View>
                            </Pressable>
                            <Pressable onPress={handleTerrain}>
                                <View style={{ display: 'flex', flexDirection: 'row', marginTop: 10 }}>
                                    <View>
                                        <RadioButton
                                            value='terrain'
                                            status={currentMapType === 'terrain' ? 'checked' : 'unchecked'}
                                            onPress={handleTerrain}
                                            color="#8cc63f"
                                        />
                                    </View>
                                    <View>
                                        <Text style={{ marginTop: 5, fontSize: 20, color: theme === "dark" ? "white" : "black" }}>Terrian</Text>
                                    </View>
                                </View>
                            </Pressable> */}
                        </View>
                        <TextInput style={{ borderColor: theme === "dark" ? "white" : "black", width: "100%", borderTopWidth: 2, marginTop: 10 }}></TextInput>
                        <Text style={{ marginLeft: 10, color: theme === "dark" ? "white" : "black", fontSize: 20 }}>Please choose provider of maps.</Text>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", top: 25 }}>
                            <View>
                                <Pressable onPress={() => setMapProvider("google")}>
                                    <Icon5 name="google" size={50} color={mapProvider === "google" ? "#8cc63f" : theme === "dark" ? "white" : "black"} />
                                </Pressable>
                            </View>
                            <Text style={{ fontSize: 50, top: -10, color: theme === "dark" ? "white" : "black" }}>|</Text>
                            <View>
                                <Pressable onPress={() => setMapProvider("apple")}>
                                    <Icon5 name="apple1" size={50} color={mapProvider === "apple" ? "#8cc63f" : theme === "dark" ? "white" : "black"} />
                                </Pressable>
                            </View>

                        </View>
                    </SafeAreaView>
                </View>


            </GestureRecognizer>
            <Navigation navigation={navigation} componentProps="Settings" />
        </View>
    )
}