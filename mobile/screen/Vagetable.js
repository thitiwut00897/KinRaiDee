import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import styles from "../style/styles";

const Vagetablehistory = (props) => {
  const [Search, setSearch] = useState('')
return (
  <View style={styles.container}>
  <View style={styles.page}>
    <View style={{marginLeft:30, marginRight:30,paddingTop:30,}}>
        <View style={{flexDirection:'row', marginBottom:10, backgroundColor:'#EBEBEB', borderRadius:6}}>
          <View style={{width:'10%',justifyContent:'center', alignItems:'center'}}><Image source={require('../assets/search.png')} style={{width:20, height:20}}/></View>
          <View style={{width:'90%'}}><TextInput multiline={false}
                  numberOfLines={1}
                  onChangeText={(Search) => setSearch({Search})}
                  value={Search}
                  placeholder="search recipe"
                  style={{}}/></View>
        </View>
      <View><Text style={{color:'black', fontSize:24, paddingTop:10, fontWeight: 'bold'}}>History</Text></View>
      <View style={{flexDirection:'row', justifyContent:'flex-start', flexWrap: 'wrap',}}>
              <TouchableOpacity onPress={()=> props.navigation.navigate('Detailvagetable')} style={{height:120, width:95, borderRadius:10, backgroundColor:'#EBEBEB', padding:5, marginRight:5, marginBottom:5}}>
                <View style={{alignItems:'center'}}><Image source={require('../assets/krapao.jpg')} style={{height:80, width:80, margin:5, borderRadius:0}}/></View>
                <View style={{alignItems:'center'}}><Text style={{fontWeight:'bold', fontSize:9, alignItems:'center'}}>กระเพรา</Text></View>
              </TouchableOpacity>
              
              
      </View>
    </View>
  </View>
</View>
);
};
export default Vagetablehistory;
