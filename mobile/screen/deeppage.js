import React, {useState} from "react";
import { View, Text, StyleSheet } from "react-native";
import styles from "../style/styles";
import * as tf from '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet';
import { fetch, decodeJpeg, bundleResourceIO } from '@tensorflow/tfjs-react-native';

// Get reference to bundled model assets 
const modelJson = require('../assets/model/model.json');
const modelWeights = require('../assets/model/weights.bin');

// Use the bundleResorceIO IOHandler to load the model
const model = await tf.loadLayersModel(
  bundleResourceIO(modelJson, modelWeights));

// Load an image from the web
const uri = 'https://www.ryt9.com/img/files/20210917/iq74cc9ce7a778f088ca727a4a1f8b53bc.jpg';
const response = await fetch(uri, {}, { isBinary: true });
const imageData = await response.arrayBuffer();
const imageTensor = decodeJpeg(imageData);
  
const prediction = (await model.predict(imageTensor))[0];

// Use prediction in app
const [Predict, setPredict] = useState(prediction)

const Deeppage = (props) => {
return (
    <View style={styles.container}>
      <View style={styles.page}>
        <Text>output : {Predict}</Text>
      </View>
    </View>
);
};
export default Deeppage;
