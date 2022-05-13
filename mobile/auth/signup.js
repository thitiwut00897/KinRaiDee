import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, Button, ScrollView, SafeAreaView} from "react-native";
import styles from "../style/styles";
import firebase from 'firebase';
import 'firebase/firestore';
import color from '../style/color'

const Signup = (props) => {
  const [Email, setEmail] = useState(null)
  const [Password, setPassword] = useState(null)
  const [photoinput, setphoto] = useState('https://firebasestorage.googleapis.com/v0/b/kinraidee-d5af8.appspot.com/o/asset%2Fuser%20(1).png?alt=media&token=798e3f66-768d-444d-9b8a-0e5259e9bb62')
  const [messageError, setMessageError] = useState(null)
  const auth = firebase.auth();
  const firestore = firebase.firestore();

  const createUserDocument = async (user)=>{
    console.log('id is '+ user.uid)
    if (!user)return;
    const userRef = firestore.doc(`users/${user.uid}`)
    const snapshot = await userRef.get();
    if (!snapshot.exists){
      const _id = user.uid;

      try{
        userRef.set({
          _id
        })
      }catch(error){
        console.log('error in create user'. error)
      }
    }
  }

  const handlesubmit = async()=>{
    try{
      const {user} = await auth.createUserWithEmailAndPassword(Email,Password);
      await createUserDocument(user)
      console.log('signup succes')
      setMessageError(null)
      props.navigation.navigate("Createprofile", {user:user.uid, email:Email, password:Password})
    }catch(error){
      setMessageError(error.message)
    }
  }

return (
    <View style={styles.container}>
      <View><Text style={Styles.hearderTitle}>Register</Text></View>
      <View style={styles.page}>
      <ScrollView>
        
      <SafeAreaView style={{paddingTop:30, marginBottom:80, paddingHorizontal:'5%'}}>
            
  
            <TextInput
              multiline={false}
              numberOfLines={1}
              onChangeText={(input) => setEmail(input)}
              value={Email}
              textContentType="emailAddress"
              placeholder="  example@email.com"
              style={Styles.TextInput}/>
            
            
            <TextInput
                multiline={false}
                numberOfLines={1}
                onChangeText={(input) => setPassword(input)}
                value={Password}
                secureTextEntry={true}
                placeholder="  password"
                style={Styles.TextInput}/>


          <Text style={styles.messageError}>{messageError?messageError:null}</Text>
          <Button title="Submit" disabled={Password&&Email?false:true} onPress={handlesubmit}></Button>
        </SafeAreaView>
        
        
        </ScrollView>
      </View>
    
    </View>
);
};

export default Signup;
const Styles = StyleSheet.create({
  hearderTitle:{
    color:'white', 
    paddingLeft:'10%', 
    fontSize:26
  },
  TextInput:{
    borderColor: color.grayTextinput,
    borderWidth: 1,
    borderRadius:8, 
    marginTop:10,
    height:43,
    paddingHorizontal: 10
  },
})