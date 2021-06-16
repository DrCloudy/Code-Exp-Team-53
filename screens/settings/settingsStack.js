import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import settingsScreen from "./SettingsScreen";
import notifScreen from "./NotificationsScreen";
import prefScreen from "./PreferencesScreen";
import langScreen from "./LanguagesScreen";
import helpScreen from "./HelpCentreScreen";
import contactScreen from "./ContactUsScreen";

const Stack = createStackNavigator();

export default function settingsStack() {
  return (
    <NavigationContainer independent={true} >
      <Stack.Navigator>
        <Stack.Screen
          name="Settings"
          component={settingsScreen}
          options={{ headerStyle: { backgroundColor: "tomato", justifyContent: "center", alignItems: "center", color: "white"}}}
        />
        <Stack.Screen
          name="Notifications"
          component={notifScreen}
          options={{ headerStyle: { backgroundColor: "tomato" } }}
        />
        <Stack.Screen
          name="Language"
          component={langScreen}
          options={{ headerStyle: { backgroundColor: "tomato" } }}
        />
        <Stack.Screen
          name="Preferences"
          component={prefScreen}
          options={{ headerStyle: { backgroundColor: "tomato" } }}
        />
        <Stack.Screen
          name="Help Centre"
          component={helpScreen}
          options={{ headerStyle: { backgroundColor: "tomato" } }}
        />
        <Stack.Screen
          name="Contact Us!"
          component={contactScreen}
          options={{ headerStyle: { backgroundColor: "salmon" } }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
