import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, Button, ScrollView, SafeAreaView} from "react-native";
import styles from "../style/styles";
import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const Signup = (props) => {
  const [Email, setEmail] = useState(null)
  const [Password, setPassword] = useState(null)
  const [descriptionsinput, setdescriptions] = useState(null)
  const [firstNameinput, setfirstName] = useState(null)
  const [lastNameinput, setlastName] = useState(null)
  const [photoinput, setphoto] = useState('https://firebasestorage.googleapis.com/v0/b/kinraidee-d5af8.appspot.com/o/asset%2Fuser%20(1).png?alt=media&token=798e3f66-768d-444d-9b8a-0e5259e9bb62')
  const [messageError, setMessageError] = useState(null)
  const auth = firebase.auth();
  const firestore = firebase.firestore();

  const createUserDocument = async (user)=>{
    console.log('id is '+ user.uid)
    if (!user)return;
    const userRef = firestore.doc(`users/${user.uid}`)
    const snapshot = await userRef.get();
    if (!snapshot.exists){
      const descriptions = descriptionsinput;
      const email = Email;
      const firstName = firstNameinput;
      const lastName = lastNameinput;
      const password = Password;
      const photo = photoinput;
      try{
        userRef.set({
          descriptions,
          email,
          firstName,
          lastName,
          password,
          photo,
        })
      }catch(error){
        console.log('error in create user'. error)
      }
    }
  }

  const handlesubmit = async()=>{
    try{
      const {user} = await auth.createUserWithEmailAndPassword(Email,Password);
      await createUserDocument(user)
      console.log('signup succes')
      setEmail(null)
      setPassword(null)
      setdescriptions(null)
      setfirstName(null)
      setlastName(null)
      setphoto('https://firebasestorage.googleapis.com/v0/b/kinraidee-d5af8.appspot.com/o/asset%2Fuser%20(1).png?alt=media&token=798e3f66-768d-444d-9b8a-0e5259e9bb62')
      setMessageError(null)
      props.navigation.popToTop()
    }catch(error){
      setMessageError(error.message)
    }
  }


return (
    <View style={styles.container}>
      <View><Text style={{color:'white', paddingLeft:'10%', fontSize:26}}>Register</Text></View>
      <View style={styles.page}>
      <ScrollView>
        
      <SafeAreaView style={{marginLeft:30, marginRight:30, paddingBottom:'20%'}}>
            <View style={{alignItems: 'center',}}>
              <Image source={{uri:photoinput}} style={{height:135, width:135, borderRadius:100, margin:20, borderColor:'#BBBFBF', borderWidth:1, backgroundColor:'white'}}></Image>
            </View>
            <View style={{width: "100%", flexDirection: "row",justifyContent:"flex-start"}}>
              <View style={{width: "50%", paddingRight:5}}>
                <Text style={{color:'gray'}}>First Name</Text>
                <TextInput
                  multiline={false}
                  numberOfLines={1}
                  onChangeText={(input) => setfirstName(input)}
                  value={firstNameinput}
                  style={{borderColor: '#CCCFCF',borderWidth: 1,borderRadius:8,}}/>
              </View>
              <View style={{width: "50%", paddingLeft:5}}>
                <Text style={{color:'gray'}}>Last Name</Text>
                <TextInput
                  multiline={false}
                  numberOfLines={1}
                  onChangeText={(input) =>setlastName(input)}
                  value={lastNameinput}
                  style={{borderColor: '#CCCFCF',borderWidth: 1,borderRadius:8,}}/>
              </View>
            </View>
            <Text style={{color:'gray'}}>Description</Text>
            <TextInput
              multiline={true}
              numberOfLines={4}
              onChangeText={(input) => setdescriptions(input)}
              value={descriptionsinput}
              style={{borderColor: '#CCCFCF',borderWidth: 1,borderRadius:8}}/>
            
            <TextInput
              multiline={false}
              numberOfLines={1}
              onChangeText={(input) => setEmail(input)}
              value={Email}
              textContentType="emailAddress"
              placeholder="  example@email.com"
              style={{borderColor: '#CCCFCF',borderWidth: 1,borderRadius:8, marginTop:20,height:43}}/>
            
            
            <TextInput
                multiline={false}
                numberOfLines={1}
                onChangeText={(input) => setPassword(input)}
                value={Password}
                secureTextEntry={true}
                placeholder="  password"
                style={{borderColor: '#CCCFCF',borderWidth: 1,borderRadius:8, marginTop:20, height:43}}/>


          <Text style={{alignItems:'center', color:'red', fontSize:12}}>{messageError?messageError:null}</Text>
          <Button title="Submit" disabled={Password&&Email?false:true} onPress={handlesubmit}></Button>
        </SafeAreaView>
        
        
        </ScrollView>
      </View>
    
    </View>
);
};

export default Signup;
