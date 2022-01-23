import React from "react";
import { View, Text, StyleSheet, Image} from "react-native";
import styles from "../style/styles";

const Main = (props) => {
return (
    <View style={styles.container}>
      <View style={styles.page}>
        <View style={{marginLeft:30, marginRight:30, fontWeight: 'bold'}}>
          <Text>Welcome to Test {props.navigation.getParam("Token")}</Text>
        </View>
      </View>
    </View>
);
};
export default Main;
