import React from "react";
import { View, Text, StyleSheet, Image} from "react-native";
import styles from "../style/styles";

export default function Topnav(){
    return(
        <View style={styles.header}>
        <Image source={require('../assets/earth.png')}style={styles.logo}></Image>
        <Text style={{fontSize:16, color:'white', flex:1, paddingLeft:6}}>KIN RAI DEE</Text>
          <Image source={require('../assets/user.png')}style={styles.profile}/>
      </View>
    );
}
