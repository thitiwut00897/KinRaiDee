import { StyleSheet} from "react-native";

export default StyleSheet.create({
    container: {
      flex:1,
      display:'flex',
      flexDirection:'column',
      backgroundColor: '#57CC99',
      justifyContent: 'center',
    },
    page:{
      flex:10,
      borderRadius:35,
      backgroundColor: '#FFFF',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header:{
      // justifyContent: 'center',
      // flex:0, 
      flexDirection:'row',
      // top:12,
      // height:60,
    },
    profile:{
      width:30,
      height:30,
      tintColor:'black', 
      borderRadius:30, 
      backgroundColor:'white'
    },
    logo:{
      width:30,
      height:30,
      tintColor:'white', 
    },
  });