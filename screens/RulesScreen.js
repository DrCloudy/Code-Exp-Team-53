import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function RulesScreen() {
  return (
    <View style={styles.container}>
      <Text>Rules and Regulations</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,0,0,0.5)",
  },
});
