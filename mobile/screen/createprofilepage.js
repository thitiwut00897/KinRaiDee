import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, Button } from "react-native";
import styles from "../style/styles";

const Createprofile = (props) => {
  const [FirstName, setFirstName] = useState('')
  const [LastName, setLastName] = useState('')
  const [Description, setDescription] = useState('')
return (
    <View style={styles.container}>
      <View><Text style={{color:'white', paddingLeft:'10%', fontSize:26}}>Register</Text></View>
      <View style={styles.page}>
        
        <View style={{alignItems: 'center',}}>
          <Image source={require('../assets/profilefacebook.jpg')} style={{height:135, width:135, borderRadius:100, margin:20, borderColor:'gray', borderWidth:1}}></Image>
        </View>
        <View style={{marginLeft:30, marginRight:30}}>
          <View style={{width: "100%", flexDirection: "row",justifyContent:"flex-start"}}>
            <View style={{width: "50%", paddingRight:5}}>
              <Text style={{color:'gray'}}>First Name</Text>
              <TextInput
                multiline={false}
                numberOfLines={1}
                onChangeText={(FirstName) => setFirstName({FirstName})}
                value={FirstName}
                style={{borderColor: 'gray',borderWidth: 1,borderRadius:8,}}/>
            </View>
            <View style={{width: "50%", paddingLeft:5}}>
              <Text style={{color:'gray'}}>Last Name</Text>
              <TextInput
                multiline={false}
                numberOfLines={1}
                onChangeText={(LastName) => setLastName({LastName})}
                value={LastName}
                style={{borderColor: 'gray',borderWidth: 1,borderRadius:8,}}/>
            </View>
          </View>
          <Text style={{color:'gray'}}>Description</Text>
          <TextInput
            multiline={true}
            numberOfLines={4}
            onChangeText={(Description) => setDescription({Description})}
            value={Description}
            style={{borderColor: 'gray',borderWidth: 1,borderRadius:8, marginBottom:30}}/>
          <Button title="Register" onPress={()=> props.navigation.navigate("Login")}></Button>
        </View>
        
        
    
      </View>
    
    </View>
);
};

export default Createprofile;
