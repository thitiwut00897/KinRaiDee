import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView, Button, Alert } from "react-native";
// import { Button } from "react-native-elements";
import styles from "../style/styles";
import axios from "axios";
import './global.js';
import * as firebase from 'firebase';
import 'firebase/firestore';

const Profile = (props) => {
  const auth = firebase.auth();
  const firestore = firebase.firestore();
  const [AuthID, setAuthId] = useState(auth.currentUser?.uid)
  const [AuthList, setAuthList] = useState()

  const [StatusPost, setStatusPost] = useState(true)
  const [StatusFav, setStatusFav] = useState(false)

  const [UserPost, setUserPost] = useState([])
  const [recipeUser, setRecipeUser] = useState([])

  const [firstName, setFirstName] =useState()
  const [lastName, setLastName] =useState()
  const [descriptions, setDescriptions] =useState()
  const [photo, setPhoto] =useState()

  useEffect(() => {
    (async () => {
      const users = firestore.collection('users').doc(AuthID);
      const doc = await users.get();
      setFirstName(doc.data().firstName)
      setLastName(doc.data().lastName)
      setDescriptions(doc.data().descriptions)
      setPhoto(doc.data().photo)
    })();
    getUserPost()
    
    // getAuth();
    // getUserPost();
  }, []);

  
  const getUserPost=()=>{
    axios.get(`${url}/api/recipes/users/${AuthID}`).then((response) => {
      setRecipeUser(response.data)
    })
  }
  

// useEffect(() => {
//   getDetailrecipe()
// }, []);

// function getDetailrecipe(){
//   axios.get(`${url}/api/recipes/${RecipeID}`).then(async function(response){
//       setRecipeUser(response.data)
//       console.log(RecipeDetail)
//   }).catch(function(error){
//       console.log(error)
//   })
// }

  const handleSignout=()=>{
    Alert.alert(
      "SignOut",
      "Are you sure you want to Signout? ",
      [
          {
              text: "yes",
              onPress:()=>{
                auth.signOut().then(()=>{
                  props.navigation.popToTop()
                }).catch((error)=>{
                  console.log(error)
                })
              }
          },
          {
              text:"No"
          },
      ]
    );
  }

return (
  <View style={styles.container}>
  <View style={styles.page}>
  <ScrollView>
    <SafeAreaView style={{marginLeft:30, marginRight:30, flex:1,marginBottom:80}}>

      <View style={{ flexDirection:'row', marginTop:30}}>
        <View><Image source={{uri : photo}} style={{height:100, width:100, borderRadius:50, borderColor: '#E1E6E6', borderWidth:1}}></Image></View>
          <View style={{marginLeft:10, flex:1}}>
            <Text style={{fontWeight:'bold', fontSize:20, marginBottom:7}}>{firstName} {lastName}</Text>
            <Text style={{fontWeight:'bold', fontSize:10}}>{descriptions}</Text>
            {/* <Button title={'Edit'} backgroundColor='yellow'><Text>Edit</Text></Button> */}
          </View>
        </View>

          <Button title={'Logout'} color="#FF8B69" onPress={handleSignout}></Button>
          

      
      <Text style={{fontWeight:'bold'}}>Post</Text>
      
      
        
        <View style={{flexDirection:'row', justifyContent:'flex-start', flexWrap: 'wrap',}}>
          {recipeUser.map((UserPost)=>
          <View key={UserPost._id} style={{height:170, width:145, borderRadius:10, backgroundColor:'#EBEBEB', padding:5, marginRight:5, marginBottom:5}}>
            <View style={{flexDirection:'row'}}>
              <View style={{flexDirection:'row', width:'90%'}}><Text style={{color:'gray',fontSize:6}}>{UserPost.date}</Text></View>
              <TouchableOpacity onPress={()=>props.navigation.navigate('Editrecipe', {idrecipe:UserPost._id})}><Image source={require('../assets/pencil.png')}  style={{width:15, height:15, tintColor:'gray'}}/></TouchableOpacity>
            </View>
            <View style={{alignItems:'center'}}><Image source={{uri : UserPost.picture}} style={{height:80, width:80, margin:5, borderRadius:0}}/></View>
            <Text style={{fontWeight:'bold', fontSize:9}}>{UserPost.recipeName}</Text>
            <Text style={{fontSize:8}} numberOfLines={2}>{UserPost.directions}</Text><Text onPress={()=>props.navigation.navigate('Reivewrecipe', {idrecipe:UserPost._id})} style={{fontSize:8, color:'blue'}}>อ่านเพิ่มเติม</Text>
          </View>
          )}
        </View>
        
       
        
        





      
    </SafeAreaView>
    </ScrollView>
  </View>
</View>
);
};

export default Profile;
