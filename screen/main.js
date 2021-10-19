import React from "react";
import { View, Text, StyleSheet, Image} from "react-native";

const Main = (props) => {
return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/user.png')}style={styles.logo}></Image>
        <Text style={{fontSize:16, color:'white', flex:1, paddingLeft:6}}>KIN RAI DEE</Text>
          <Image source={require('../assets/user.png')}style={styles.profile}/>
      </View>
      <View style={styles.page}>
        <Text>Welcome to Test {props.navigation.getParam("Token")}</Text>
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
      flex:0, 
      flexDirection:'row',
      top:12,
      padding:10,
      height:60,
    },
    profile:{
      width:30,
      height:30,
      tintColor:'black', 
      borderRadius:30, 
      backgroundColor:'white'
    },
    logo:{
      width:30,
      height:30,
      tintColor:'white', 
      borderRadius:30, 
      backgroundColor:'black'
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
