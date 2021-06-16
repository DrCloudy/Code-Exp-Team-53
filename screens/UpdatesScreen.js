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
  const korea= props=> <Avatar.Image size={40} source={require('../assets/southkorea.png')}/>
  const singapore= props=> <Avatar.Image size={40} source={require('../assets/singapore.png')}/>
  var DestCountry = 'South Korea';
  var CountryFlag;
  if(DestCountry==='South Korea'){
    CountryFlag = require('../country-flags (Icon made by Freepik from www.flaticon.com)/png/219-south korea.png')
  }
      return(
        <ScrollView>
          <Appbar.Header style={{backgroundColor: "tomato",}}>
          <Avatar.Image size={40} source={CountryFlag}/>
          <Appbar.Content title="Activities" style = {{justifyContent: "center", alignItems: "center"}} color = "white"/>  
          <IconButton
            icon= "cog-outline"
            color="black"
            size={30}
            onPress={() => console.log('Pressed')}
          />
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
