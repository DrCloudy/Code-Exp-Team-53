import React, {useState} from "react";
import { Text, View, StyleSheet, TouchableOpacity, Button, FlatList } from "react-native";
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

export default function test({ navigation }){
    const [expanded, setExpanded] = React.useState(true);
    const handlePress = () => setExpanded(!expanded);
    const [select, setSelect] = useState(false);
    
    function renderItem({ item }){
        return (
            <View>
                <TouchableOpacity onPress={() => setSelect(true)}><Text style={styles.listItem}>{item.id}</Text></TouchableOpacity>
            </View>
        );
    }

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
            <View style={styles.listContainer}>
                <Text style={styles.listText}>Please Select Country of Residence</Text>
                <FlatList style={styles.listStyle} data={COUNTRIES} renderItem={renderItem} />
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
        margin: 15,
        fontSize: 24,
        textAlign: 'center',
    },
    listContainer: {
        paddingTop: 10,
        alignItems: 'center',
        backgroundColor: '#ddd',
    },
    listStyle: {
        width: "100%",
        backgroundColor: '#eee',
        height: '100%'
    },
    listItem: {
        fontSize: 22,
        textAlign: 'center',
        padding: 5,
    },
    listText: {
        fontSize: 24, 
        width: '100%',
        textAlign: 'center',
    }
});
