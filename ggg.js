import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Tab1 = (props) => {
return (
    <View style={styles.container}>
    <Text>Welcome to Tab-1 {props.navigation.getParam("Token")}</Text>
    </View>
);
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
export default Tab1;
