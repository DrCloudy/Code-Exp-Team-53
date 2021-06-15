import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { List } from "react-native-paper";
import CountryList from "../components/CountryList.js";

export default function SetupScreen({ navigation }) {
    return (
        <View style={styles.container}>
        <CountryList/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#eee",
    }
});
