import * as React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { List, Avatar } from "react-native-paper";

const CountryList = ({ navigation }) => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
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
        <TouchableOpacity
          style={styles.listItem}
          onPress={() => {
            setSelect(true);
          }}
        >
          <List.Item title="Malaysia" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.listItem}
          onPress={() => {
            setSelect(true);
          }}
        >
          <List.Item title="Japan" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.listItem}
          onPress={() => {
            setSelect(true);
          }}
        >
          <List.Item title="Thailand" />
        </TouchableOpacity>
      </List.Accordion>
    </List.Section>
  );
};

export default CountryList;

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    backgroundColor: "#fff",
  }
})
