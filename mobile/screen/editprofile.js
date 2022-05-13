import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TextInput, Button, ActivityIndicator} from "react-native";
import styles from "../style/styles";
import axios from "axios";
import './global.js';
import firebase from 'firebase';
import * as ImagePicker from 'expo-image-picker';
import color from '../style/color'

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
        <View style={{paddingTop:30, marginBottom:80, paddingHorizontal:'5%'}}>
            <Text style={Styles.hearderTitle}>Edit Profile</Text>
            <View style={{alignItems: 'center',}}>
              {Loading?<ActivityIndicator style={Styles.loaging} size="large" color="#00ff00" />:<Image source={{uri:Photo}} style={Styles.imageProfile}></Image>}
              {Snapshot?<Button title="Upload picture profile" onPress={uploadUri}></Button>:<Text style={Styles.textChoosePicturn} onPress={_pickImage}>Choose a profile picture</Text>}
            </View>
          <View style={Styles.firstlastWrapper}>
            <View style={Styles.boxFirstlastName}>
              <Text style={Styles.titleText}>First Name</Text>
              <TextInput
                multiline={false}
                numberOfLines={1}
                onChangeText={(input) => setFirstName(input)}
                value={FirstName}
                style={Styles.textInputhalf}/>
            </View>
            <View style={Styles.boxFirstlastName}>
              <Text style={Styles.titleText}>Last Name</Text>
              <TextInput
                multiline={false}
                numberOfLines={1}
                onChangeText={(input) => setLastName(input)}
                value={LastName}
                style={Styles.textInputhalf}/>
            </View>
          </View>
          <Text style={Styles.titleText}>Description</Text>
          <TextInput
            multiline={true}
            numberOfLines={4}
            onChangeText={(input) => setDescription(input)}
            value={Description}
            style={Styles.textinputfull}/>
          <Button title="Confirm" onPress={editUser}></Button>
        </View>
      </View>
    </View>
);
};

export default Editprofile;


const Styles = StyleSheet.create({
  hearderTitle:{
    color:'black', 
    fontSize:26, 
    fontWeight: 'bold',
    marginBottom:0, 
    marginLeft:5
  },
  imageProfile:{
    height:135, 
    width:135, 
    borderRadius:100, 
    margin:20, 
    borderColor:'gray', 
    borderWidth:1
  },
  textInputhalf:{
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius:8, 
    paddingHorizontal: 10
  },
  textinputfull:{
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius:8, 
    marginBottom:30, 
    paddingHorizontal: 10
  },
  firstlastWrapper:{
    width: "100%", 
    flexDirection: "row",
    justifyContent:"flex-start"
  },
  boxFirstlastName:{
    width: "50%", 
    paddingRight:5
  },
  Loading:{
    height:135, 
    width:135, 
    borderRadius:100, 
    margin:20
  },
  titleText:{
    color:'black',
    fontSize:14,
    marginBottom:5,
    marginTop:5
  },
  textChoosePicturn:{
    color: color.bluesky,
    marginBottom:5
  }
})
