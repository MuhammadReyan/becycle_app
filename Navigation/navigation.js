import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import SignUpScreen from "../screens/SignUpScreen";
import Home from "../screens/Home";
import SplashScreen from "../screens/SplashScreen";
import Comprar from "../Components/Comprar/Comprar";


export default function RootNavigation() {
    const Stack = createNativeStackNavigator()


    const screenOptions = {
        headerShown: false
    }


    return (

            <NavigationContainer>
                <Stack.Navigator initialRouteName="SplashScreen" screenOptions={screenOptions}>
                    <Stack.Screen name="SplashScreen" component={SplashScreen} />
                    <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Comprar" component={Comprar} />
                </Stack.Navigator>
            </NavigationContainer>
        
    )
}

