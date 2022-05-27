import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView, Button, Alert, RefreshControl, ActivityIndicator } from "react-native";
// import { Button } from "react-native-elements";
import styles from "../style/styles";
import axios from "axios";
import './global.js';
import firebase from 'firebase';
import 'firebase/firestore';
import color from '../style/color'


const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const Profile = (props) => {
  const auth = firebase.auth();
  const firestore = firebase.firestore();
  const [AuthID, setAuthId] = useState(auth.currentUser?.uid)
  const [userId, setUserId] = useState()
  const [refreshing, setRefreshing] = useState(false);
  const [AuthData, setAuthData] = useState()
  const [firstName, setFirstName] =useState()
  const [lastName, setLastName] =useState()
  const [descriptions, setDescriptions] =useState()
  const [photo, setPhoto] =useState()
  const [listRecipeUser, setListRecipeUser] = useState(false)
  const [Loading, setLoading] = useState(false)
 

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getRecipeUser();
    wait(1500).then(() => setRefreshing(false));
  }, []);

  
  useEffect(() => {
    getRecipeUser();
  }, []);

  const getRecipeUser=async()=>{
    setLoading(true)
    console.log(AuthID)
    const users = firestore.collection('Auth').doc(AuthID);
      const doc = await users.get();
      setUserId(doc.data()._id)
      console.log(doc.data()._id)
      await axios.get(`${url}/api/users/${doc.data()._id}`).then((response) => {
        setFirstName(response.data.firstName)
        setLastName(response.data.lastName)
        setDescriptions(response.data.descriptions)
        setPhoto(response.data.photo)
        getUserPost(doc.data()._id)
        setLoading(false)
      }).catch(function(error){
          console.log(error)
      })
  }

  
  const getUserPost=(id)=>{
    axios.get(`${url}/api/recipes/users/${id}`).then((response) => {
      setAuthData(response.data)
      setListRecipeUser(true)
    })
  }



  const handleSignout=()=>{
    Alert.alert(
      "SignOut",
      "Are you sure you want to Signout? ",
      [
          {
              text: "yes",
              onPress:()=>{
                auth.signOut().then(()=>{
                  props.navigation.navigate('Login')
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
  <ScrollView refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }>
    {Loading?<View style={{alignItems: 'center', marginTop:'50%'}}><ActivityIndicator  size="large" color="#00ff00" /></View>:
    <SafeAreaView style={{paddingTop:30, marginBottom:80, paddingHorizontal:'5%'}}>
        
        <View style={Styles.profileWrapper}>
          <View style={Styles.profileWrapperLeft}><Image source={{uri : photo}} style={Styles.profileImage}></Image></View>
          <View style={Styles.profileWrapperRight}>
            <Text style={Styles.profileName}>{firstName} {lastName}</Text>
            <Text style={Styles.profileDescription}>{descriptions}</Text>
          </View>
          <TouchableOpacity  style={Styles.iconWrapper} onPress={()=>props.navigation.navigate('Editprofile', {id:userId})}><Image source={require('../assets/edit.png')}  style={Styles.iconImage}/></TouchableOpacity>
        </View>

          <Button title={'Logout'} color="#FF8B69" onPress={handleSignout}></Button>
          

      
      <Text style={Styles.TitleText}>Post</Text>
      
      
        {listRecipeUser?
        <View style={Styles.postWrapper}>
          {AuthData.map((UserPost)=>
          <View key={UserPost._id} style={Styles.card}>
            <View style={{flexDirection:'row'}}>
              <View style={{flexDirection:'row', width:'90%'}}><Text style={{color:'gray',fontSize:6}}>{UserPost.date}</Text></View>
              <TouchableOpacity onPress={()=>props.navigation.navigate('Editrecipe', {idrecipe:UserPost._id})}><Image source={require('../assets/pencil.png')}  style={{width:15, height:15, tintColor:'gray'}}/></TouchableOpacity>
            </View>
            <View style={{alignItems:'center'}}><Image source={{uri : UserPost.picture}} style={Styles.cardImageRecipe}/></View>
            <Text style={Styles.cardRecipeName}>{UserPost.recipeName}</Text>
            <Text style={Styles.cardRecipeDetail} numberOfLines={2}>{UserPost.directions}</Text>
            <Text onPress={()=>props.navigation.navigate('Reivewrecipe', {idrecipe:UserPost._id})} style={{fontSize:8, color:'blue'}}>อ่านเพิ่มเติม</Text>
          </View>
          )}
        </View>:
        null
        }
        
       
        
        





      
    </SafeAreaView>
    }
    </ScrollView>
  </View>
</View>
);
};

export default Profile;
const Styles = StyleSheet.create({
profileWrapper:{
  flexDirection:'row', marginTop:10, marginBottom:10
},
profileWrapperLeft:{
  width:'30%'
},
profileWrapperRight:{
  marginLeft:10, flex:1, width:'65%'
},
profileImage:{
  height:90, width:90, borderRadius:50, borderColor: '#E1E6E6', borderWidth:1
},
profileName:{
  fontWeight:'bold', fontSize:18, marginBottom:7
},
profileDescription:{
  fontWeight:'bold', fontSize:9
},
iconWrapper:{
  width:'5%'
},
iconImage:{
  width:15, height:15, tintColor:'gray'
},
TitleText:{
  fontWeight:'bold', 
  marginTop:5, 
  marginBottom:5,
  marginLeft:5,
  fontSize:18
},
postWrapper:{
  flexDirection:'row', justifyContent:'space-between', flexWrap: 'wrap',
},
card:{
  height:170, width:'46%', borderRadius:10, backgroundColor:'#F1F1F1', padding:5, margin:5
},
cardImageRecipe:{
  height:80, width:80, margin:5, borderRadius:0
},
cardRecipeName:{
  fontWeight:'bold', fontSize:9
},
cardRecipeDetail:{
  fontSize:8
},
})