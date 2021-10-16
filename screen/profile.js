import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Profile = (props) => {
return (
    <View style={styles.container}>
    <Text>Welcome to Profile</Text>
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
export default Profile;
