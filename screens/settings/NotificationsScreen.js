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

export default function notifScreen() {
  const [sel0, setSel0] = useState(true);
  const [sel1, setSel1] = useState(true);

  function flip0() {
    setSel0(!sel0);
  }

  function flip1() {
    setSel1(!sel1);
  }

  const notifOptions = [
    { title: "Updates by country", selector: sel0, id: "0" },
    { title: "Activity recommendations", selector: sel1, id: "1" },
  ];

  function renderItem({ item }) {
    return (
      <TouchableOpacity
        style={styles.listButton}
        onPress={() => {
          if (item.id === "0") flip0();
          if (item.id === "1") flip1();
        }}
      >
        <View style={styles.listButtonView}>
          <Text style={{ flex: 1 }}>{item.title}</Text>
          {item.selector ? (
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
