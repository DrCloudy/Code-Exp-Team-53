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

export default function langScreen() {
  const [sel0, setSel0] = useState("0");

  function flip(id) {
    setSel0(id);
  }

  const langOptions = [
    { title: "English", id: "0" },
    { title: "简体中文", id: "1" },
    { title: "Bahasa Malaysia", id: "2" },
    { title: "日本語", id: "3" },
    { title: "한국어", id: "4" },
    { title: "ภาษาไทย", id: "5" },
    { title: "Filipino", id: "6" },
    { title: "Tiếng Việt", id: "7" },
  ];

  function renderItem({ item }) {
    return (
      <TouchableOpacity
        style={styles.listButton}
        onPress={() => {
          flip(item.id);
        }}
      >
        <View style={styles.listButtonView}>
          <Text style={{ flex: 1 }}>{item.title}</Text>
          {sel0 === item.id ? (
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
      <FlatList
        style={styles.flatlistStyle}
        data={langOptions}
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
