import { View, Text, Image, TouchableHighlight, Linking, SafeAreaView, ScrollView, Pressable } from 'react-native'
import React from 'react';
import MapPage from './MapPage.js';
import { useState } from 'react';
import { Button, Icon } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';
import Navigation from './NavigationBar.js';
import { useEffect } from 'react';
import { Dimensions } from 'react-native';
import WebView from "react-native-webview";
import { Overlay } from 'react-native-elements';


import DemoData from '../Demo/DemoData.js';
import { useStateContext } from '../ContextProvider/ContextProvider.js';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
import SingleCityView from './SingleCityView.js';

export default function MainPage({ navigation }) {

    const { setCurrComponent, userName, setMapProvider } = useStateContext();

    const windowHeight = Dimensions.get('window').height;

    const { styles, theme } = useStateContext();

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('@mapProvider')
            if (value !== null) {
                setMapProvider(value);
                navigation.navigate("Home");
            }
        } catch (e) {
            // error reading value
        }
    }

    useEffect(() => {
        setCurrComponent("Home");
        getData();
    }, []);




    const internalView = {
        top: 25,
        left: -25,
    };

    function gestureMotion(direction) {
        if (direction === "SWIPE_LEFT") {
            navigation.navigate("User");
        }

    }



    return (
        <View style={{ flex: 1, backgroundColor: theme === "dark" ? "black" : "white" }}>
            <ScrollView>
                <GestureRecognizer
                    onSwipe={(direction, state) => { gestureMotion(direction) }}
                >
                    <View style={styles.container}>
                        <TouchableHighlight onPress={() => (Linking.openURL("https://www.mealvillage.com/"))}>
                            <Image style={styles.villageIcon} source={require('../assets/MealVillageIcon.png')} />
                        </TouchableHighlight>
                        <Text style={styles.setFontSize1}>Welcome {userName}.</Text>
                        <View style={styles.orderDetails}>
                            <View style={[styles.singleBox, styles.box1Main]}>
                                <Text style={styles.singleOrderDescribe}>Orders Recevied</Text>
                                <Text style={styles.numberText}>X</Text>
                            </View>
                            <View style={[styles.singleBox, styles.box2Main]}>
                                <Text style={styles.singleOrderDescribe}>Orders Delivered</Text>
                                <Text style={styles.numberText}>Y</Text>
                            </View>
                            <View style={[styles.singleBox, styles.box3Main]}>
                                <Text style={styles.singleOrderDescribe}>Orders to Deliver </Text>
                                <Text style={styles.numberText}>Z</Text>
                            </View>
                        </View>

                        <Text style={styles.setFontSize1}>Route Map</Text>
                        <View style={styles.routeMap}>
                            <View style={{ ...styles.currentPosition, ...internalView }}></View>

                            {DemoData.map((city) => {

                                return (
                                    <View key={city.key}>
                                        <SingleCityView city={city} />
                                    </View>
                                )
                            })}
                        </View>
                        <StatusBar style={theme === "dark" ? "light" : "black"} />
                    </View>
                </GestureRecognizer>
            </ScrollView >
            <Navigation navigation={navigation} componentProps="Home" />
        </View>
    )
}
