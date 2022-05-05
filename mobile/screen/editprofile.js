import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TextInput, Button, ActivityIndicator} from "react-native";
import styles from "../style/styles";
import axios from "axios";
import './global.js';
import firebase from 'firebase';
import * as ImagePicker from 'expo-image-picker';

const Editprofile = (props) => {
  const auth = firebase.auth();
  const [AuthID, setAuthId] = useState(auth.currentUser?.uid)
  const [userId, setUserID] = useState(props.navigation.getParam('id'))
  const [FirstName, setFirstName] = useState('')
  const [LastName, setLastName] = useState('')
  const [Description, setDescription] = useState('')
  const [Photo, setPhoto] = useState()
  const [Snapshot, setSnapshot] = useState(null)
  const [Loading, setLoading] = useState(false)
  useEffect(() => {
    getUserDetail()
  }, []);


  const getUserDetail=()=>{
    axios.get(`${url}/api/users/${userId}`).then(async function(response){
      setFirstName(response.data.firstName)
      setLastName(response.data.lastName)
      setDescription(response.data.descriptions)
      setPhoto(response.data.photo)
    }).catch(function(error){
        console.log(error)
    })
  }

  const editUser=()=>{
    axios.put(`${url}/api/users/update/${userId}`, {"firstName": FirstName,"lastName": LastName,"descriptions": Description, "photo":Photo}).then(function(response){
      props.navigation.goBack()
      console.log('edit user success')
    }).catch(function(error){
        setMessageError(error)
    })
  }

  const _pickImage=async()=>{
    setLoading(true)
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (!pickerResult.cancelled){
      uploadImageAuth(pickerResult.uri, 'test-image.jpeg')
      .then(()=>{
        // setLoading(false)
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
    setSnapshot(snapshot)
    
    console.log('upload seccess')
    
    // Return the URL
    // return remoteURL;
}

const uploadUri=async()=>{
  // setLoading(true)
  const remoteURL = await Snapshot.ref.getDownloadURL();
    setPhoto(remoteURL)
   return setLoading(false)
}



return (
    <View style={styles.container}>
      
      <View style={styles.page}>
        <View style={{marginLeft:30, marginRight:30}}>
            <View><Text style={{color:'black', fontSize:24, paddingTop:10}}>Edit Profile</Text></View>
            <View style={{alignItems: 'center',}}>
              {Loading?<ActivityIndicator style={{height:135, width:135, borderRadius:100, margin:20}} size="large" color="#00ff00" />:<Image source={{uri:Photo}} style={{height:135, width:135, borderRadius:100, margin:20, borderColor:'gray', borderWidth:1}}></Image>}
                
                {/* <Text style={{color: '#43A1FF',}} onPress={_pickImage}>Choose a profile picture</Text> */}
                {Snapshot?<Button title="Upload picture profile" onPress={uploadUri}></Button>:<Text style={{color: '#43A1FF',marginBottom:5}} onPress={_pickImage}>Choose a profile picture</Text>}
            </View>
          <View style={{width: "100%", flexDirection: "row",justifyContent:"flex-start"}}>
            <View style={{width: "50%", paddingRight:5}}>
              <Text style={{color:'gray'}}>First Name</Text>
              <TextInput
                multiline={false}
                numberOfLines={1}
                onChangeText={(input) => setFirstName(input)}
                value={FirstName}
                style={{borderColor: 'gray',borderWidth: 1,borderRadius:8, paddingHorizontal: 10}}/>
            </View>
            <View style={{width: "50%", paddingLeft:5}}>
              <Text style={{color:'gray'}}>Last Name</Text>
              <TextInput
                multiline={false}
                numberOfLines={1}
                onChangeText={(input) => setLastName(input)}
                value={LastName}
                style={{borderColor: 'gray',borderWidth: 1,borderRadius:8,paddingHorizontal: 10}}/>
            </View>
          </View>
          <Text style={{color:'gray'}}>Description</Text>
          <TextInput
            multiline={true}
            numberOfLines={4}
            onChangeText={(input) => setDescription(input)}
            value={Description}
            style={{borderColor: 'gray',borderWidth: 1,borderRadius:8, marginBottom:30, paddingHorizontal: 10}}/>
          <Button title="Confirm" onPress={editUser}></Button>
        </View>
        
        
    
      </View>
    
    </View>
);
};

export default Editprofile;
