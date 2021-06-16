import React from "react";
import {Share, Text, View, StyleSheet,ScrollView,Linking } from "react-native";
import { Avatar, Button, Card, Title, Appbar, IconButton } from 'react-native-paper';


export default class MyComponent extends React.Component{
  loadInBrowserKorea = () => {
    Linking.openURL("http://ncov.mohw.go.kr/en/").catch(err => console.error("Couldn't load page", err));
  };
  onShareTKorea = async () => {
    try {
      const result = await Share.share({
        message:
        "New updates regarding testing in South Korea : http://ncov.mohw.go.kr/en/"
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
        } else {
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  onShareCKorea = async () => {
    try {
      const result = await Share.share({
        message:
        "New updates regarding cases in South Korea : http://ncov.mohw.go.kr/en/"
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  onShareSingapore = async () => {
    try {
      const result = await Share.share({
        message:
        "New updates regarding cases in Singapore : https://www.moh.gov.sg/covid-19"
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  loadInBrowserSingapore = () => {
    Linking.openURL("https://www.moh.gov.sg/covid-19").catch(err => console.error("Couldn't load page", err));
  };

  render(){
  const korea= props=> <Avatar.Image size={40} source={{uri:'https://png4u.com/wp-content/uploads/2019/09/south-korea-flag-icon.png'}} />
  const singapore= props=> <Avatar.Image size={40} source={require('../assets/singapore.png')}/>
  
      return(
        <ScrollView>
          <Appbar.Header style={{backgroundColor: "tomato",}}>
            <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems:'center'}}>
              <Appbar.Content
                title="Activities"
                style={{ justifyContent: "center", alignItems: "center" }}
                color="white"
              />
            </View>
            <Avatar.Image size={40} source={{uri:'https://png4u.com/wp-content/uploads/2019/09/south-korea-flag-icon.png'}} />
          </Appbar.Header>
          <Card>
            <Card.Title title="Korea" subtitle="as of 12am on June 15, 2021" left={korea} />
            <Card.Content>
              <Title>Case Summary in Korea</Title>
            </Card.Content>
            <Card.Cover style={{height: 150}} source={require('../assets/SouthKoreastats.jpg')} resizeMode={'stretch'} />
            <Card.Actions>
              <Button onPress={this.onShareCKorea}>Share</Button>
              <Button onPress={this.loadInBrowserKorea}>Explore</Button>
            </Card.Actions>
          </Card>
          <Card>
            <Card.Title title= 'Korea' subtitle="as of 12am on June 15, 2021" left={korea} />
            <Card.Content>
              <Title>Testing in Korea</Title>
            </Card.Content>
            <Card.Cover style={{height: 150}} source={require('../assets/SouthKoreatests.jpg')} resizeMode={'stretch'} />
            <Card.Actions>
              <Button onPress={this.onShareTKorea}>Share</Button>
              <Button onPress={this.loadInBrowserKorea}>Explore</Button>
            </Card.Actions>
          </Card>
          <Card>
            <Card.Title title="Singapore" subtitle="as at 14 June 2021, 1200h" left={singapore} />
            <Card.Content>
              <Title>Case Summary in Singapore</Title>
            </Card.Content>
            <Card.Cover style={{height: 150}} source={require('../assets/Singaporestats.jpg')} resizeMode={'stretch'} />
            <Card.Actions>
              <Button onPress={this.onShareSingapore}>Share</Button>
              <Button onPress={this.loadInBrowserSingapore}>Explore</Button>
            </Card.Actions>
          </Card>
        </ScrollView>
      );
    }
}

/*
  koreaShare = async () => {
    const shareOptions= {
      title: "Testing in Korea",//string
      //message: "http://ncov.mohw.go.kr/en/",
      url:files.korea
    }
    try{
      const shareResponse = await Share2.open(shareOptions);
    }catch(error){
      console.log('Error=> ',error);
    }
  };
  */
