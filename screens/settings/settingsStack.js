import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import settingsScreen from "./SettingsScreen";
import notifScreen from "./NotificationsScreen";
import prefScreen from "./PreferencesScreen";
import langScreen from "./LanguagesScreen";
import contactScreen from "./ContactUsScreen";
import SetupScreen from "./SetupScreen";

const Stack = createStackNavigator();

export default function settingsStack() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: "tomato" }, headerTintColor: 'white', headerTitleAlign: 'center' }}>
        <Stack.Screen
          name="Setting"
          component={settingsScreen}
        />
        <Stack.Screen
          name="Notifications"
          component={notifScreen}
        />
        <Stack.Screen
          name="Language"
          component={langScreen}
        />
        <Stack.Screen
          name="Preferences"
          component={prefScreen}
        />
        <Stack.Screen
          name="Change Country"
          component={SetupScreen}
        />
        <Stack.Screen
          name="Contact Us!"
          component={contactScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
