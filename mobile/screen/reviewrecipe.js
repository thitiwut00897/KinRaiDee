import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TextInput, Button, SafeAreaView, ScrollView} from "react-native";
import { color } from "react-native-reanimated";
import styles from "../style/styles";
import axios from "axios";
import './global.js';
import { TouchableOpacity } from "react-native-gesture-handler";

const Reviewrecipe = (props) => {
  const [Bookmark, setBookmark] = useState(true)
  const [DetailRecipe, setDetailRecipe] = useState([]);
  const [RecipeID, setRecipeID] = useState(props.navigation.getParam('idrecipe'));
  const [Comment, setComment] = useState('')
  useEffect(() => {
    getDetailRecipe();
  }, []);

  const getDetailRecipe=()=>{
    axios.get(`${url}/api/recipes/${RecipeID}`).then((response) => {
        setDetailRecipe(response.data)
        console.log(response.data)
    }).catch((err)=>{
      console.log(err);
    })
  }
  
return (
    
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.page}>
            {/* <SafeAreaView style={{marginLeft:30, marginRight:30}}> */}
                
                <View style={{flexDirection:'row', paddingTop:30}}>
                    <View style={{width:'90%', flexDirection:'row'}}>
                        <View><Image source={{uri : DetailRecipe.photo}} style={{height:30, width:30, borderRadius:15}}></Image></View>
                            <View>
                                {/* <Text style={{fontSize:9}}>{DetailRecipe.firstName}</Text> */}
                                {/* <Text style={{color:'gray',fontSize:9}}>{DetailRecipe[0].date}</Text> */}
                            </View>
                    </View>
                        <SafeAreaView style={{flexDirection:'row-reverse'}}>
                            <Image source={require('../assets/bookmark.png')} style={{height:30, width:30, tintColor:Bookmark?'#F06C6A':'gray'}}/>
                        </SafeAreaView>
                </View>

                <View style={{marginLeft:30, marginRight:30}}>
                {/* <View style={{alignItems: 'center',}}>
                    <Image source={{uri : DetailRecipe[0].picture}} style={{height:140, width:140, borderRadius:70, margin:10, borderColor:'gray', borderWidth:1, backgroundColor:'white'}}></Image>
                </View>
                <Text style={{ fontWeight: 'bold'}}>{DetailRecipe[0].recipeName}</Text>
                <View style={{height:10, borderTopWidth:1, borderColor:'gray', marginTop:10, marginBottom:10}}></View>
                <Text style={{ fontWeight: 'bold'}}>Ingredients</Text>
                
                <Text>{DetailRecipe[0].ingredients}</Text>
                
                <Text style={{ fontWeight: 'bold'}}>Directions</Text>
                
                <Text>{DetailRecipe[0].directions}</Text>

                <View style={{height:10, borderTopWidth:1, borderColor:'gray', marginTop:10, marginBottom:10}}></View> */}
            {/* </SafeAreaView> */}

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
                  </View>
      </View>
      </ScrollView>
    </View>
    
);
};

export default Reviewrecipe;
