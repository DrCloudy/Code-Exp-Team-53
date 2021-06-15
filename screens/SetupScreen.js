import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { List } from "react-native-paper";
import Accordian from "../components/Accordian.js";

export default function SetupScreen({ navigation }) {
    return (
        <View style={styles.container}>
        <Accordian/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#eee"
    }
});
