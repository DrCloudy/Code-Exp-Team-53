import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ActivitiesScreen from "./screens/ActivitiesScreen.js";
import UpdatesScreen from "./screens/UpdatesScreen.js";
import RulesScreen from "./screens/RulesScreen.js";
import settingsStack from "./screens/settings/settingsStack.js";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { MaterialIcons, Octicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let fontFamily;

            //Set the icon based on which route it is (name of the tab)
            if (route.name === "Updates") {
              fontFamily = "FontAwesome"
              iconName = "newspaper-o";
            } else if (route.name === "Activities") {
              fontFamily = "MaterialIcons"
              iconName = "local-activity";
            } else if (route.name === "Rules") {
              fontFamily = "MaterialIcons"
              iconName = "rule";
            } else if (route.name === "Settings") {
              fontFamily = "Octicons"
              iconName = "gear";
            }

            // You can return any component that you like here!
            if (fontFamily ==="FontAwesome") {
              return <FontAwesome name={iconName} size={size} color={color} />;
            } else if (fontFamily ==="MaterialIcons") {
              return <MaterialIcons name={iconName} size={size} color={color} />;
            } else if (fontFamily ==="Octicons") {
              return <Octicons name={iconName} size={size} color={color} />;
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Updates" component={UpdatesScreen} />
        <Tab.Screen name="Activities" component={ActivitiesScreen} />
        <Tab.Screen name="Rules" component={RulesScreen} />
        <Tab.Screen name="Settings" component={settingsStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,255,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
});
