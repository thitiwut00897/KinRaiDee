import React, { useState, useEffect} from "react";
import { View, Text, StyleSheet, Image, TextInput, Button, SafeAreaView, ScrollView} from "react-native";
import styles from "../style/styles";
import * as firebase from 'firebase';
import * as ImagePicker from 'expo-image-picker';
import 'firebase/auth';
import axios from "axios";
import 'firebase/firestore';

const Createrecipe = (props) => {
  const auth = firebase.auth();
  const firestore = firebase.firestore();
  const [RecipeName, setRecipeName] = useState(null)
  const [Ingredients, setIngredients] = useState(null)
  const [Directions, setDirections] = useState(null)
  const [currentDate, setCurrentDate] = useState('');
  const [picture, setpicture] = useState('https://firebasestorage.googleapis.com/v0/b/kinraidee-d5af8.appspot.com/o/asset%2Fbibimbap.png?alt=media&token=0beca7bf-2b86-4368-9af8-e458091d7753');
  const [AuthID, setAuthId] = useState(auth.currentUser?.uid)
  const [messageError, setMessageError] = useState(null)

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



  const _pickImage=async()=>{
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (!pickerResult.cancelled){
      uploadImageAuth(pickerResult.uri, 'test-image.jpeg')
      .then(()=>{
        console.log('seccess upload')
      }).catch((e)=>{
          console.log(e)
      })    
           
  }
    
  }
const uploadImageAuth= async(uri, name)=>{
  const response = await fetch(uri);
    const blob = await response.blob();
    var ref = await firebase.storage().ref().child(`RecipePicture/${AuthID}`+ name);
    const snapshot = await ref.put(blob, { contentType: "image/png" });
    const remoteURL = await snapshot.ref.getDownloadURL();
    setpicture(remoteURL)
    console.log('upload seccess')

}


  const createRecipe=async()=>{
    const users = firestore.collection('Auth').doc(AuthID);
    const doc = await users.get();
    axios.post(`${url}/api/recipes/create`, {"userId":doc.data()._id, "recipeName":RecipeName, "directions":Directions, "ingredients":Ingredients, "date":currentDate,"picture":picture, "status":false}).then(async function(response){
        setpicture('https://firebasestorage.googleapis.com/v0/b/kinraidee-d5af8.appspot.com/o/asset%2Fbibimbap.png?alt=media&token=0beca7bf-2b86-4368-9af8-e458091d7753')
        setIngredients(null)
        setDirections(null)
        setRecipeName(null)
        props.navigation.goBack()
    }).catch(function(error){
      setMessageError(error)
    })
  }

return (
    
    <View style={styles.container}>
      <View style={styles.page}>
      <ScrollView>
      
            <SafeAreaView style={{marginLeft:30, marginRight:30, paddingBottom:'30%'}}>
                <View><Text style={{color:'black', fontSize:24, paddingTop:10, fontWeight: 'bold'}}>Create Recipe</Text></View>
                <View style={{alignItems: 'center',}}>
                    <Image source={{uri:picture}} style={{height:120, width:120, borderRadius:60, margin:10, borderColor: '#E1E6E6', borderWidth:1}}></Image>
                    <Text style={{color: '#43A1FF',}} onPress={_pickImage}>Choose a picture of food</Text>
                </View>
                <Text>RecipeName</Text>
                <TextInput
                    multiline={false}
                    numberOfLines={1}
                    onChangeText={(input) => setRecipeName(input)}
                    value={RecipeName}
                    // textContentType=""
                    placeholder="  ข้าวผัด"
                    style={{borderColor: '#CCCFCF',borderWidth: 1,borderRadius:8, marginBottom:10, height:43}}/>
                
                <Text>Ingredients</Text>
                
                <TextInput
                    multiline={true}
                    numberOfLines={4}
                    onChangeText={(input) => setIngredients(input)}
                    value={Ingredients}
                    style={{borderColor: '#CCCFCF',borderWidth: 1,borderRadius:8, marginTop:10, marginBottom:10}}/>
                
                <Text>Directions</Text>
                <TextInput
                    multiline={true}
                    numberOfLines={4}
                    onChangeText={(input) => setDirections(input)}
                    value={Directions}
                    style={{borderColor: '#CCCFCF',borderWidth: 1,borderRadius:8, marginTop:10, marginBottom:0,}}/>
                
            
                <Text style={{alignItems:'center', color:'red', fontSize:12}}>{messageError?messageError:null}</Text>
            <Button title="Confirm" disabled={RecipeName&&Ingredients&&Directions?false:true} onPress={createRecipe}></Button>

            
            </SafeAreaView>
        
        
        </ScrollView> 
      </View>
    </View>
    
);
};

export default Createrecipe;
