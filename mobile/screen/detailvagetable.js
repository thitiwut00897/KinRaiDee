import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView} from "react-native";
import styles from "../style/styles";
import axios from "axios";
import './global.js';

const VagetableDetail = (props) => {
  const [VagetableID, setVagetableID] = useState(props.navigation.getParam('id'));
  const [DetailVagetable, setDetailVagetable] = useState([]);

  useEffect(() => {
    getDetailVagetable();
  }, []);

  const getDetailVagetable=()=>{
    axios.get(`${url}/api/vegetables/${VagetableID}`).then((response) => {
      setDetailVagetable(response.data)
  
    })
  }

return (
  <View style={styles.container}>
    <ScrollView>
  <View style={styles.page}>
    <SafeAreaView style={{marginLeft:30, marginRight:30, paddingTop:10, flex:1}}>
      
        <View><Text style={{color:'black', fontSize:24, fontWeight: 'bold'}}>{DetailVagetable.vegetableName}</Text></View>
        <View style={{alignItems: 'center',}}>
            <Image source={{uri : DetailVagetable.picture}} style={{height:135, width:135, borderRadius:100, margin:20, borderColor:'gray', borderWidth:1}}></Image>
        </View>
        <Text>Botanical(พฤภษศาสตร์): {DetailVagetable.botanicalName} </Text>
        <Text>Common Name(ชื่อทั่วไป): {DetailVagetable.commonName} </Text>
        <View style={{height:10, borderTopWidth:1, borderColor:'gray', marginTop:10, marginBottom:10}}></View>
        <Text style={{fontWeight: 'bold'}}>Descriptions</Text>
        
        
        <Text>{DetailVagetable.description}</Text>
        <Text></Text>      
      
    </SafeAreaView>
  </View>
  </ScrollView>
</View>
);
};
export default VagetableDetail;
