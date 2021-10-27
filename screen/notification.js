import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Topnav from "../navigation/topnav";
import styles from "../style/styles";
const Notification = (props) => {
return (
    <View style={styles.container}>
      <Topnav/>
      <View style={styles.page}>
    <Text>Welcome to Notification</Text>
    </View>
    </View>
);
};
export default Notification;
