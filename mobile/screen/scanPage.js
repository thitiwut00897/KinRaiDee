import React, { useState, useEffect } from 'react';
import { StyleSheet ,Text, View, Button, Image, ScrollView} from 'react-native';
import { Camera } from 'expo-camera';
import styles from "../style/styles";

export default function scanPage() {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');
})();
  }, []);
const takePicture = async () => {
    if(camera){
        const data = await camera.takePictureAsync(null)
        setImage(data.uri);
    }
  }

  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }


  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.page}>
            <Camera ref={ref => setCamera(ref)}style={styles.camera} type={type}ratio={'1:1'} />
      
       <Button title="Take Picture" onPress={() => takePicture()} />
        {image && <Image source={{uri: image}} style={styles.camera}/>}
        </View>
      </ScrollView>
    </View>
  );
}
