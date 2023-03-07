import React, { useEffect } from "react";
import { useState } from "react";
import { View, Text, SafeAreaView, Dimensions, Pressable, Button, ActivityIndicator } from "react-native";
import DemoData from "../Demo/DemoData";
import { useStateContext } from "../ContextProvider/ContextProvider";
import * as Progress from 'react-native-progress';
import { StatusBar } from 'expo-status-bar';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import MapViewDirections from 'react-native-maps-directions';
import axios from "axios";
import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/Ionicons';
import Geocoder from 'react-native-geocoding';
import { API_KEY } from "@env"


Geocoder.init(API_KEY);

export default function MapPage({ navigation }) {

    const { platform } = useStateContext();
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const { currComponent, currentMapType } = useStateContext();
    const [loading, setLoading] = useState(true);
    const [destinationCoord, setDestinationCoord] = useState({});
    const [currentViewCoord, setCurrentViewCoord] = useState({});
    const [currentReq, setcurrentReq] = useState(false);
    const [name, setName] = useState("");
    const [id, setId] = useState("");

    const { theme, styles } = useStateContext();

    useEffect(() => {
        const destinations = [
            'Indian institute of information technology Vadodara'
        ];


        const fetchCoordinates = async () => {
            const coords = await Promise.all(destinations.map(async (destination) => {
                const response = await Geocoder.from(destination);
                const { lat, lng } = response.results[0].geometry.location;
                setDestinationCoord({ latitude: lat, longitude: lng });
            }));

        };

        fetchCoordinates();
    }, []);

    const [location, setLocation] = useState(null);
    const [locationDirection, setLocationDirection] = useState(null);


    const [region, setRegion] = useState(null);
    const [distance, setDistance] = useState(null);
    const [directions, setDirections] = useState(null);

    useEffect(() => {
        (async () => {

            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation([location.coords.latitude, location.coords.longitude]);
            setLocationDirection({ latitude: location.coords.latitude, longitude: location.coords.longitude })
            setRegion(location);
        })();
    }, []);

    useEffect(() => {
        async function polyCoord() {
            const res = await axios({
                method: 'get',
                url: 'https://maps.googleapis.com/maps/api/directions/json?destination=Ongole&origin=Chirala&key=AIzaSyCtyQsgX-IEXJ8-UAWHlkow8J6cYT1KaVE'
            })
            const data = res.data.routes[0].legs[0].steps;
            var listIs = [];
            var distance = [];
            var direction = [];
            for (let i = 0; i < data.length; i++) {
                listIs.push({ latitude: data[i].end_location.lat, longitude: data[i].end_location.lng });
                distance.push(data[i].distance.text);
                direction.push(data[i].html_instructions);
            }
            setDistance(distance);
            setDirections(direction);
        }
        polyCoord();
    }, []);


    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 10000);
    }, []);


    const mapStyleDark = [{
        elementType: 'geometry', stylers: [{ color: '#242f3e' }],
    },
    {
        elementType: 'labels.text.stroke',
        stylers: [{ color: '#242f3e' }],
    },
    {
        elementType: 'labels.text.fill',
        stylers: [{ color: '#746855' }],
    },
    {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#d59563' }],
    },
    {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#d59563' }],
    },
    {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{ color: '#263c3f' }],
    },
    {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#6b9a76' }],
    },
    {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{ color: '#38414e' }],
    },
    {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#212a37' }],
    },
    {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#9ca5b3' }],
    },
    {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{ color: '#746855' }],
    },
    {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#1f2835' }],
    },
    {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#f3d19c' }],
    },
    {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{ color: '#2f3948' }],
    },
    {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#d59563' }],
    },
    {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{ color: '#d4f1f9' }],
    },
    {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#515c6d' }],
    },
    {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{ color: '#17263c' }],
    },
    ];



    return (
        <View style={styles.mapView}>

            <SafeAreaView>

                <View style={{ position: 'absolute', left: 30, top: 30 }}>
                    <Progress.Bar progress={0} width={windowWidth - 50} height={15} color="#8cc63f" />
                </View>

                {loading === false && <View>
                    <MapView initialRegion={locationDirection}
                        provider="google"
                        showsUserLocation={true}
                        toolbarEnabled
                        loadingEnabled
                        userInterfaceStyle="dark"
                        region={region}
                        onRegionChange={platform === "android" ? null : null}
                        showsTraffic={true}
                        showsCompass={true}
                        showsMyLocationButton={true}
                        customMapStyle={theme === "dark" ? mapStyleDark : null}
                        followsUserLocation={true}
                        mapType={currentMapType}
                        onPoiClick={(e) => {
                            setcurrentReq(true);
                            const { coordinate, placeId, name } = e.nativeEvent;
                            setName(name);
                            setId(placeId);
                            setCurrentViewCoord(coordinate);
                        }}
                        style={{ width: "100%", height: windowHeight - 75, top: platform === "android" ? 48 : 16 }} >
                        <MapViewDirections
                            origin={locationDirection}
                            destination='Indian institute of information technology Vadodara'
                            apikey={API_KEY}
                            strokeColor="#0000FF"
                            optimizeWaypoints={true}
                            strokeWidth={5}
                            zIndex={100}
                        />
                        <Marker coordinate={locationDirection}
                            pinColor={"green"}
                            title={"Start 🚲"}
                            description={"This is where you have started."} />
                        <Marker coordinate={destinationCoord}
                            pinColor={"red"}
                            title={"End ✅"}
                            description={"This is where you need to reach."} />
                        {currentReq && <Marker coordinate={currentViewCoord}
                            pinColor={"blue"}
                            title={name}
                            description={"Place Id is " + id} />}
                    </MapView></View>}

                {loading === true && <View style={{ position: 'absolute', top: windowHeight / 2, left: windowWidth / 2 }}><ActivityIndicator /></View>}


                <View style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', position: 'absolute', top: platform === "android" ? windowHeight - 40 : windowHeight - 80, alignItems: 'center', left: (windowWidth - 150) / 2 }}>
                    <View >
                        <Pressable onPress={() => navigation.navigate("Home")}>
                            <Icon name="home" size={30} color="green" />
                        </Pressable>
                    </View>
                    <View style={{ marginLeft: 30 }}>
                        <Pressable>
                            <Icon1 name="exit" size={30} color="red" />
                        </Pressable>
                    </View>
                    <View style={{ marginLeft: 30 }}>
                        <Pressable onPress={() => navigation.navigate(currComponent)}>
                            <Icon1 name="arrow-back-circle-sharp" size={30} color="orange" />
                        </Pressable>
                    </View>
                </View>

            </SafeAreaView>


            <StatusBar style={theme === "dark" ? "light" : "black"} />

        </View>
    )

}
