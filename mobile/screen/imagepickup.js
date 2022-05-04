import React, { useState, useEffect } from "react";
import { View, Text, Image, Button, ScrollView, SafeAreaView, ActivityIndicator} from "react-native";
import styles from "../style/styles";
import * as ImagePicker from 'expo-image-picker';
import firebase from 'firebase';
import './global.js';
import axios from "axios";
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Setting a timer']);


const Imagepickup = (props) => {
    const [hasPermission, setHasPermission] = useState(null);
    const [urlPhoto,seturlPhoto] = useState(null)
    const [Predict, setPredict] = useState()
    const [preview,setpreview] = useState()
    const [hasPhoto, setHasphoto] = useState(false)
    const [uploadState, setUploadState] = useState(false)
    const [loading, setLoading] = useState(false)
    const [loadingPredic, setLoadingPredic] = useState(false)
    const [recommendMenu, setRecommendMenu] = useState([])

    const [getref, setRef] = useState()

    useEffect(() => {
        (async () => {
          const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
          setHasPermission(status === "granted");
        })();
      }, []);
      if (hasPermission === null) {
        return <View />;
      }
      if (hasPermission === false) {
        return <Text>No access to camera</Text>;
      }


const _takePhoto = async ()=>{
    setPredict(null)
    setLoadingPredic(false)
    let result = await ImagePicker.launchCameraAsync();
    if (!result.cancelled){
        uploadImage(result.uri, 'test-image.jpeg')
        .then(()=>{
            setHasphoto(true)
            setpreview(urlPhoto)
            setLoading(false)
            setUploadState(false)
            setLoadingPredic(false)
            setRecommendMenu([])
        }).catch((e)=>{
            console.log(e)
            setHasphoto(false)
            setpreview(null)
            setLoading(false)
            setUploadState(false)
            setLoadingPredic(false)
        })    
             
    }
}
const uploadImage = async(uri, imageName)=>{
    const response = await fetch(uri);
    const blob = await response.blob();
    var ref = await firebase.storage().ref().child("image/" + imageName);
    setRef(ref)
    setLoading(true)
    return ref.put(blob);
}
const getUrlphoto=()=>{
    const geturl = getref.getDownloadURL().then((urlfirebase)=>{
        seturlPhoto(urlfirebase)
        setUploadState(true)
    })
}

const predictionPhoto=async()=>{
    console.log('prediction ')
    setLoadingPredic(true)
    await axios.post(`${url}/api/teachablemachin/prediction`, {"imageUrl":urlPhoto}).then(async(response) => {
        setPredict(response.data[0].class)
        await axios.post(`${url}/api/recipes/search/${response.data[0].class}`).then((response) => {
            setRecommendMenu(response.data)
            console.log(response.data)
        })
    })
    console.log('success prodict')
}
    


return (
    <View style={styles.container}>
        <View style={styles.page}>
      <ScrollView >
      
      <SafeAreaView style={{marginLeft:30, marginRight:30, paddingBottom:'30%'}}>
        <Text style={{color:'black', fontSize:24, paddingTop:10, fontWeight: 'bold'}}>Check Vegetables</Text>
        
            <View style={{alignItems: 'center',}}>
                <Image source={uploadState?{uri: urlPhoto}:require('../assets/camera.png')} style={styles.photopreview}/>
                {loadingPredic?<Text style={{fontWeight: 'bold', fontSize:30}}>{Predict?Predict:'wait process'}</Text>:<Text style={{fontWeight: 'bold', fontSize:30}}></Text>}
            </View>
            
            {!hasPhoto?<Button onPress={_takePhoto} title="Take a photo" />:<View>{uploadState?<Button color='#57CC99' title="prediction" onPress={predictionPhoto}/>:<Button title="Upload for Predic" onPress={()=>{getUrlphoto()}}></Button>}</View>}
    
            {uploadState?<Button color='#EEAD18' title="Take photo again" onPress={_takePhoto}/>:null}
            {!hasPhoto?
            <View style={{flexDirection:'row', backgroundColor:'#EEE294', borderRadius:0, height:70, width:'100%', alignItems:'center', borderRadius:10, marginTop:10}}>
                <View style={{width:'10%',alignItems:'center'}}><Image source={require('../assets/notification.png')} style={{height:20, width:20, tintColor:'#E2C302'}}/></View>
                <View style={{width:'90%'}}><Text style={{fontWeight: 'bold'}}>Not sure if you know this vegetable?</Text><Text>You can take photo to check the vegetables.</Text></View>
            </View>
            :<View>
                {!uploadState?
                <View style={{flexDirection:'row', backgroundColor:'#EEE294', borderRadius:0, height:70, width:'100%', alignItems:'center', borderRadius:10, marginTop:10}}>
                    <View style={{width:'10%',alignItems:'center'}}><Image source={require('../assets/notification.png')} style={{height:20, width:20, tintColor:'#E2C302'}}/></View>
                    <View style={{width:'90%'}}><Text style={{fontWeight: 'bold'}}>Can only predict the vegetables that are in the system.</Text></View>
                </View>:
                <View style={{flexDirection:'row', backgroundColor:'#EEE294', borderRadius:0, height:70, width:'100%', alignItems:'center', borderRadius:10, marginTop:10}}>
                    <View style={{width:'10%',alignItems:'center'}}><Image source={require('../assets/notification.png')} style={{height:20, width:20, tintColor:'#E2C302'}}/></View>
                    <View style={{width:'90%'}}><Text style={{fontWeight: 'bold'}}>wait until the picture appears</Text></View>
                </View>
                }
             </View>}

             {/* recommmend */}
             <Text style={{fontWeight:'bold'}}>Recommend</Text>
                <View style={{flexDirection:'row', justifyContent:'flex-start', flexWrap: 'wrap',}}>
                    {recommendMenu.map((items) =>  
                    <View key={items._id}style={{height:170, width:145, borderRadius:10, backgroundColor:'#F1F1F1', padding:5, marginRight:5, marginBottom:5}}>
                    <View style={{flexDirection:'row'}}>
                        <View style={{width:'85%', flexDirection:'row'}}>
                        <View><Image source={{uri : items.photo}} style={{height:20, width:20, borderRadius:15}}></Image></View>
                        <View style={{marginLeft:1}}>
                            <Text style={{fontSize:7}}>{items.firstName} {items.lastName}</Text>
                            <Text style={{color:'gray',fontSize:6}}>{items.date}</Text>
                        </View>
                        </View>
                        <View style={{flexDirection:'row-reverse'}}><Image source={require('../assets/bookmark.png')} style={{height:20, width:20, tintColor:'#F06C6A'}}/></View>
                    </View>
                    <View style={{alignItems:'center'}}><Image source={{uri : items.picture}} style={{height:80, width:80, margin:5, borderRadius:0, backgroundColor:'white'}}/></View>
                    <Text style={{fontWeight:'bold', fontSize:9}}>{items.recipeName}</Text>
                    <Text style={{fontSize:8}} numberOfLines={2}>{items.directions}</Text><Text onPress={()=>props.navigation.navigate('Reivewrecipe', {idrecipe:items._id})} style={{fontSize:8, color:'blue'}}>อ่านเพิ่มเติม</Text>
                    </View>
                    )}
                </View>
          
            
    </SafeAreaView>

    </ScrollView>
    </View>
      
    </View>
);
};


export default Imagepickup;
