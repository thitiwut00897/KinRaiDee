import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TextInput, Button, SafeAreaView, ScrollView, Alert} from "react-native";
import styles from "../style/styles";
import axios from "axios";
import './global.js';

const Editrecipe = (props) => {
  const [RecipeName, setRecipeName] = useState('')
  const [Ingredients, setIngredients] = useState('')
  const [Directions, setDirections] = useState('')
  const [RecipeID, setRecipeID] = useState(props.navigation.getParam('idrecipe'));
  const [RecipeDetail, setRecipeDetail] = useState([])
  const [showBox, setShowBox] = useState(true);

  const AlertDeleteBox=()=>{
      Alert.alert(
        "Delete ☹",
        "Are you sure you want to delete a recipe? ",
        [
            {
                text: "yes",
                onPress:()=>{
                    axios.delete(`${url}/api/recipes/delete/${RecipeID}`), props.navigation.navigate("Main")
                    setShowBox(false);
                }
            },
            {
                text:"No"
            },
        ]
      );
  }

  useEffect(() => {
    getDetailrecipe()
  }, []);

  function getDetailrecipe(){
    axios.get(`${url}/api/recipes/${RecipeID}`).then(async function(response){
        setRecipeDetail(response.data)
        console.log(RecipeDetail)
    }).catch(function(error){
        console.log(error)
    })
  }

return (
    
    <View style={styles.container}>
    <ScrollView>
      <View style={styles.page}>
            <SafeAreaView style={{marginLeft:30, marginRight:30}}>
                <View><Text style={{color:'black', fontSize:24, paddingTop:10, fontWeight: 'bold'}}>Edit Recipe</Text></View>
                
                <View style={{alignItems: 'center',}}>
                    <Image source={require('../assets/profilefacebook.jpg')} style={{height:110, width:110, borderRadius:60, margin:10, borderColor: '#E1E6E6', borderWidth:1}}></Image>
                </View>
                <Text>RecipeName</Text>
                <TextInput
                    multiline={false}
                    numberOfLines={1}
                    onChangeText={(RecipeNameinput) => setRecipeName({RecipeNameinput})}
                    value={RecipeDetail.recipeName}
                    style={{borderColor: '#E1E6E6',borderWidth: 1,borderRadius:8, marginTop:10, height:43}}/>
                
                <Text>Ingredients</Text>
                
                <TextInput
                    multiline={true}
                    numberOfLines={4}
                    onChangeText={(Ingredientsinput) => setIngredients({Ingredientsinput})}
                    value={RecipeDetail.ingredients}
                    style={{borderColor: '#E1E6E6',borderWidth: 1,borderRadius:8, marginTop:20,}}/>
                
                <Text>Directions</Text>
                <TextInput
                    multiline={true}
                    numberOfLines={4}
                    onChangeText={(Directionsinput) => setDirections({Directionsinput})}
                    value={RecipeDetail.directions}
                    style={{borderColor: '#E1E6E6',borderWidth: 1,borderRadius:8, marginTop:20, marginBottom:20,}}/>
                <Button title={"Confirm"} onPress={()=> {axios.put(`${url}/api/recipes/update/${RecipeID}`, {"recipeName": RecipeName,"directions": Directions,"ingredients": Ingredients}), props.navigation.navigate("Main")} }></Button>
                <View style={{borderTopWidth:1,marginTop:20, marginBottom:20}}></View>
                <Button title={"Delete"} color="#FF8B69" onPress={()=> AlertDeleteBox()}></Button>
                

                
            
            </SafeAreaView>
            
        
            
      </View>
      </ScrollView>
    </View>
    
);
};

export default Editrecipe;
