import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, Button } from "react-native";
import styles from "../style/styles";

const Signup = (props) => {
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const [conPassword, setconPassword] = useState('')
return (
    <View style={styles.container}>
      <View><Text style={{color:'white', paddingLeft:'10%', fontSize:26}}>Register</Text></View>
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
                style={{borderColor: 'gray',borderWidth: 1,borderRadius:8, marginTop:20, height:43}}/>

            <TextInput
                multiline={false}
                numberOfLines={1}
                onChangeText={(conPassword) => setconPassword({conPassword})}
                value={conPassword}
                secureTextEntry={true}
                placeholder="  confirm password"
                style={{borderColor: 'gray',borderWidth: 1,borderRadius:8, marginTop:20, marginBottom:20, height:43}}/>
            
          
          
          <Button title="Next" onPress={()=> props.navigation.navigate("Createprofile")}></Button>
        </View>
        
        
    
      </View>
    
    </View>
);
};

export default Signup;
