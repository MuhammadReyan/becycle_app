import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import SignUpScreen from "../screens/SignUpScreen";
import Home from "../screens/Home";
import SplashScreen from "../screens/SplashScreen";
import Comprar from "../Components/Comprar/Comprar";
import SecondSplashScreen from "../screens/SecondSplashScreen";
import ProfileScreen from "../Components/Profile/ProfileScreen";
import ChangePasswordScreen from "../Components/Profile/ChangePasswordScreen";


const Stack = createNativeStackNavigator()
export default function RootNavigation() {


    const screenOptions = {
        headerShown: false
    }


    return (

            <NavigationContainer>
                <Stack.Navigator initialRouteName="SplashScreen" screenOptions={screenOptions}>
                    {/* <Stack.Screen name="SplashScreen" component={SplashScreen} />
                    <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
                 <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Comprar" component={Comprar} />  */}
                    {/* <Stack.Screen name="SecondSplashScreen" component={SecondSplashScreen}/> */}
                    <Stack.Screen name="ProfileScreen" component={ProfileScreen}/>
                    {/* <Stack.Screen name="ChangePasswordScreen" component={ChangePasswordScreen}/> */}
                </Stack.Navigator>
            </NavigationContainer>
        
    )
}

