import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useStateContext } from "../ContextProvider/ContextProvider";
import { useState } from "react";


export default function SingleCityView({ city }) {

    const { styles, theme } = useStateContext();

    const [pressed, setPressed] = useState(false);

    const internalStyle = {
        marginBottom: pressed ? -25 : 0,
    };

    return (
        < View>
            <Text  >
                <View>
                    {city.key !== 0 && <View style={{ borderLeftWidth: 1, borderColor: theme === "dark" ? 'white' : 'black', height: 75, right: 20 }} />}
                    <View style={{ marginLeft: -25, marginRight: 10, width: 12, height: 12, borderRadius: 12 / 2, backgroundColor: city.color }} />

                    <Text numberOfLines={pressed === false ? 1 : null} style={{ ...styles.cityView, ...internalStyle }} onPress={() => {
                        if (pressed === false) setPressed(true);
                        else setPressed(false);
                    }}>{city.city}</Text>
                </View>
            </Text >

        </View >
    )
}