import * as React from "react";
import { View, StyleSheet, Text, ScrollView, Linking } from "react-native";
import { List, Avatar, Appbar, IconButton, Card, Paragraph, Button, Searchbar } from "react-native-paper";

const MyComponent = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
  
  return (
    <ScrollView>
      <View>
        <Appbar.Header style={{ backgroundColor: "tomato" }}>
          <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems:'center'}}>
            <Appbar.Content
              title="Activities"
              style={{ justifyContent: "center", alignItems: "center" }}
              color="white"
            />
          </View>
          <Avatar.Image size={40} source={{uri:'https://png4u.com/wp-content/uploads/2019/09/south-korea-flag-icon.png'}}/>
        </Appbar.Header>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
        <View style={{padding: 5}}>
          <Card>
            <Card.Cover source={{ uri: 'http://tong.visitkorea.or.kr/img/vk/enu/cms/content/98/2721498_image_1.jpg' }} />
            <Card.Title title="25 Places To Go!" subtitle="Non-Contact Safe Attractions for this Summer"/>
            <Card.Content>
              <Text style={styles.subheader}>Requirements/Restrictions</Text>
              <Paragraph>Maintain safe distancing as required</Paragraph>
              <Paragraph></Paragraph>
              <Text style={styles.subheader}>Miscellaneous Notes</Text>
              <Paragraph>Mask wearing is recommended but not legally required during strenuous activity.</Paragraph>
            </Card.Content>
            <Card.Actions>
              <Button onPress={() => Linking.openURL('https://english.visitkorea.or.kr/enu/AKR/FU_EN_15.jsp?cid=2721498')}>More Details</Button>
            </Card.Actions>
          </Card>
        </View>
        <View style={{padding: 5}}>
          <Card>
            <Card.Cover source={{ uri: 'http://tong.visitkorea.or.kr/img/vk/enu/cms/content/26/2720026_image_1.jpg' }} />
            <Card.Title title="K-POP Online Hallyu Festival" subtitle="KCON:TACT 4 U Opens from June 19 and 27"/>
            <Card.Content>
              <Text style={styles.subheader}>Requirements/Restrictions</Text>
              <Paragraph>Maintain safe distancing as required</Paragraph>
              <Paragraph></Paragraph>
              <Text style={styles.subheader}>Miscellaneous Notes</Text>
              <Paragraph>Mask wearing is recommended but not legally required during strenuous activity.</Paragraph>
            </Card.Content>
            <Card.Actions>
              <Button onPress={() => Linking.openURL('https://english.visitkorea.or.kr/enu/AKR/FU_EN_15.jsp?cid=2720026')}>More Details</Button>
            </Card.Actions>
          </Card>
        </View>
      </View>
    </ScrollView>
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
  title:{
    fontWeight: 'bold', 
    fontSize: 35,
  },
  subheader:{
    fontSize: 15,
    textDecorationLine: 'underline',
  },
  body:{
    fontSize:15
  },
});

export default MyComponent;
