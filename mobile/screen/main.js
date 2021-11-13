import React from "react";
import { View, Text, StyleSheet, Image} from "react-native";
import styles from "../style/styles";

const Main = (props) => {
return (
    <View style={styles.container}>
      <View style={styles.page}>
        <Text>Welcome to Test {props.navigation.getParam("Token")}</Text>
      </View>
    </View>
);
};
export default Main;
