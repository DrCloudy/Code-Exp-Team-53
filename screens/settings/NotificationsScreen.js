import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
// import ToggleSwitch from "toggle-switch-react-native";
// import DropDownPicker from "react-native-dropdown-picker";

export default function notifScreen({ navigation }) {
  const notifOptions = [
    { title: "Updates by country", id: "0" },
    { title: "Activity recommendations", id: "1" },
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
    <View stye={{ alignItems: "center" }}>
      <Text style={styles.dispText}>
        What would you like to be notified about?
      </Text>
      <FlatList
        style={styles.flatlistStyle}
        data={notifOptions}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  dispText: {
    fontSize: 18,
    padding: 10,
  },
  listButton: {
    backgroundColor: "lightgrey",
    padding: 10,
    margin: 5,
    borderRadius: 13,
    alignItems: "center",
    // width: "100%",
  },
  // settingsStyle: {
  //   alignItems: "center",
  //   margin: 5,
  //   // padding: 5,
  // },
  flatlistStyle: {
    width: "80%",
  },
});
