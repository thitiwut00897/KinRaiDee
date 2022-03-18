import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";
import styles from "../style/styles";
import axios from "axios";
import { Button } from "react-native-elements";
import './global.js';

const Vagetablehistory = (props) => {
  const [Search, setSearch] = useState('');
  const [VagetableList, setVagetableList] = useState([]);
  
  useEffect(() => {
    getAllVagetable();
  }, []);

  const getAllVagetable=()=>{
    axios.get(`${url}/api/vegetables`).then((response) => {
      setVagetableList(response.data)
    })
  }
  const searchVagetable=(props)=>{
    if (props.Search == ''){
      getAllVagetable()
    }else 
      axios.post(`${url}/api/vegetables/search`, {"searchVegetable":props.Search}).then((response) => {
      setVagetableList(response.data)
    })
  }


return (
  <View style={styles.container}>
  <View style={styles.page}>
  <ScrollView>
    <SafeAreaView style={{marginLeft:30, marginRight:30,paddingTop:30, marginBottom:80}}>
        <View style={{flexDirection:'row', marginBottom:10, backgroundColor:'#EBEBEB', borderRadius:6}}>
          <View style={{width:'10%',justifyContent:'center', alignItems:'center'}}><Image source={require('../assets/search.png')} style={{width:20, height:20}}/></View>
          <View style={{width:'90%'}}><TextInput multiline={false}
                  numberOfLines={1}
                  onChangeText={(Search) => setSearch({Search})}
                  value={Search}
                  onPress={searchVagetable(Search)}
                  placeholder="search recipe"
                  style={{}}/></View>
        </View>
      <View><Text style={{color:'black', fontSize:24, paddingTop:10, fontWeight: 'bold'}}>History</Text></View>
      
        <View style={{flexDirection:'row', justifyContent:'flex-start', flexWrap: 'wrap',}}>
                {VagetableList.map(VagetableList => 
                  <TouchableOpacity onPress={()=> props.navigation.navigate('Detailvagetable', {id:VagetableList._id})} style={{height:120, width:95, borderRadius:10, backgroundColor:'#EBEBEB', padding:5, marginRight:5, marginBottom:5}}>
                  <View style={{alignItems:'center'}}><Image source={{uri : VagetableList.picture}} style={{height:80, width:80, margin:5, borderRadius:0}}/></View>
                  <View style={{alignItems:'center'}}><Text style={{fontWeight:'bold', fontSize:9, alignItems:'center'}}>{VagetableList.vegetableName}</Text></View>
                </TouchableOpacity>
                )}
        </View>
    </SafeAreaView>
    </ScrollView>
  </View>
  
</View>
);
};
export default Vagetablehistory;
