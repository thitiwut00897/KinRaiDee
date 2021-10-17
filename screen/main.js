import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Main = (props) => {
return (
    <View style={styles.container}>
      <View style={styles.header, {flex:1, flexDirection:'row'}}>
        <Text style={{fontSize:20, color:'white', flex:1}}>KinRaiDee</Text>
        <Image source={require('../assets/home.png')}style={{width:35,height:35,tintColor:'white', right:10}}/>
      </View>
      <View style={styles.page}>
        <Text>Welcome to Tabasasaaa {props.navigation.getParam("Token")}</Text>
      </View>
    </View>
);
};
const styles = StyleSheet.create({
    container: {
      flex:1,
      display:'flex',
      flexDirection:'column',
      backgroundColor: '#57CC99',
      justifyContent: 'center',
    },
    header:{
      justifyContent: 'center',
    },
    page:{
      flex:10,
      borderRadius:35,
      backgroundColor: '#FFFF',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });
export default Main;
