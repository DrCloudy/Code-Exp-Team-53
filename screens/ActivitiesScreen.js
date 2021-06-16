import * as React from "react";
import { View, StyleSheet } from "react-native";
import { List, Avatar, Appbar, IconButton } from "react-native-paper";

const MyComponent = () => {
  var DestCountry = "South Korea";
  var CountryFlag;
  if (DestCountry === "South Korea") {
    CountryFlag = require("../country-flags (Icon made by Freepik from www.flaticon.com)/png/219-south korea.png");
  }

  return (
    <View>
      <Appbar.Header style={{ backgroundColor: "tomato" }}>
        <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems:'center'}}>
          <Appbar.Content
            title="Activities"
            style={{ justifyContent: "center", alignItems: "center" }}
            color="white"
          />
        </View>
        <Avatar.Image size={40} source={CountryFlag} />
      </Appbar.Header>
      <View style={{ padding: 5 }}></View>
      <List.Accordion
        title="Outdoor Sports"
        descriptionStyle={{ fontSize: 15 }}
        left={(props) => <List.Icon {...props} icon="folder" />}
        style={styles.listAccordion}
      >
        <List.Item
          style={styles.listItem}
          title="Location"
          titleStyle={{ fontSize: 15 }}
          description="Any outdoors venue."
          descriptionStyle={{ fontSize: 12 }}
        />
        <List.Item
          style={styles.listItem}
          title="Requirements/Restrictions"
          titleStyle={{ fontSize: 15 }}
          description="Maintain safe distancing as required."
          descriptionStyle={{ fontSize: 12 }}
        />
        <List.Item
          style={styles.listItem}
          title="Miscellaneous Notes"
          titleStyle={{ fontSize: 15 }}
          description="Mask wearing is recommended but not legally required during strenuous activity."
          descriptionStyle={{ fontSize: 12 }}
        />
      </List.Accordion>

      <List.Accordion
        title="Outdoor Sports"
        descriptionStyle={{ fontSize: 15 }}
        left={(props) => <List.Icon {...props} icon="folder" />}
        style={styles.listAccordion}
      >
        <List.Item
          style={styles.listItem}
          title="Location"
          titleStyle={{ fontSize: 15 }}
          description="Any outdoors venue."
          descriptionStyle={{ fontSize: 12 }}
        />
        <List.Item
          style={styles.listItem}
          title="Requirements/Restrictions"
          titleStyle={{ fontSize: 15 }}
          description="Maintain safe distancing as required."
          descriptionStyle={{ fontSize: 12 }}
        />
        <List.Item
          style={styles.listItem}
          title="Miscellaneous Notes"
          titleStyle={{ fontSize: 15 }}
          description="Mask wearing is recommended but not legally required during strenuous activity."
          descriptionStyle={{ fontSize: 12 }}
        />
      </List.Accordion>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: "1%",
  },
  listItem: {
    margin: 0,
    marginTop: 0,
    marginBottom: 0,
  },
  listAccordion: {
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 1,
  },
});

export default MyComponent;
