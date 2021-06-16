import * as React from 'react';
import { StyleSheet } from 'react-native';
import { List } from 'react-native-paper';

const MyComponent = () => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (

    <List.Section title="Activities of note" titleStyle={{fontSize: 20, textAlign: 'center', textTransform: 'uppercase'}}>
      <List.Accordion
        title="Outdoor Sports"
        descriptionStyle={{fontSize: 15}}
        left={props => <List.Icon {...props} icon="folder" />}
        style={styles.listAccordion}
        expanded={expanded}
        onPress={handlePress}>
        <List.Item
        style={styles.listItem}
        title="Location"
        titleStyle={{fontSize: 15}}
        description="Any outdoors venue."
        descriptionStyle={{fontSize: 12}}
        />
        <List.Item
        style={styles.listItem}
        title="Requirements/Restrictions"
        titleStyle={{fontSize: 15}}
        description="Maintain safe distancing as required."
        descriptionStyle={{fontSize: 12}}
        />
        <List.Item
        style={styles.listItem}
        title="Miscellaneous Notes"
        titleStyle={{fontSize: 15}}
        description="Mask wearing is recommended but not legally required during strenuous activity."
        descriptionStyle={{fontSize: 12}}
        />
      </List.Accordion>

      <List.Accordion
        title="Outdoor Sports"
        descriptionStyle={{fontSize: 15}}
        left={props => <List.Icon {...props} icon="folder" />}
        style={styles.listAccordion}
        expanded={expanded}
        onPress={handlePress}>
        <List.Item
        style={styles.listItem}
        title="Location"
        titleStyle={{fontSize: 15}}
        description="Any outdoors venue."
        descriptionStyle={{fontSize: 12}}
        />
        <List.Item
        style={styles.listItem}
        title="Requirements/Restrictions"
        titleStyle={{fontSize: 15}}
        description="Maintain safe distancing as required."
        descriptionStyle={{fontSize: 12}}
        />
        <List.Item
        style={styles.listItem}
        title="Miscellaneous Notes"
        titleStyle={{fontSize: 15}}
        description="Mask wearing is recommended but not legally required during strenuous activity."
        descriptionStyle={{fontSize: 12}}
        />
      </List.Accordion>
    </List.Section>
  );
};

const styles = StyleSheet.create({
  listItem: {
    margin: 0,
    marginTop: 0,
    marginBottom: 0
  },
  listAccordion: {
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10
  }
});

export default MyComponent;