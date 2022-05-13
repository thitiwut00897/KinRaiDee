import React, { useState, useEffect} from "react";
import { View, Text, StyleSheet, Image, Button, SafeAreaView, ScrollView, LogBox, TouchableOpacity, RefreshControl} from "react-native";
import { TextInput } from "react-native-gesture-handler";
LogBox.ignoreLogs(['Reanimated 2']);
import styles from "../style/styles";
import axios from "axios";
import './global.js';
import firebase from 'firebase';
import color from '../style/color'

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const Main = (props) => {
  const [Searchinput, setSearchinput] = useState('')
  const [ActiveIndex, setActiveIndex] = useState(0)
  const [RecipesList, setRecipesList] = useState([])
  const auth = firebase.auth();
  const [refreshing, setRefreshing] = useState(false);
  const [recommendMenu, setRecommendMenu] = useState([])


  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setSearchinput('')
    getAllrecipe()
    wait(1500).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    getAllrecipe();
    searchRecipe();

  }, []);

  const getAllrecipe=()=>{
    axios.get(`${url}/api/recipes`).then((response) => {
        setRecommendMenu(response.data)
      }) 
  }
  const searchRecipe=async()=>{
    if (Searchinput == ''){
      axios.get(`${url}/api/recipes`).then((response) => {
        setRecipesList(response.data)
      })
    }else 
      await axios.post(`${url}/api/recipes/search`, {"searchRecipe":Searchinput}).then((response) => {
      setRecipesList(response.data)
    })
  }

return (
    <View style={styles.container}>
      <View style={styles.page}>
      <ScrollView refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }>
        <SafeAreaView style={{paddingTop:30, marginBottom:80, paddingHorizontal:'5%'}}>
        <View style={Styles.seachWrapper}>
            <TouchableOpacity onPress={searchRecipe()} style={Styles.seachLeft}><Image source={require('../assets/search.png')} style={Styles.seachIcon}/></TouchableOpacity>
            <View style={Styles.seachRight}><TextInput multiline={false}
                  numberOfLines={1}
                  onChangeText={(input) => setSearchinput(input)}
                  value={Searchinput}
                  placeholder="search recipe"
                  style={{}}/>
            </View>
        </View>
          
          <Text style={Styles.TitleText}>Recommend</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{
              borderRadius: 100,
              transform: [{ scaleX: 1 }],
            }}>
                      {recommendMenu.map((items)=> 
                        items.status === "Approve"?
                            <View key={items._id}style={{height:170, width:145, borderRadius:10, backgroundColor:'#F1F1F1', padding:5, marginRight:5, marginBottom:5}}>
                              <View style={{flexDirection:'row'}}>
                                <View style={{width:'85%', flexDirection:'row'}}>
                                  <View><Image source={{uri : items.photo}} style={{height:20, width:20, borderRadius:15}}></Image></View>
                                  <View style={{marginLeft:1}}>
                                    <Text style={{fontSize:7}}>{items.firstName} {items.lastName}</Text>
                                    <Text style={{color:'gray',fontSize:6}}>{items.date}</Text>
                                  </View>
                                </View>
                              </View>
                              <View style={{alignItems:'center'}}><Image source={{uri : items.picture}} style={{height:80, width:80, margin:5, borderRadius:0, backgroundColor:'white'}}/></View>
                              <Text style={{fontWeight:'bold', fontSize:9}}>{items.recipeName}</Text>
                              <Text style={{fontSize:8}} numberOfLines={2}>{items.directions}</Text><Text onPress={()=>props.navigation.navigate('Reivewrecipe', {idrecipe:items._id})} style={{fontSize:8, color:'blue'}}>อ่านเพิ่มเติม</Text>
                            </View>
                        :null
                            )}
          </ScrollView>
          


          <Text style={Styles.TitleText}>New Post</Text>
          {/* card */}
          
          <View style={Styles.newpostWrapper}>
            {RecipesList.map((items) => 
                <View key={items._id}style={Styles.card}>
                  <View style={{ flexDirection:'row'}}>
                    <Image source={{uri : items.photo}} style={Styles.cardProfileUser}></Image>
                    <View style={{marginLeft:1}}>
                      <Text style={{fontSize:7}}>{items.firstName} {items.lastName}</Text>
                      <Text style={{color:'gray',fontSize:6}}>{items.date}</Text>
                    </View>
                  </View>
                  <View style={{alignItems:'center'}}><Image source={{uri : items.picture}} style={Styles.cardImageRecipe}/></View>
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

const Styles = StyleSheet.create({
  TitleText:{
    fontWeight:'bold', 
    marginTop:5, 
    marginBottom:5,
    marginLeft:5
  },
  seachWrapper:{
    flexDirection:'row', 
    marginBottom:10, 
    backgroundColor:color.gray, 
    borderRadius:6,
  },
  seachIcon:{
    width:20, height:20
  },
  seachLeft:{
    width:'10%',justifyContent:'center', alignItems:'center'
  },
  seachRight:{
    width:'90%'
  },
  newpostWrapper:{
    flexDirection:'row', justifyContent:'space-between', flexWrap: 'wrap',
  },
  card:{
    height:170, width:'46%', borderRadius:10, backgroundColor:'#F1F1F1', padding:5, margin:5
  },
  cardProfileUser:{
    height:20, width:20, borderRadius:15
  },
  cardImageRecipe:{
    height:80, width:80, margin:5, borderRadius:0, backgroundColor:'white'
  },
})
