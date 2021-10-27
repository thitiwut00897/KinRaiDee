import React from "react";
import { View, Text, StyleSheet, Image} from "react-native";
import Topnav from "../navigation/topnav";
import styles from "../style/styles";

const Main = (props) => {
return (
    <View style={styles.container}>
      <Topnav/>
      <View style={styles.page}>
        <Text>Welcome to Test {props.navigation.getParam("Token")}</Text>
      </View>
    </View>
);
};
export default Main;
