import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TextInput, Button, SafeAreaView, ScrollView, Alert} from "react-native";
import styles from "../style/styles";
import axios from "axios";
import './global.js';
import color from '../style/color'

const Editrecipe = (props) => {
  const [RecipeName, setRecipeName] = useState('')
  const [Ingredients, setIngredients] = useState('')
  const [Directions, setDirections] = useState('')
  const [Picture, setPicture] = useState()
  const [RecipeID, setRecipeID] = useState(props.navigation.getParam('idrecipe'));
  const [showBox, setShowBox] = useState(true);
  const [messageError, setMessageError] = useState(null)


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

  const getDetailrecipe=()=>{
    axios.get(`${url}/api/recipes/${RecipeID}`).then(async function(response){
        setRecipeName(response.data[0].recipeName)
        setIngredients(response.data[0].ingredients)
        setDirections(response.data[0].directions)
        setPicture(response.data[0].picture)
    }).catch(function(error){
        console.log(error)
    })
  }

  const editDetailrecipe=()=>{
    axios.put(`${url}/api/recipes/update/${RecipeID}`, {"recipeName": RecipeName,"directions": Directions,"ingredients": Ingredients}).then(function(response){
        props.navigation.goBack()
    }).catch(function(error){
        setMessageError(error)
    })
  }


return (
    
    <View style={styles.container}>
        <View style={styles.page}>
            <ScrollView>
                <SafeAreaView style={{paddingTop:30, marginBottom:80, paddingHorizontal:'5%'}}>
                    <View><Text style={Styles.title}>Edit Recipe</Text></View>
                    
                    <View style={{alignItems: 'center',}}>
                        <Image source={{uri:Picture}} style={Styles.image}></Image>
                    </View>
                    <Text style={Styles.headderText}>RecipeName</Text>
                    <TextInput
                        multiline={false}
                        numberOfLines={1}
                        onChangeText={(input) => setRecipeName(input)}
                        value={RecipeName}
                        style={Styles.textInput}/>
                    
                    <Text style={Styles.headderText}>Ingredients</Text>
                    
                    <TextInput
                        multiline={true}
                        numberOfLines={4}
                        onChangeText={(input) => setIngredients(input)}
                        value={Ingredients}
                        style={Styles.textInput}/>
                    
                    <Text style={Styles.headderText}>Directions</Text>
                    <TextInput
                        multiline={true}
                        numberOfLines={4}
                        onChangeText={(input) => setDirections(input)}
                        value={Directions}
                        style={Styles.textInput}/>
                        
                    <Text style={styles.messageError}>{messageError}</Text>
                    <Button title={"Confirm"} onPress={editDetailrecipe}></Button>
                    <View style={Styles.line}></View>
                    <Button title={"Delete"} color="#FF8B69" onPress={()=> AlertDeleteBox()}></Button>
                </SafeAreaView>
            </ScrollView>
        </View>
    </View>
    
);
};

export default Editrecipe;
const Styles = StyleSheet.create({
title:{
    color:'black', 
    fontSize:24, 
    paddingTop:10, 
    fontWeight: 'bold'
},
image:{
    height:110, 
    width:110, 
    borderRadius:60, 
    margin:10, 
    borderColor: '#E1E6E6', 
    borderWidth:1
},
headderText:{
    fontWeight: 'bold', 
    marginTop:5, 
    marginBottom:5,
    fontSize:15
},
textInput:{
    borderColor: color.grayTextinput,
    borderWidth: 1,borderRadius:8, 
    marginTop:10, 
    marginBottom:10,
    paddingHorizontal: 10
},
line:{
    borderTopWidth:1,
    marginTop:20, 
    marginBottom:20, 
    borderColor:color.grayTextinput
}
})
