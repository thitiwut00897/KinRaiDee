import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, Button, SafeAreaView, ScrollView } from "react-native";
import styles from "../style/styles";
import * as ImagePicker from 'expo-image-picker';
import axios from "axios";
import * as firebase from 'firebase';
import 'firebase/firestore';


const Createprofile = (props) => {
  const [AuthID, setAuthId] = useState(props.navigation.getParam('user'))
  const firestore = firebase.firestore();
  const [Email, setEmail] = useState(props.navigation.getParam('email'))
  const [Password, setPassword] = useState(props.navigation.getParam('password'))

  const [descriptionsinput, setdescriptions] = useState(null)
  const [firstNameinput, setfirstName] = useState(null)
  const [lastNameinput, setlastName] = useState(null)
  const [photoUrl, setPhotoUrl] = useState('https://firebasestorage.googleapis.com/v0/b/kinraidee-d5af8.appspot.com/o/asset%2Fuser%20(1).png?alt=media&token=798e3f66-768d-444d-9b8a-0e5259e9bb62')



const _pickImage=async()=>{
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (!pickerResult.cancelled){
      uploadImageAuth(pickerResult.uri, 'test-image.jpeg')
      .then(()=>{
        console.log('seccess upload')
      }).catch((e)=>{
          console.log(e)
      })    
           
  }
    
  }
const uploadImageAuth= async(uri, name)=>{
  const response = await fetch(uri);
    const blob = await response.blob();
    var ref = await firebase.storage().ref().child(`Auth/${AuthID}`+ name);
    const snapshot = await ref.put(blob, { contentType: "image/png" });

    // Create a download URL
    const remoteURL = await snapshot.ref.getDownloadURL();
    setPhotoUrl(remoteURL)
    console.log('upload seccess')
    
    // Return the URL
    // return remoteURL;
}

const createUserDocument = async (userid)=>{

  if (!userid)return;
  const userRef = firestore.doc(`Auth/${AuthID}`)
  const snapshot = await userRef.get();
  if (!snapshot.exists){
    const _id = userid;
    try{
      userRef.set({
        _id,
      })
      console.log('create Success')
    }catch(error){
      console.log('error in create user'. error)
    }
  }
}

  const createProfile=async()=>{
    await axios.post(`${url}/api/users/create`, {"email":Email, "password":Password, "firstName":firstNameinput, "lastName":lastNameinput, "descriptions":descriptionsinput,"photo":photoUrl}).then(async function(response){
        await createUserDocument(response.data._id)
        console.log('create Success')
        props.navigation.popToTop()
    }).catch(function(error){
      console.log(error)
    })
  }




return (
    <View style={styles.container}>
      <View><Text style={{color:'white', paddingLeft:'10%', fontSize:26, fontWeight: 'bold'}}>Register</Text></View>
      <View style={styles.page}>
      <ScrollView>
        <SafeAreaView style={{marginLeft:30, marginRight:30}}>
          
            <View style={{alignItems: 'center',}}>
              <Image source={{uri:photoUrl}} style={{height:135, width:135, borderRadius:100, margin:20, borderColor:'#BBBFBF', borderWidth:1, backgroundColor:'white'}}></Image>
              <Text onPress={_pickImage}>Choose a profile picture</Text>
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
                onChangeText={(input) => setlastName(input)}
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
            style={{borderColor: '#CCCFCF',borderWidth: 1,borderRadius:8, marginBottom:30}}/>
          
          <Button title="Register" onPress={createProfile}></Button>
        </SafeAreaView>
        </ScrollView>
        
    
      </View>
    
    </View>
);
};

export default Createprofile;
