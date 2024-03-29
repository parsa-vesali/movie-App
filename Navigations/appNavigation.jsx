import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Screens/HomeScreen";
import MovieScreen from "../Screens/MovieScreen";
import PersonScreen from "../Screens/PersonScreen";
import SearchScreen from "../Screens/SearchScreen";
const Stack = createNativeStackNavigator();


const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Movie" component={MovieScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Person" component={PersonScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Search" component={SearchScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
