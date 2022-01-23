import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styles from "../style/styles";
const Profile = (props) => {
return (
  <View style={styles.container}>
  <View style={styles.page}>
    <View style={{marginLeft:30, marginRight:30}}>
      <View><Text style={{color:'black', fontSize:24, paddingTop:10, fontWeight: 'bold'}}>Profile</Text></View>
    </View>
  </View>
</View>
);
};

export default Profile;
