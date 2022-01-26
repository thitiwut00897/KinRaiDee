import React,{useState} from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';
import * as Facebook from 'expo-facebook';
import { createStackNavigator } from 'react-navigation-stack';
import { StackNavigator } from "react-navigation";
import styles from "../style/styles";


export default function Login(props) {
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
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
      <View><Text style={{color:'white', paddingLeft:'10%', fontSize:26}}>Welcome</Text></View>
      <View style={styles.page}>
        <View style={{marginLeft:30, marginRight:30}}>
            <TextInput
                multiline={false}
                numberOfLines={1}
                onChangeText={(Email) => setEmail({Email})}
                value={Email}
                textContentType="emailAddress"
                placeholder="  example@email.com"
                style={{borderColor: 'gray',borderWidth: 1,borderRadius:8, marginTop:40, height:43}}/>
            
            
            <TextInput
                multiline={false}
                numberOfLines={1}
                onChangeText={(Password) => setPassword({Password})}
                value={Password}
                secureTextEntry={true}
                placeholder="  password"
                style={{borderColor: 'gray',borderWidth: 1,borderRadius:8, marginTop:20, marginBottom:20,height:43}}/>
            <Button onPress={()=> props.navigation.navigate("Main")} title='Login'/>
            
            <View style={{flexDirection:'row', justifyContent:'center'}}>
              <View style={{borderTopWidth:1, width:'40%',marginTop:10}}></View>
              <Text style={{marginLeft:'5%', marginRight:'5%'}}>OR</Text>
              <View style={{borderTopWidth:1, width:'40%',marginTop:10}}></View>
            </View>

        {/* <Button onPress={logInfacebok} title='Signin with facebook'/> */}
        <Button onPress={Test} title='Signin with facebook'/>
        <View style={{alignItems:'center'}}><Text >Don't have account  <Text style={{color:"blue", textDecorationLine: 'underline'}} onPress={()=> props.navigation.navigate("Signup")}>Register</Text></Text></View>
        </View>
        
      </View>
    </View>
  );
}