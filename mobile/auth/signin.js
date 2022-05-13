import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, SafeAreaView} from 'react-native';
import styles from "../style/styles";
import firebase from 'firebase';
import color from '../style/color'


export default function Login(props) {
  const [Email, setEmail] = useState(null)
  const [Password, setPassword] = useState(null)
  const [messageError, setMessageError] = useState(null)
  const auth = firebase.auth();

  
  const handleLogin=()=>{
    auth.signInWithEmailAndPassword(Email, Password).then(userCredentials =>{
      const user = userCredentials.user;
      console.log('Login with '+ user.email)
      setEmail(null)
      setPassword(null)
      setMessageError(null)
      props.navigation.navigate("Main")
    }).catch((error)=>{
      setMessageError(error.message)
    })
  }


  return (
    <View style={styles.container}>
      <View><Text style={Styles.hearderTitle}>Welcome</Text></View>
      <View style={styles.page}>
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
            <Text style={Styles.errorMessage}>{messageError?messageError:null}</Text>
            <Button onPress={handleLogin} title='Login'/>
            
            <View style={{flexDirection:'row', justifyContent:'center'}}>
              <View style={Styles.line}></View>
              <Text style={{marginLeft:'5%', marginRight:'5%', color:color.grayTextinput}}>OR</Text>
              <View style={Styles.line}></View>
            </View>


        <View style={{alignItems:'center'}}><Text>Don't have account  <Text style={{color:"blue", textDecorationLine: 'underline'}} onPress={()=> props.navigation.navigate("Signup")}>Register</Text></Text></View>
        </SafeAreaView>
        
      </View>
    </View>
  );
}

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
  errorMessage:{
    alignItems:'center', 
    color:'red', 
    fontSize:12
  },
  line:{
    borderTopWidth:1, 
    width:'40%',
    marginTop:10, 
    borderColor:color.grayTextinput
  }
})