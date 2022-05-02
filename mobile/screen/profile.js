import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView, Button, Alert, RefreshControl, ActivityIndicator } from "react-native";
// import { Button } from "react-native-elements";
import styles from "../style/styles";
import axios from "axios";
import './global.js';
import * as firebase from 'firebase';
import 'firebase/firestore';


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
  const [AuthList, setAuthList] = useState()

  const [StatusPost, setStatusPost] = useState(true)
  const [StatusFav, setStatusFav] = useState(false)

  const [UserPost, setUserPost] = useState([])
  const [recipeUser, setRecipeUser] = useState([])


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
    const users = firestore.collection('Auth').doc(AuthID);
      const doc = await users.get();
      setUserId(doc.data()._id)
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
  <ScrollView refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }>
    {Loading?<View style={{alignItems: 'center', marginTop:'50%'}}><ActivityIndicator  size="large" color="#00ff00" /></View>:
    <SafeAreaView style={{marginLeft:30, marginRight:30, flex:1,marginBottom:80}}>
        
        <View style={{ flexDirection:'row', marginTop:30, marginBottom:10}}>
          <View style={{width:'30%'}}><Image source={{uri : photo}} style={{height:90, width:90, borderRadius:50, borderColor: '#E1E6E6', borderWidth:1}}></Image></View>
          <View style={{marginLeft:10, flex:1, width:'65%'}}>
            <Text style={{fontWeight:'bold', fontSize:18, marginBottom:7}}>{firstName} {lastName}</Text>
            <Text style={{fontWeight:'bold', fontSize:9}}>{descriptions}</Text>
          </View>
          <TouchableOpacity  style={{width:'5%'}} onPress={()=>props.navigation.navigate('Editprofile', {id:userId})}><Image source={require('../assets/edit.png')}  style={{width:15, height:15, tintColor:'gray'}}/></TouchableOpacity>
        </View>

          <Button title={'Logout'} color="#FF8B69" onPress={handleSignout}></Button>
          

      
      <Text style={{fontWeight:'bold', fontSize:15, marginTop:5, marginBottom:5}}>Post</Text>
      
      
        {listRecipeUser?
        <View style={{flexDirection:'row', justifyContent:'flex-start', flexWrap: 'wrap',}}>
          {AuthData.map((UserPost)=>
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
