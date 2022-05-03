import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TextInput, Button, SafeAreaView, ScrollView} from "react-native";
import styles from "../style/styles";
import axios from "axios";
import './global.js';
import { TouchableOpacity } from "react-native-gesture-handler";
import firebase from 'firebase';
import 'firebase/firestore';

const Reviewrecipe = (props) => {
  const auth = firebase.auth();
  const firestore = firebase.firestore();
 const [AuthId, setAuthId] = useState(auth.currentUser?.uid)
  ///recipe detail state
  const [RecipeID, setRecipeID] = useState(props.navigation.getParam('idrecipe'));
  const [ownRecipe, setownRecipe] = useState('')
  const [photoProfile, setphotoProfile] = useState()
  const [directions, setdirections] = useState('')
  const [ingredients, setingredients] = useState('')
  const [recipeName, setrecipeName] = useState('')
  const [IDRecipe, setIDRecipe] = useState('')
  const [picRecipe, setpicRecipe] = useState()
  const [date, setdate] = useState('')
  const [userId, setuserId] = useState('')
///comment state
  const [Commentinput, setCommentinput] = useState('')
  const [getAllComment, setGetAllComment] = useState([])
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    getDetailRecipe();
    getComment();
    // (async () => {
    //   const users = firestore.collection('users').doc(auth.currentUser?.uid);
    //   const doc = await users.get();
    //   setFirstName(doc.data().firstName)
    //   setLastName(doc.data().lastName)
    //   setUserPhoto(doc.data().photo)
    // })();
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    setCurrentDate(
      date + '/' + month + '/' + year 
      + ' ' + hours + ':' + min + ':' + sec
    );
  }, []);

  const getDetailRecipe=()=>{
  
    axios.get(`${url}/api/recipes/${RecipeID}`).then((response) => {
      setownRecipe(response.data[0].firstName)
      setphotoProfile(response.data[0].photo)
      setdirections(response.data[0].directions)
      setingredients(response.data[0].ingredients)
      setrecipeName(response.data[0].recipeName)
      setpicRecipe(response.data[0].picture)
      setIDRecipe(response.data[0]._id)
      setdate(response.data[0].date)
      setuserId(response.data[0].userId)
    }).catch((err)=>{
      console.log(err);
    })
    


  }

  const postComment=async()=>{
    const users = firestore.collection('Auth').doc(AuthId);
    const doc = await users.get();
    axios.post(`${url}/api/userComments/create`, 
    {"comment": Commentinput,
    "userId": doc.data()._id,
    "date": currentDate,
    "recipeId": RecipeID,}).then((response) => {
      setCommentinput('')
      getComment()
      console.log(response.data)
      console.log('Success')
      
    }).catch((err)=>{
      console.log(err);
    })
  }
/// รอเปลี่ยน api 
  const getComment=()=>{
    axios.get(`${url}/api/userComments/recipes/${props.navigation.getParam('idrecipe')}`).then((response) => {
      setGetAllComment(response.data)
    })
  }

  
return (
    
    <View style={styles.container}>
      <View style={styles.page}>
        <ScrollView>
            <SafeAreaView style={{marginLeft:30, marginRight:30}}>
                
                <View style={{flexDirection:'row', paddingTop:30}}>
                    <View style={{width:'90%', flexDirection:'row'}}>
                        <View><Image source={{uri : photoProfile}} style={{height:30, width:30, borderRadius:15}}></Image></View>
                            <View>
                                <Text style={{fontSize:9}}>{ownRecipe}</Text>
                                <Text style={{color:'gray',fontSize:9}}>{date}</Text>
                            </View>
                    </View>
                        <SafeAreaView style={{flexDirection:'row-reverse'}}>
                            <Image source={require('../assets/bookmark.png')} style={{height:30, width:30, tintColor:true?'#F06C6A':'gray'}}/>
                        </SafeAreaView>
                </View>

                
                <View style={{alignItems: 'center',}}>
                    <Image source={{uri : picRecipe}} style={{height:140, width:140, borderRadius:70, margin:10, borderColor:'gray', borderWidth:1, backgroundColor:'white'}}></Image>
                </View>
                <Text style={{ fontWeight: 'bold'}}>{recipeName}</Text>
                <View style={{height:10, borderTopWidth:1, borderColor:'gray', marginTop:10, marginBottom:10}}></View>
                <Text style={{ fontWeight: 'bold'}}>Ingredients</Text>
                
                <Text>{ingredients}</Text>
                
                <Text style={{ fontWeight: 'bold'}}>Directions</Text>
                
                <Text>{directions}</Text>

                <View style={{height:10, borderTopWidth:1, borderColor:'gray', marginTop:10, marginBottom:10}}></View>
            

            {/* --------------------------------comment------------------------------------ */}
                  <View style={{borderTopWidth:1}}></View>
                  <View><Text style={{marginTop:10, marginBottom:10, fontWeight:'bold', fontSize:20}}>comment</Text></View>
              {getAllComment.map((items) =>
                  <View key={items._id} style={{flexDirection:'row', marginBottom:10}}>
                    <View style={{flexDirection:'row', margin:5}}>
                      <Image source={{uri:items.photo}} style={{height:30, width:30, borderRadius:50, borderColor: '#E5E7E9', borderWidth:1}}/>
                    </View>
                    <View style={{borderRadius:10, backgroundColor:'#E5E7E9', padding:10, width:'90%'}}>
                      <Text style={{fontWeight:'bold', fontSize:13}}>{items.firstName} {items.lastName} <Text style={{fontSize:8,fontWeight:'normal'}}>{items.date}</Text></Text>
                      <Text style={{fontSize:13}}>{items.comment}</Text>
                    </View>
                  </View>
              )}

                  
                  <View style={{flexDirection:'row', marginTop:20}}>
                    <View style={{width:'90%'}}>
                      <TextInput
                        multiline={true}
                        numberOfLines={1}
                        onChangeText={(input) => setCommentinput(input)}
                        value={Commentinput}
                        placeholder="Write a comment"
                        style={{borderColor: '#E1E6E6',borderWidth: 1,borderRadius:8, padding:5}}/>
                    </View>
                    <View><TouchableOpacity style={{padding:10,borderRadius:8}} disabled={Commentinput == ''?true:false} onPress={postComment}><Text style={{color:Commentinput==''?'#AFE6F5':'#5BD4F5'}}>Post</Text></TouchableOpacity></View>
                    </View>
                  
          </SafeAreaView>
        </ScrollView>
      </View>
    </View>
    
);
};

export default Reviewrecipe;
