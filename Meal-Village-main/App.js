import MainPage from './Views/MainPage.js';
import MapPage from './Views/MapPage.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ContextProvider } from './ContextProvider/ContextProvider.js';
import SettingsPage from './Views/SettingsPage.js';
import Navigation from './Views/NavigationBar.js';
import LoginPage from './Views/LoginPage.js';
import UserPage from './Views/UserPage.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useStateContext } from './ContextProvider/ContextProvider.js';

const Stack = createStackNavigator();
export default function App() {

  return (
    <ContextProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" options={{ headerShown: false }} component={LoginPage} />
          <Stack.Screen name="Home" options={{ headerShown: false }} component={MainPage} />
          <Stack.Screen name="Map" options={{ headerShown: false }} component={MapPage} />
          <Stack.Screen name="User" options={{ headerShown: false }} component={UserPage} />
          <Stack.Screen name="Settings" options={{ headerShown: false }} component={SettingsPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </ContextProvider>
  );
}
