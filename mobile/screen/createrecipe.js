import React, { useState, useEffect} from "react";
import { View, Text, StyleSheet, Image, TextInput, Button, SafeAreaView, ScrollView} from "react-native";
import styles from "../style/styles";

const Createprofile = (props) => {
  const [RecipeName, setRecipeName] = useState('')
  const [Ingredients, setIngredients] = useState('')
  const [Directions, setDirections] = useState('')
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
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

return (
    
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.page}>
            <SafeAreaView style={{marginLeft:30, marginRight:30, paddingBottom:'30%'}}>
                <View><Text style={{color:'black', fontSize:24, paddingTop:10, fontWeight: 'bold'}}>Create Recipe</Text></View>
                <View style={{alignItems: 'center',}}>
                    <Image source={require('../assets/profilefacebook.jpg')} style={{height:110, width:110, borderRadius:60, margin:10, borderColor: '#E1E6E6', borderWidth:1}}></Image>
                </View>
                <Text>RecipeName</Text>
                <TextInput
                    multiline={false}
                    numberOfLines={1}
                    onChangeText={(RecipeName) => setRecipeName({RecipeName})}
                    value={RecipeName}
                    // textContentType=""
                    placeholder="  ข้าวผัด"
                    style={{borderColor: '#E1E6E6',borderWidth: 1,borderRadius:8, marginTop:10, height:43}}/>
                
                <Text>Ingredients</Text>
                
                <TextInput
                    multiline={true}
                    numberOfLines={4}
                    onChangeText={(Ingredients) => setIngredients({Ingredients})}
                    value={Ingredients}
                    // placeholder="  password"
                    style={{borderColor: '#E1E6E6',borderWidth: 1,borderRadius:8, marginTop:20,}}/>
                
                <Text>Directions</Text>
                <TextInput
                    multiline={true}
                    numberOfLines={4}
                    onChangeText={(Directions) => setDirections({Directions})}
                    value={Directions}
                    // placeholder="  confirm password"
                    style={{borderColor: '#E1E6E6',borderWidth: 1,borderRadius:8, marginTop:20, marginBottom:20,}}/>
                
            
            
            <Button title="Confirm" onPress={()=> {axios.post(`${url}/api/recipes/create`, {"recipeName":RecipeName,"directions":Directions,"ingredients":Ingredients,"date":currentDate,"picture":'',"userId":''}), props.navigation.navigate("Main")}}></Button>

            
            </SafeAreaView>
        
        
            
      </View>
      </ScrollView>
    </View>
    
);
};

export default Createprofile;
