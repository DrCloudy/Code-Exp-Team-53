import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, FlatList, Alert } from "react-native";
import { List } from "react-native-paper";

/* Previous code - could not figure out how to pass var around components
export default function SetupScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Please Select Country of Residence</Text>
            <CountryList/>
            <LocationServices/>
        </View>
    )
}
*/

const COUNTRIES = [
    {id: "Singapore"},
    {id: "Malaysia"},
    {id: "Japan"}
]

export default function ChangeCountry({ navigation }){
    const [expanded, setExpanded] = React.useState(true);
    const handlePress = () => setExpanded(!expanded);
    
    const locationAlert = () =>
      Alert.alert("Suggestion", "For a better experience, please turn on device location.", [
        {
          text: "Cancel",
          onPress: () => console.log("No Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);

    function renderItem({ item }){
        return (
          <View>
            <TouchableOpacity onPress={locationAlert} style={styles.listItem}>
              <Text>{item.id}</Text>
            </TouchableOpacity>
          </View>
        );
    } 

    return (
        <View style={styles.listContainer}>
            <FlatList style={styles.listStyle} data={COUNTRIES} renderItem={renderItem} />
        </View>
    );
}  

const styles = StyleSheet.create({
  locationContainer: {
    alignItems: "center",
    height: "100%",
    justifyContent: "center",
    backgroundColor: "white",
  },
  listContainer: {
    alignItems: "center",
    backgroundColor: "#eee",
  },
  listStyle: {
    width: "50%",
    backgroundColor: "#eee",
  },
  listItem: {
    backgroundColor: "lightgrey",
    padding: 10,
    margin: 5,
    borderRadius: 15,
    alignItems: "center",
    textAlign: 'center',
  },
  listText: {
    fontSize: 30,
    width: "100%",
    textAlign: "center",
  },
});
