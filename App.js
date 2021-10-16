import React from 'react';
import { StyleSheet} from 'react-native';
import Navigationbar from './nav';


export default function App() {
  
  return (
    <Navigationbar/>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
