import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, Button, SafeAreaView, ScrollView } from "react-native";
import styles from "../style/styles";

const Createprofile = (props) => {
  const [FirstName, setFirstName] = useState('')
  const [LastName, setLastName] = useState('')
  const [Description, setDescription] = useState('')
return (
    <View style={styles.container}>
      <View><Text style={{color:'white', paddingLeft:'10%', fontSize:26, fontWeight: 'bold'}}>Register</Text></View>
      <View style={styles.page}>
        
        <SafeAreaView style={{marginLeft:30, marginRight:30}}>
          <ScrollView>
            <View style={{alignItems: 'center',}}>
              <Image source={{}} style={{height:135, width:135, borderRadius:100, margin:20, borderColor:'#BBBFBF', borderWidth:1, backgroundColor:'white'}}></Image>
            </View>
          <View style={{width: "100%", flexDirection: "row",justifyContent:"flex-start"}}>
            <View style={{width: "50%", paddingRight:5}}>
              <Text style={{color:'gray'}}>First Name</Text>
              <TextInput
                multiline={false}
                numberOfLines={1}
                onChangeText={(FirstName) => setFirstName({FirstName})}
                value={FirstName}
                style={{borderColor: '#CCCFCF',borderWidth: 1,borderRadius:8,}}/>
            </View>
            <View style={{width: "50%", paddingLeft:5}}>
              <Text style={{color:'gray'}}>Last Name</Text>
              <TextInput
                multiline={false}
                numberOfLines={1}
                onChangeText={(LastName) => setLastName({LastName})}
                value={LastName}
                style={{borderColor: '#CCCFCF',borderWidth: 1,borderRadius:8,}}/>
            </View>
          </View>
          <Text style={{color:'gray'}}>Description</Text>
          <TextInput
            multiline={true}
            numberOfLines={4}
            onChangeText={(Description) => setDescription({Description})}
            value={Description}
            style={{borderColor: '#CCCFCF',borderWidth: 1,borderRadius:8, marginBottom:30}}/>
          </ScrollView>
          <Button title="Register" onPress={()=> props.navigation.navigate("Login")}></Button>
        </SafeAreaView>
        
        
    
      </View>
    
    </View>
);
};

export default Createprofile;
