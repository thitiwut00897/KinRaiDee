import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Deeppage = (props) => {
return (
    <View style={styles.container}>
    <Text>Welcome to Deeppage</Text>
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
export default Deeppage;
