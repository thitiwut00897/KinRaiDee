import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';
import * as Facebook from 'expo-facebook';
import { createStackNavigator } from 'react-navigation-stack';
import { StackNavigator } from "react-navigation";
import styles from "../style/styles";
import * as firebase from 'firebase';


export default function Login(props) {
  const [Email, setEmail] = useState(null)
  const [Password, setPassword] = useState(null)
  const [messageError, setMessageError] = useState(null)
  const auth = firebase.auth();


      function validateAccoutFacebook(){
        props.navigation.navigate("Main");
      }
  const handleLogin=()=>{
    auth.signInWithEmailAndPassword(Email, Password).then(userCredentials =>{
      const user = userCredentials.user;
      console.log('Login with '+ user.email)
      setEmail(null)
      setPassword(null)
      setMessageError(null)
      props.navigation.navigate("Main")
    }).catch((error)=>{
      setMessageError(error.message)
    })
  }


  return (
    <View style={styles.container}>
      <View><Text style={{color:'white', paddingLeft:'10%', fontSize:26}}>Welcome</Text></View>
      <View style={styles.page}>
        <View style={{marginLeft:30, marginRight:30}}>
            <TextInput
                multiline={false}
                numberOfLines={1}
                onChangeText={(input) => setEmail(input)}
                value={Email}
                textContentType="emailAddress"
                placeholder="  example@email.com"
                style={{borderColor: '#CCCFCF',borderWidth: 1,borderRadius:8, marginTop:40, height:43}}/>
            
            
            <TextInput
                multiline={false}
                numberOfLines={1}
                onChangeText={(input) => setPassword(input)}
                value={Password}
                secureTextEntry={true}
                placeholder="  password"
                style={{borderColor: '#CCCFCF',borderWidth: 1,borderRadius:8, marginTop:20, marginBottom:0,height:43}}/>
            <Text style={{alignItems:'center', color:'red', fontSize:12}}>{messageError?messageError:null}</Text>
            <Button onPress={handleLogin} title='Login'/>
            
            <View style={{flexDirection:'row', justifyContent:'center'}}>
              <View style={{borderTopWidth:1, width:'40%',marginTop:10, borderColor:'#CCCFCF'}}></View>
              <Text style={{marginLeft:'5%', marginRight:'5%', color:'#CCCFCF'}}>OR</Text>
              <View style={{borderTopWidth:1, width:'40%',marginTop:10, borderColor:'#CCCFCF'}}></View>
            </View>

        {/* <Button onPress={logInfacebok} title='Signin with facebook'/> */}
        <Button onPress={validateAccoutFacebook} title='Signin with facebook'/>
        <View style={{alignItems:'center'}}><Text>Don't have account  <Text style={{color:"blue", textDecorationLine: 'underline'}} onPress={()=> props.navigation.navigate("Signup")}>Register</Text></Text></View>
        </View>
        
      </View>
    </View>
  );
}