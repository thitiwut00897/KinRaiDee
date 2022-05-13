import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView} from "react-native";
import styles from "../style/styles";
import axios from "axios";
import './global.js';

const VagetableDetail = (props) => {
  const [VagetableID, setVagetableID] = useState(props.navigation.getParam('id'));
  const [DetailVagetable, setDetailVagetable] = useState([]); 
  const [RecipesList, setRecipesList] = useState([])
  useEffect(() => {
    getDetailVagetable();

  }, []);

  const getDetailVagetable=()=>{
    axios.get(`${url}/api/vegetables/${VagetableID}`).then((response) => {
      setDetailVagetable(response.data)

      axios.post(`${url}/api/recipes/search/${response.data.vegetableName}`).then((response) => {
        setRecipesList(response.data)
      })
    })
  }




return (
  <View style={styles.container}>
  <View style={styles.page}>
  <ScrollView>
    <SafeAreaView style={{paddingTop:30, marginBottom:80, paddingHorizontal:'5%'}}>
      
        <View><Text style={Styles.vagetableTitle}>{DetailVagetable.vegetableName}</Text></View>
        <View style={{alignItems: 'center',}}>
            <Image source={{uri : DetailVagetable.picture}} style={Styles.vagetableImage}></Image>
        </View>
        <Text style={Styles.vagetableText}>Botanical(พฤภษศาสตร์): {DetailVagetable.botanicalName} </Text>
        <Text style={Styles.vagetableText}>Common Name(ชื่อทั่วไป): {DetailVagetable.commonName} </Text>
        <View style={Styles.line}></View>
        <Text style={Styles.vagetableHearderText}>Descriptions</Text>
        
        
        <Text style={Styles.vagetableText}>{DetailVagetable.description}</Text>


        <Text style={Styles.vagetableHearderText}>Recommend</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{
              borderRadius: 100,
              transform: [{ scaleX: 1 }],
            }}>
                      {RecipesList.map((items)=> 
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
      
    </SafeAreaView>
    </ScrollView>
  </View>
</View>
);
};
export default VagetableDetail;

const Styles = StyleSheet.create({
  vagetableTitle:{
    color:'black', fontSize:24, fontWeight: 'bold'
  },
  vagetableImage:{
    height:135, width:135, borderRadius:100, margin:20, borderColor:'gray', borderWidth:1
  },
  vagetableHearderText:{
    fontWeight: 'bold',
    fontSize:20,
    marginTop:10,
    marginBottom:10
  },
  vagetableText:{
    fontSize:14,
  },
  line:{
    height:10, borderTopWidth:1, borderColor:'gray', marginTop:10
  }

})
