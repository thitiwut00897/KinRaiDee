import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";
import styles from "../style/styles";
import axios from "axios";
import './global.js';
import color from '../style/color'

const Vagetablehistory = (props) => {
  const [Searchinput, setSearchinput] = useState('');
  const [VagetableList, setVagetableList] = useState([]);
  
  useEffect(() => {
    getAllVagetable();
  }, []);

  const getAllVagetable=()=>{
    axios.get(`${url}/api/vegetables`).then((response) => {
      setVagetableList(response.data)
    })
  }
  const searchVagetable=()=>{
    if (props.Searchv == ''){
      getAllVagetable()
    }else 
      axios.post(`${url}/api/vegetables/search`, {"searchVegetable":Searchinput}).then((response) => {
      setVagetableList(response.data)
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.page}>
        <ScrollView>
          <SafeAreaView style={{paddingTop:30, marginBottom:80, paddingHorizontal:'5%'}}>
              
              <View style={Styles.seachWrapper}>
                  <TouchableOpacity onPress={searchVagetable()} style={Styles.seachLeft}><Image source={require('../assets/search.png')} style={Styles.seachIcon}/></TouchableOpacity>
                  <View style={Styles.seachRight}><TextInput multiline={false}
                        numberOfLines={1}
                        onChangeText={(input) => setSearchinput(input)}
                        value={Searchinput}
                        placeholder="search recipe"/>
                  </View>         
              </View>
              <Text style={Styles.hearderTitle}>History</Text>
              <View style={Styles.historyWrapper}>
                      {VagetableList.map((items) => 
                        <TouchableOpacity key={items._id} onPress={()=> props.navigation.navigate('Detailvagetable', {id:items._id})} style={Styles.cardWrapper}>
                        <View style={{alignItems:'center'}}><Image source={{uri : items.picture}} style={Styles.cardImageVagetable}/></View>
                        <View style={{alignItems:'center'}}><Text style={Styles.cardText}>{items.vegetableName}</Text></View>
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

const Styles = StyleSheet.create({
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
  hearderTitle:{
    color:'black', 
    fontSize:26, 
    fontWeight: 'bold',
    marginBottom:10, 
    marginLeft:5
  },
  historyWrapper:{
    flexDirection:'row', 
    justifyContent:'flex-start', 
    flexWrap: 'wrap'
  },
  cardWrapper:{
    height:120, 
    width:95, 
    borderRadius:10, 
    backgroundColor:'#F1F1F1', 
    padding:5, 
    marginRight:10, 
    marginBottom:5
  },
  cardImageVagetable:{
    height:80, 
    width:80, 
    margin:5, 
    borderRadius:0
  },
  cardText:{
    fontWeight:'bold', 
    fontSize:9, 
    alignItems:'center'
  }
})