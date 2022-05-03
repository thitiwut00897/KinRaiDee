import React from 'react';
import { StyleSheet, View} from 'react-native';
import Navigationbar from './navigation/nav';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Remote debugger']);
import firebase from 'firebase'

import firebaseConfig from './screen/firebase/firebase';


export default function App() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
  }
  return (
      <Navigationbar/>
  );
}

