import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { List } from "react-native-paper";
import CountryList from "../components/CountryList.js";
import LocationServices from "../components/LocationServices.js";

export default function SetupScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Please Select Country of Residence</Text>
            <CountryList/>
            <LocationServices/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#eee",
    },
    text: {
        paddingTop: 60,
        paddingLeft: 10,
        margin: 5,
        fontSize: 24, 
    }
});
