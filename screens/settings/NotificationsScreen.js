import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";
// import ToggleSwitch from "toggle-switch-react-native";
// import DropDownPicker from "react-native-dropdown-picker";

export default function notifScreen() {
  const notifOptions = [
    { title: "Updates by country", id: "0" },
    { title: "Activity recommendations", id: "1" },
  ];

  const [sel, setSel] = useState(true);

  function flip() {
    setSel(!sel);
  }

  function renderItem({ item }) {
    return (
      <TouchableOpacity style={styles.listButton} onPress={flip}>
        <View style={styles.listButtonView}>
          <Text style={{ flex: 1 }}>{item.title}</Text>
          {sel ? (
            <Feather name="check-circle" size={24} color="black" />
          ) : (
            <Feather name="circle" size={24} color="black" />
          )}
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.settingsStyle}>
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
  },
  settingsStyle: {
    alignItems: "center",
    margin: 5,
  },
  flatlistStyle: {
    width: "90%",
  },
  listButtonView: { flexDirection: "row", width: "100%", flex: 1 },
});
