import * as React from "react";
import { List } from "react-native-paper";

const Accordian = () => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <List.Section title="Accordions">
      <List.Accordion
        title="Select your country"
        left={(props) => <List.Icon {...props} icon="earth" />}
        expanded={expanded}
        onPress={handlePress}
      >
        <List.Item title="Singapore" />
        <List.Item title="United States" />
        <List.Item title="Canada" />
        <List.Item title="United Kingdom" />
      </List.Accordion>
    </List.Section>
  );
};

export default Accordian;
