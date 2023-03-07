import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { Platform, Appearance } from "react-native";
import stylesLight from "../CssLight";
import stylesDark from "../CssDark";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {

    const platform = Platform.OS === "ios" ? "ios" : "android";
    const [theme, setTheme] = useState(Appearance.getColorScheme() === "dark" ? "light" : "dark");
    const [currComponent, setCurrComponent] = useState("");
    const [styles, setStyles] = useState(Appearance.getColorScheme() === "dark" ? stylesLight : stylesDark)
    const [currentMapType, setCurrentMapType] = useState("standard");
    const [mapProvider, setMapProvider] = useState("none");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    return (
        <StateContext.Provider value={{
            platform: platform,
            theme: theme,
            setTheme: setTheme,
            currComponent: currComponent,
            setCurrComponent: setCurrComponent,
            styles: styles,
            setStyles: setStyles,
            currentMapType: currentMapType,
            setCurrentMapType: setCurrentMapType,
            mapProvider: mapProvider,
            setMapProvider: setMapProvider,
            userName: userName,
            setUserName: setUserName,
            password: password,
            setPassword: setPassword
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);