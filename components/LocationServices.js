import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

export default function LocationServices() {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                For a better experience, please turn on device location, which uses Google's location services.
            </Text>
            <View style={{ flexDirection: 'row'}}>
                <Button title="No Thanks" onPress={() => {}} />
                <Button title="Okay" onPress={() => {}} />
            </View>
        </View> 
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    text: {
        width: "100%",
        paddingLeft: 10,
        margin: 15,
    }
})
