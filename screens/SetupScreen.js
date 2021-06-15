import React, {useState} from "react";
import { Text, View, StyleSheet, TouchableOpacity, Button } from "react-native";
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

export default function test({ navigation }){
    const [expanded, setExpanded] = React.useState(true);
    const handlePress = () => setExpanded(!expanded);
    const [select, setSelect] = useState(false);
    
    if (select){
        return (
          <View style={styles.locationContainer}>
            <Text style={styles.text}>
              For a better experience, please turn on device location, which
              uses Google's location services.
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Button title="No Thanks" onPress={() => {}} />
              <Button title="Okay" onPress={() => {}} />
            </View>
          </View>
        );
    } else {
        return (
          <View>
            <List.Section style={styles.accordianContainer}>
              <List.Accordion
                title="Select Your Country"
                left={(props) => <List.Icon {...props} icon="earth" />}
                expanded={expanded}
                onPress={handlePress}
              >
                <TouchableOpacity
                  style={styles.listItem}
                  onPress={() => {
                    setSelect(true);
                  }}
                >
                  <List.Item title="Singapore" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.listItem}>
                  <List.Item title="Malaysia" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.listItem}>
                  <List.Item title="Japan" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.listItem}>
                  <List.Item title="Thailand" />
                </TouchableOpacity>
              </List.Accordion>
            </List.Section>
          </View>
        );
    }
        
}

const styles = StyleSheet.create({
    locationContainer: {
        alignItems: "center",
        height: "100%",
        justifyContent: 'center',
        backgroundColor: 'white',
    },
        text: {
        width: "100%",
        paddingLeft: 10,
        margin: 15,
    },
    accordianContainer: {
        paddingTop: 30,
    }
});
