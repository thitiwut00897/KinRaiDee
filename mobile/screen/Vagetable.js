import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styles from "../style/styles";

const Vagetable = (props) => {
return (
    <View style={styles.container}>
      <View style={styles.page}>
        <Text>Welcome to Vagetable {props.navigation.getParam("Token")}</Text>
      </View>
    
    </View>
);
};
export default Vagetable;
