import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TextInput, Button, SafeAreaView, ScrollView} from "react-native";
import { color } from "react-native-reanimated";
import styles from "../style/styles";
import axios from "axios";
import './global.js';

const Reviewrecipe = (props) => {
  const [Bookmark, setBookmark] = useState(true)
  const [DetailRecipe, setDetailRecipe] = useState([]);
  const [RecipeID, setRecipeID] = useState(props.navigation.getParam('id'));
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
      <View style={styles.page}>
            <SafeAreaView style={{marginLeft:30, marginRight:30}}>
                
                <View style={{flexDirection:'row', paddingTop:30}}>
                    <View style={{width:'90%', flexDirection:'row'}}>
                        <View><Image source={{uri : DetailRecipe.photo}} style={{height:30, width:30, borderRadius:15}}></Image></View>
                            <View>
                                {/* <Text style={{fontSize:9}}>{DetailRecipe.firstName}</Text> */}
                                {/* <Text style={{color:'gray',fontSize:9}}>{DetailRecipe[0].date}</Text> */}
                            </View>
                    </View>
                        <View style={{flexDirection:'row-reverse'}}>
                            <Image source={require('../assets/bookmark.png')} style={{height:30, width:30, tintColor:Bookmark?'#F06C6A':'gray'}}/>
                        </View>
                </View>
                {/* <ScrollView>
                <View style={{alignItems: 'center',}}>
                    <Image source={{uri : DetailRecipe[0].picture}} style={{height:140, width:140, borderRadius:70, margin:10, borderColor:'gray', borderWidth:1, backgroundColor:'white'}}></Image>
                </View>
                <Text style={{ fontWeight: 'bold'}}>{DetailRecipe[0].recipeName}</Text>
                <View style={{height:10, borderTopWidth:1, borderColor:'gray', marginTop:10, marginBottom:10}}></View>
                <Text style={{ fontWeight: 'bold'}}>Ingredients</Text>
                
                <Text>{DetailRecipe[0].ingredients}</Text>
                
                <Text style={{ fontWeight: 'bold'}}>Directions</Text>
                
                <Text>{DetailRecipe[0].directions}</Text>

                <View style={{height:10, borderTopWidth:1, borderColor:'gray', marginTop:10, marginBottom:10}}></View>
            
            
                </ScrollView> */}
            </SafeAreaView>
        
        
            
      </View>
      
    </View>
    
);
};

export default Reviewrecipe;
