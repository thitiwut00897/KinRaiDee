import React, { useState, useEffect} from "react";
import { View, Text, StyleSheet, Image, Button, SafeAreaView, ScrollView, LogBox, TouchableOpacity} from "react-native";
import { TextInput } from "react-native-gesture-handler";
LogBox.ignoreLogs(['Reanimated 2']);
import styles from "../style/styles";
import axios from "axios";
import './global.js';
import * as firebase from 'firebase';



const Main = (props) => {
  const [Searchinput, setSearchinput] = useState('')
  const [ActiveIndex, setActiveIndex] = useState(0)
  const [RecipesList, setRecipesList] = useState([])
  const auth = firebase.auth();



  useEffect(() => {
    getAllrecipe();
  }, []);

  const getAllrecipe=()=>{
    axios.get(`${url}/api/recipes`).then((response) => {
        setRecipesList(response.data)
      })
    
  }
  const searchRecipe=()=>{
    if (Searchinput == ''){
      getAllrecipe();
    }else 
      axios.post(`${url}/api/recipes/search`, {"searchRecipe":Searchinput}).then((response) => {
      setRecipesList(response.data)
    })
  }

return (
    <View style={styles.container}>
      <View style={styles.page}>
      <ScrollView>
        <SafeAreaView style={{marginLeft:30, marginRight:30, paddingTop:30,fontWeight: 'bold', marginBottom:80}}>
        <View style={{flexDirection:'row', marginBottom:10, backgroundColor:'#E1E3E3', borderRadius:6}}>
            <TouchableOpacity onPress={searchRecipe()} style={{width:'10%',justifyContent:'center', alignItems:'center'}}><Image source={require('../assets/search.png')} style={{width:20, height:20}}/></TouchableOpacity>
            <View style={{width:'90%'}}><TextInput multiline={false}
                  numberOfLines={1}
                  onChangeText={(input) => setSearchinput(input)}
                  value={Searchinput}
                  placeholder="search recipe"
                  // onPress={searchRecipe(Search)}
                  style={{}}/>
            </View>
        </View>

          <Button title="Create Recipe" onPress={()=> props.navigation.navigate('Createrecipe')} style={{}}></Button>
          

          <Text style={{fontWeight:'bold'}}>New Post</Text>
          {/* card */}
          
          <View style={{flexDirection:'row', justifyContent:'flex-start', flexWrap: 'wrap',}}>
            {RecipesList.map((items) => 
                <View key={items._id}style={{height:170, width:145, borderRadius:10, backgroundColor:'#E5E7E9', padding:5, marginRight:5, marginBottom:5}}>
                  <View style={{flexDirection:'row'}}>
                    <View style={{width:'85%', flexDirection:'row'}}>
                      <View><Image source={{uri : items.photo}} style={{height:20, width:20, borderRadius:15}}></Image></View>
                      <View style={{marginLeft:1}}>
                        <Text style={{fontSize:7}}>{items.firstName} {items.lastName}</Text>
                        <Text style={{color:'gray',fontSize:6}}>{items.date}</Text>
                      </View>
                    </View>
                    <View style={{flexDirection:'row-reverse'}}><Image source={require('../assets/bookmark.png')} style={{height:20, width:20, tintColor:'#F06C6A'}}/></View>
                  </View>
                  <View style={{alignItems:'center'}}><Image source={{uri : items.picture}} style={{height:80, width:80, margin:5, borderRadius:0, backgroundColor:'white'}}/></View>
                  <Text style={{fontWeight:'bold', fontSize:9}}>{items.recipeName}</Text>
                  <Text style={{fontSize:8}} numberOfLines={2}>{items.directions}</Text><Text onPress={()=>props.navigation.navigate('Reivewrecipe', {idrecipe:items._id})} style={{fontSize:8, color:'blue'}}>อ่านเพิ่มเติม</Text>
                </View>
                )}
        </View>
          
        </SafeAreaView>
        </ScrollView>
      </View>
    </View>
);
};
export default Main;
