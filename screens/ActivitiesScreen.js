import * as React from "react";
import { Text, View, StyleSheet, Alert, Button } from "react-native";

export default function ActivitiesScreen() {
    
  const createTwoButtonAlert = () =>
    Alert.alert("Alert Title", "My Alert Msg", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);
  
  return (
    <View style={styles.container}>
      <Text>Reccomendations</Text>
      <Button title="Press me" onPress={createTwoButtonAlert} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,255,0,0.5)",
  },
});
