import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function ActivitiesScreen() {
  return (
    <View style={styles.container}>
      <Text>Reccommendations</Text>
      <Image style={{width:2,height:2}} source={{uri: 'https://cdn.countryflags.com/thumbs/singapore/flag-button-round-250.png'}}/>
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
