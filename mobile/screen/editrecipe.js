import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, Button} from "react-native";
import styles from "../style/styles";

const Editrecipe = (props) => {
  const [RecipeName, setRecipeName] = useState('')
  const [Ingredients, setIngredients] = useState('')
  const [Directions, setDirections] = useState('')
return (
    
    <View style={styles.container}>
      <View style={styles.page}>
            <View style={{marginLeft:30, marginRight:30}}>
                <View><Text style={{color:'black', fontSize:24, paddingTop:10, fontWeight: 'bold'}}>Edit Recipe</Text></View>
                <View style={{alignItems: 'center',}}>
                    <Image source={require('../assets/profilefacebook.jpg')} style={{height:110, width:110, borderRadius:60, margin:10, borderColor:'gray', borderWidth:1}}></Image>
                </View>
                <Text>RecipeName</Text>
                <TextInput
                    multiline={false}
                    numberOfLines={1}
                    onChangeText={(RecipeName) => setRecipeName({RecipeName})}
                    value={RecipeName}
                    // textContentType=""
                    // placeholder="  ข้าวผัด"
                    style={{borderColor: 'gray',borderWidth: 1,borderRadius:8, marginTop:10, height:43}}/>
                
                <Text>Ingredients</Text>
                
                <TextInput
                    multiline={true}
                    numberOfLines={4}
                    onChangeText={(Ingredients) => setIngredients({Ingredients})}
                    value={Ingredients}
                    // placeholder="  password"
                    style={{borderColor: 'gray',borderWidth: 1,borderRadius:8, marginTop:20,}}/>
                
                <Text>Directions</Text>
                <TextInput
                    multiline={true}
                    numberOfLines={4}
                    onChangeText={(Directions) => setDirections({Directions})}
                    value={Directions}
                    // placeholder="  confirm password"
                    style={{borderColor: 'gray',borderWidth: 1,borderRadius:8, marginTop:20, marginBottom:20,}}/>
                
            
            
            <Button title="Confirm" onPress={()=> props.navigation.navigate("Main")}></Button>
            </View>
        
        
            
      </View>
      
    </View>
    
);
};

export default Editrecipe;
