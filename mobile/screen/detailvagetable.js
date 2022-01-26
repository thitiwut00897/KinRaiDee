import React from "react";
import { View, Text, StyleSheet, Image} from "react-native";
import styles from "../style/styles";

const Vagetable = (props) => {
return (
  <View style={styles.container}>
  <View style={styles.page}>
    <View style={{marginLeft:30, marginRight:30, paddingTop:10,}}>
      <View><Text style={{color:'black', fontSize:24, fontWeight: 'bold'}}>Name Vagetable</Text></View>
        <View style={{alignItems: 'center',}}>
            <Image source={require('../assets/profilefacebook.jpg')} style={{height:135, width:135, borderRadius:100, margin:20, borderColor:'gray', borderWidth:1}}></Image>
        </View>
        <Text>Botanical(พฤภษศาสตร์): ****** </Text>
        <Text>Common Name(ชื่อทั่วไป): ****** </Text>
        <Text>Genus(ประเภท): ****** </Text>
        <View style={{height:10, borderTopWidth:1, borderColor:'gray', marginTop:10, marginBottom:10}}></View>
        <Text style={{fontWeight: 'bold'}}>Descriptions</Text>
        <Text>************************************************************************************
        *********************************************************************************************************
        ******************************************************************************************************************************
        *********************
        </Text>
    </View>
  </View>
</View>
);
};
export default Vagetable;
