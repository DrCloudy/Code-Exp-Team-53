import React from "react";
import { Text, View, StyleSheet, TouchableOpacity,Linking, ScrollView } from "react-native";
import { IconButton, Appbar, Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import Hyperlink from 'react-native-hyperlink'



export default function RulesScreen() {
  return (
    <ScrollView>
      <View>
        <Appbar.Header style={{backgroundColor: "tomato",}}>
          <Appbar.Content title="Rules and Regulations" style = {styles.Headstyle} color = "white"/>
          <IconButton
          icon = {{uri: "https://cdn.countryflags.com/thumbs/singapore/flag-button-round-250.png"}}
          size={30}
          color = 'rgba(255, 0, 255, 0.0)'
          onPress={() => console.log('Pressed')}/>
        </Appbar.Header>
          <View style={{padding: 5}}>
            <Text style={styles.title}>Korea</Text>
          </View>
          <View style={{padding: 5}}>
            <Card>
              <Card.Title title="General Information"/>
              <Card.Content>
                <Text style={styles.subheader}>Social Distancing Alert Level</Text>
                <Paragraph>Level 2 for Greater Seoul/Level 1.5 for Non-Greater Seoul from
                  <Text style={{color:'red'}}> Jun/14/21 to Jul/4/21</Text>
                </Paragraph>

              </Card.Content>
              <Card.Actions>
                <Button onPress={() => Linking.openURL('http://ncov.mohw.go.kr/en/socdisBoardView.do?brdId=19&brdGubun=191&dataGubun=191&ncvContSeq=&contSeq=&board_id=&gubun=')}>More Details</Button>
              </Card.Actions>
            </Card>
          </View>

          <View style={{padding: 5}}>
            <Card>
              <Card.Title title="Key Guidelines"/>
              <Card.Content>
                <Text style={styles.subheader}>Five Essential Rules(Individual)</Text>
                <Paragraph>Rule 1: Stay home for 3 to 4 days if you feel unwell.</Paragraph>
                <Paragraph>Rule 2: Keep a distance of two arms' length from others.</Paragraph>
                <Paragraph>Rule 3: Wash your hands for 30 seconds. Cough or sneeze into your sleeve.</Paragraph>
                <Paragraph>Rule 4: Ventilate at least twice a day and disinfect regularly.</Paragraph>
                <Paragraph>Rule 5: Stay connected while physically distancing.</Paragraph>
                <Paragraph></Paragraph>
                <Text style={styles.subheader}>Five Essential Rules(Community)</Text>
                <Paragraph>Rule 1: Work together to protect your community.</Paragraph>
                <Paragraph>Rule 2: Designate a quarantine manager for effective response.</Paragraph>
                <Paragraph>Rule 3: Respect your community's quarantine guidelines</Paragraph>
                <Paragraph>Rule 4: The quarantine manager will do the best to protect the community.</Paragraph>
                <Paragraph>Rule 5: The leader and members of the community will provide full support for the quarantine manager.</Paragraph>
              </Card.Content>
              <Card.Actions>
                <Button onPress={() => Linking.openURL('http://ncov.mohw.go.kr/upload/viewer/skin/doc.html?fn=1592454908116_20200618133508.pdf&rs=/upload/viewer/result/202106/')}>More Details</Button>
              </Card.Actions>
            </Card>
          </View>

          <View style={{padding: 5}}>
            <Card>
              <Card.Title title="Singapore-Korea Information"/>
              <Card.Content>
                <Text style={styles.subheader}>Travel Restrictions: <Text style={{color:'red'}}> Closed</Text></Text>
                <Paragraph>The Republic of Korea (ROK) has suspended visa-free entry and visa-waiver programmes for 90 countries, including Singapore.</Paragraph>
              </Card.Content>
              <Card.Actions>
                <Button onPress={() => Linking.openURL('https://www.mfa.gov.sg/Countries-Regions/K/Korea-Republic-of/Travel-Page')}>More Details</Button>
              </Card.Actions>
              <Card.Content>
                <Paragraph>
                  <Text style={{color: 'purple', textDecorationLine: 'underline'}} onPress={() => Linking.openURL('https://www.straitstimes.com/asia/east-asia/south-korea-hopes-to-expedite-talks-with-singapore-taiwan-to-start-travel-bubble-from')}>South Korea hopes to expedite talks with Singapore</Text>
                </Paragraph>
              </Card.Content>
            </Card>
          </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,0,0,0.5)",
  },
  Headstyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
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
  }
});
