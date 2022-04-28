import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TextInput, Button, SafeAreaView, ScrollView} from "react-native";
import styles from "../style/styles";
import axios from "axios";
import './global.js';
import { TouchableOpacity } from "react-native-gesture-handler";

const Reviewrecipe = (props) => {
  const [ownRecipe, setownRecipe] = useState('')
  const [photoProfile, setphotoProfile] = useState()
  const [directions, setdirections] = useState('')
  const [ingredients, setingredients] = useState('')
  const [recipeName, setrecipeName] = useState('')
  const [IDRecipe, setIDRecipe] = useState('')
  const [picRecipe, setpicRecipe] = useState()
  const [date, setdate] = useState('')
  const [userId, setuserId] = useState('')

  const [Bookmark, setBookmark] = useState(true)
  const [DetailRecipe, setDetailRecipe] = useState([]);
  const [RecipeID, setRecipeID] = useState(props.navigation.getParam('idrecipe'));
  const [Comment, setComment] = useState('')
  useEffect(() => {
    getDetailRecipe();
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
        // setDetailRecipe(response.data)
        // console.log(response.data[0].photo)
    }).catch((err)=>{
      console.log(err);
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
                            <Image source={require('../assets/bookmark.png')} style={{height:30, width:30, tintColor:Bookmark?'#F06C6A':'gray'}}/>
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
                  <View><Text style={{marginTop:10, marginBottom:10, fontWeight:'bold'}}>comment</Text></View>

                  <View style={{flexDirection:'row' }}>
                    <View style={{flexDirection:'row', margin:5}}>
                      <Image source={{}} style={{height:35, width:35, borderRadius:50, borderColor: 'black', borderWidth:1}}/>
                    </View>
                    <View style={{borderRadius:10, backgroundColor:'#E8EDED', padding:10, width:'90%'}}>
                      <Text style={{fontWeight:'bold', fontSize:13}}>thitiwut time</Text>
                      <Text style={{fontSize:13}}>comment detailcommentasda</Text>
                    </View>
                  </View>
                  <View style={{flexDirection:'row', marginTop:20}}>
                    <View style={{width:'90%'}}>
                      <TextInput
                        multiline={true}
                        numberOfLines={1}
                        onChangeText={(input) => setComment(input)}
                        value={Comment}
                        placeholder="Write a comment"
                        style={{borderColor: '#E1E6E6',borderWidth: 1,borderRadius:8, padding:5}}/>
                    </View>
                    <View><TouchableOpacity style={{padding:10,borderRadius:8}} disabled={Comment == ''?true:false}><Text style={{color:Comment==''?'#AFE6F5':'#5BD4F5'}}>Post</Text></TouchableOpacity></View>
                    </View>
                  
          </SafeAreaView>
        </ScrollView>
      </View>
    </View>
    
);
};

export default Reviewrecipe;
