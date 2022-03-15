import React from 'react';
import { StyleSheet, View} from 'react-native';
import Navigationbar from './navigation/nav';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Remote debugger']);


export default function App() {
  return (
    
      <Navigationbar/>
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#57CC99',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
