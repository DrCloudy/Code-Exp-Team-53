import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function ActivitiesScreen() {

  return (
    <View style={styles.container}>
      <Text>Reccomendations</Text>
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
