import React, { useState, useEffect } from "react";
import { View, Text, Image, Button, ScrollView, SafeAreaView, ActivityIndicator} from "react-native";
import styles from "../style/styles";
import * as ImagePicker from 'expo-image-picker';
import * as firebase from 'firebase';
import './global.js';
import axios from "axios";

import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Setting a timer']);


const Imagepickup = (props) => {
    const [hasPermission, setHasPermission] = useState(null);
    const [urlPhoto,seturlPhoto] = useState()
    const [Predict, setPredict] = useState()
    const [hasPhoto, setHasphoto] = useState(false)
    // const [statePredic, setStatePredic] = useState(false)

    useEffect(() => {
        (async () => {
          const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
          setHasPermission(status === "granted");
        })();
      }, [Predict]);
      if (hasPermission === null) {
        return <View />;
      }
      if (hasPermission === false) {
        return <Text>No access to camera</Text>;
      }


const _takePhoto = async ()=>{
    let result = await ImagePicker.launchCameraAsync();
    if (!result.cancelled){
        uploadImage(result.uri, 'test-image.jpeg')
        .then(()=>{
            setHasphoto(true)
            console.log('upload photo seccess')
            
        }).catch((e)=>{
            console.log(e)
        })          
    }
}
const uploadImage = async(uri, imageName)=>{
    const response = await fetch(uri);
    const blob = await response.blob();
    var ref = firebase.storage().ref().child("image/" + imageName);
    const geturl = ref.getDownloadURL().then((urlfirebase)=>{
        seturlPhoto(urlfirebase)
        
    })
    return ref.put(blob), geturl, urlPhoto;
}

const predictionPhoto=async()=>{
    console.log('prediction ')
    await axios.post(`${url}/api/teachablemachin/prediction`, {"imageUrl":urlPhoto}).then((response) => {
        setPredict(response.data[0].class)
    })
    console.log('success prodict')
}
  



return (
    <View style={styles.container}>
        <View style={styles.page}>
      <ScrollView>
      <SafeAreaView style={{marginLeft:30, marginRight:30, paddingBottom:'30%'}}>
        <Text style={{color:'black', fontSize:24, paddingTop:10, fontWeight: 'bold'}}>Check Vegetables</Text>
            <View style={{alignItems: 'center',}}>
                <Image source={urlPhoto?{uri: urlPhoto}:require('../assets/camera.png')} style={styles.photopreview}/>
                <Text style={{fontWeight: 'bold', fontSize:30}}>{Predict}</Text>
            </View>
            {!hasPhoto?<Button onPress={_takePhoto} title="Take a photo" />:<View><Button color='#57CC99' title="prediction" onPress={predictionPhoto}></Button><Button color='#EEAD18' title="Take photo again" onPress={()=>{setPredict(''), setHasphoto(false),_takePhoto()}}></Button></View>}
            {!hasPhoto?
            <View style={{flexDirection:'row', backgroundColor:'#EEE294', borderRadius:0, height:70, width:'100%', alignItems:'center', borderRadius:10, marginTop:10}}>
                <View style={{width:'10%',alignItems:'center'}}><Image source={require('../assets/notification.png')} style={{height:20, width:20, tintColor:'#E2C302'}}/></View>
                <View style={{width:'90%'}}><Text style={{fontWeight: 'bold'}}>Not sure if you know this vegetable?</Text><Text>You can take photo to check the vegetables.</Text></View>
            </View>
            :<View>
                <View style={{flexDirection:'row', backgroundColor:'#EEE294', borderRadius:0, height:70, width:'100%', alignItems:'center', borderRadius:10, marginTop:10}}>
                    <View style={{width:'10%',alignItems:'center'}}><Image source={require('../assets/notification.png')} style={{height:20, width:20, tintColor:'#E2C302'}}/></View>
                    <View style={{width:'90%'}}><Text style={{fontWeight: 'bold'}}>Can only predict the vegetables that are in the system.</Text></View>
                </View>
                
             </View>}
            
            
    </SafeAreaView>
    </ScrollView>
    </View>
      
    </View>
);
};


export default Imagepickup;
