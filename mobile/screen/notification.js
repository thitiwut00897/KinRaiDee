import React from "react";
import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView } from "react-native";
import styles from "../style/styles";
const Notification = (props) => {
return (
  <View style={styles.container}>
    <View style={styles.page}>
      <SafeAreaView style={{marginLeft:30, marginRight:30}}>
        <View><Text style={{color:'black', fontSize:24, paddingTop:10, fontWeight: 'bold', marginBottom:10}}>Notification</Text></View>
        <ScrollView>
        <View style={{height:60,backgroundColor:'#EBEBEB', borderRadius:8 , padding:5}}>
            <View style={{flexDirection:'row'}}>
              <View><Image source={require('../assets/profilefacebook.jpg')} style={{height:50, width:50, borderRadius:25}}></Image></View>
              <View style={{flexDirection:'column', marginLeft:3, width:'80%'}}>
                <Text style={{fontSize:10}} numberOfLines={2}><Text style={{fontSize:10, fontWeight:'bold'}}>Thitiwut Phophan </Text>commented your post</Text>
                <Text style={{fontSize:9}}>sun 20 AUG 00.29</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  </View>
);
};
export default Notification;
