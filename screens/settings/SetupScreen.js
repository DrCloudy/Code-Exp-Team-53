import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, FlatList, Alert } from "react-native";
import { List } from "react-native-paper";
import { interpolate } from "react-native-reanimated";

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
    {id: "Japan"},
    {id: "South Korea"},
    {id: "China"},
    {id: "Thailand"},
    {id: "Phillipines"},
    {id: "Vietnam"},
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
        if (item.id === "South Korea"){
            return (
              <View>
                <TouchableOpacity
                  onPress={locationAlert}
                  style={styles.listItemSelected}
                >
                  <Text style={{ color: 'white' }}>{item.id}</Text>
                </TouchableOpacity>
              </View>
            );
        } else {
            return (
              <View>
                <TouchableOpacity
                  onPress={locationAlert}
                  style={styles.listItem}
                >
                  <Text>{item.id}</Text>
                </TouchableOpacity>
              </View>
            );
        }
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
    backgroundColor: "#eee",
  },
  listContainer: {
    alignItems: "center",
    backgroundColor: "#eee",
  },
  listStyle: {
    width: "50%",
    height: "100%",
    backgroundColor: "#eee",
  },
  listItem: {
    backgroundColor: "lightgrey",
    padding: 10,
    margin: 5,
    borderRadius: 15,
    alignItems: "center",
    textAlign: "center",
  },
  listItemSelected: {
    backgroundColor: "salmon",
    padding: 10,
    margin: 5,
    borderRadius: 15,
    alignItems: "center",
    textAlign: "center",
  },
  listText: {
    fontSize: 30,
    width: "100%",
    textAlign: "center",
  },
});
