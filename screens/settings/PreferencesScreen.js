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

export default function prefScreen() {
  const [sel0, setSel0] = useState(true);
  const [sel1, setSel1] = useState(true);
  const [sel2, setSel2] = useState(true);
  const [sel3, setSel3] = useState(true);
  const [sel4, setSel4] = useState(true);
  const [sel5, setSel5] = useState(false);

  function flip0() {
    setSel0(!sel0);
  }

  function flip1() {
    setSel1(!sel1);
  }

  function flip2() {
    setSel2(!sel2);
  }

  function flip3() {
    setSel3(!sel3);
  }

  function flip4() {
    setSel4(!sel4);
  }

  function flip5() {
    setSel5(!sel5);
  }

  const prefOptions = [
    { title: "Outdoor sports", selector: sel0, id: "0" },
    { title: "Indoor sports", selector: sel1, id: "1" },
    { title: "Arts & craft", selector: sel2, id: "2" },
    { title: "Clubs and pubs", selector: sel3, id: "3" },
    { title: "Dining", selector: sel4, id: "4" },
  ];

  const appprefOptions = [{ title: "Dark mode", selector: sel5, id: "5" }];

  function renderItem({ item }) {
    return (
      <TouchableOpacity
        style={styles.listButton}
        onPress={() => {
          if (item.id === "0") flip0();
          if (item.id === "1") flip1();
          if (item.id === "2") flip2();
          if (item.id === "3") flip3();
          if (item.id === "4") flip4();
          if (item.id === "5") flip5();
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
      <Text style={styles.dispText}>Display activity updates for:</Text>
      <FlatList
        style={styles.flatlistStyle}
        data={prefOptions}
        renderItem={renderItem}
      />
      <Text style={styles.dispText}>App preferences:</Text>
      <FlatList
        style={styles.flatlistStyle}
        data={appprefOptions}
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
