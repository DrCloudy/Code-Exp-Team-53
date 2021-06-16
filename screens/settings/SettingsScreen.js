import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";

export default function settingsScreen({ navigation }) {
  const settingsOptions = [
    { title: "Notifications", id: "0" },
    { title: "Preferences", id: "1" },
    { title: "Home Country", id: "2"},
    { title: "Destination Country", id: "3"},
    { title: "Language", id: "4" },
    { title: "Contact Us!", id: "5" },
  ];

  function renderItem({ item }) {
    return (
      <TouchableOpacity
        style={styles.listButton}
        onPress={() => {
          navigation.navigate(`${item.title}`);
          // console.log("Hey");
        }}
      >
        <Text>{item.title}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.settingsStyle}>
      <FlatList
        style={styles.flatlistStyle}
        data={settingsOptions}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    alignItems: "center",
  },
  listButton: {
    backgroundColor: "lightgrey",
    padding: 10,
    margin: 5,
    borderRadius: 13,
    alignItems: "center",
    // width: "100%",
  },
  settingsStyle: {
    alignItems: "center",
    margin: 5,
    // padding: 5,
  },
  flatlistStyle: {
    width: "80%",
  },
});
