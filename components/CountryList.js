import * as React from "react";
import { Image } from "react-native";
import { List } from "react-native-paper";

const CountryList = () => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <List.Section title="Country List" style={{ paddingTop: 25 }}>
      <List.Accordion
        title="Select your country"
        left={(props) => <List.Icon {...props} icon="earth" />}
        expanded={expanded}
        onPress={handlePress}
      >
        <List.Item
          left={(props) => (
            <List.Icon
              {...props}
              icon={({size=512, color}) => (
                <Image
                  source={require("../assets/singaporeIcon.png")}
                  style={{ width: size, height: size, tintColor: color }}
                />
              )}
            />
          )}
          title="Singapore"
        />
        <List.Item title="United States" />
        <List.Item title="Canada" />
        <List.Item title="United Kingdom" />
      </List.Accordion>
    </List.Section>
  );
};

export default CountryList;
