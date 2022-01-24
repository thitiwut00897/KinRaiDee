import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import styles from "../style/styles";
const Profile = (props) => {
return (
  <View style={styles.container}>
  <View style={styles.page}>
    <View style={{marginLeft:30, marginRight:30}}>
      <View style={{ flexDirection:'row', marginTop:30}}>
        <View><Image source={require('../assets/profilefacebook.jpg')} style={{height:100, width:100, borderRadius:50, borderColor:'gray', borderWidth:1}}></Image></View>
          <View style={{marginLeft:10}}>
            <Text style={{fontWeight:'bold', fontSize:20, marginBottom:7}}>Thitiwut</Text>
            <Text style={{fontWeight:'bold', fontSize:10}}>สามารถทำอาหารไทยได้</Text>
          </View>
      </View>
      <View style={{flexDirection:'row'}}>
        <View style={{height:30, borderWidth:1, borderColor:'gray', marginTop:10, marginBottom:10, width:'50%', alignItems:'center', justifyContent: 'center'}}><Text style={{fontWeight:'bold', fontSize:10}}>25 POST</Text></View>
        <View style={{height:30, borderWidth:1, borderColor:'gray', marginTop:10, marginBottom:10, width:'50%', alignItems:'center', justifyContent: 'center'}}><Text style={{fontWeight:'bold', fontSize:10}}>2 Favorites</Text></View>
      </View>





      {/* <Text style={{fontWeight:'bold', fontSize:10}}>25 POST</Text>
      <View><Text style={{color:'black', fontSize:24, paddingTop:10, fontWeight: 'bold'}}>CARD</Text></View> */}
    </View>
  </View>
</View>
);
};

export default Profile;
