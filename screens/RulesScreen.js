import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Appbar } from 'react-native-paper';
import { IconButton, Colors } from 'react-native-paper';



export default function RulesScreen() {
  // const _goBack = () => console.log('Went back');

  // const _handleSearch = () => console.log('Searching');

  // const _handleMore = () => console.log('Shown more');
  var country;
  if(true){
    country = require('../country-flags (Icon made by Freepik from www.flaticon.com)/png/011-china.png');
  }
  // {{uri: 'https://img.icons8.com/ios/452/react-native--v1.png'}}
  return (
      <Appbar.Header style={{backgroundColor: "tomato"}}>
        {/* <Appbar.BackAction onPress={_goBack} /> */}
        {/* <Appbar.Action icon="magnify" onPress={_handleSearch} /> */}
        {/* <Appbar.Action icon="dots-vertical" onPress={_handleMore} /> */}
        <Appbar.Content title="Rules and Regulations" style = {styles.Headstyle} color = "white"/>
        <IconButton
        icon = {country}
        size={30}
        color = 'rgba(255, 0, 255, 0.0)'
        onPress={() => console.log('Pressed')}/>
    </Appbar.Header>
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
  }
});
