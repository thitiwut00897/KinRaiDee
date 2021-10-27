import React,{useState} from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import * as Facebook from 'expo-facebook';
import { createStackNavigator } from 'react-navigation-stack';
import { StackNavigator } from "react-navigation";
import styles from "../style/styles";


export default function Login(props) {
    // const [Token, setToken] = useState();
    async function logInfacebok() {
        try {
          await Facebook.initializeAsync({
            appId: '1008123863106181',
          });
          const {
            type,
            token,
            expirationDate,
            permissions,
            declinedPermissions,
          } = await Facebook.logInWithReadPermissionsAsync({
            permissions: ['public_profile'],
          });
          if (type === 'success') {
            // Get the user's name using Facebook's Graph API
            const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
            // Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
            props.navigation.navigate("Main", {Token:token});
          } else {
            // type === 'cancel'
          }
        } catch ({ message }) {
          alert(`Facebook Login Error: ${message}`);
        }
      }

      function Test(){
        props.navigation.navigate("Main");
      }
      
  return (
    <View style={styles.container}>
      <Text>ssss!</Text>
      {/* <Button onPress={logInfacebok} title='Signin with facebook'/> */}
      <Button onPress={Test} title='Signin with facebook'/>
      <Button onPress={()=> props.navigation.navigate("Signup")} title='Signup'/>
    </View>
  );
}