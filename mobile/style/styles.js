import { StyleSheet} from "react-native";


export default StyleSheet.create({
    container: {
      flex:1,
      display:'flex',
      flexDirection:'column',
      backgroundColor: '#57CC99',
      // backgroundColor: 'F1E1A6',
      // backgroundColor:'#87FAD2',
      justifyContent: 'center',
    },
    page:{
      top:0,
      flex:1,
      paddingBottom:30,
      borderTopRightRadius:35,
      borderTopLeftRadius:35,
      backgroundColor: '#F2F5F5',
      // backgroundColor: '#97DBAE',
      marginBottom:0,
      width:'auto',
      // backgroundColor:'#87FAD2',
      // backgroundColor: '#57CC99',
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    // header:{
    //   // justifyContent: 'center',
    //   // flex:0, 
    //   flexDirection:'row',
    //   // top:12,
    //   // height:60,
    // },
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
  //   btnCircle: {
  //     width: 60,
  //     height: 60,
  //     borderRadius: 30,
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //     backgroundColor: 'white',
  //     shadowColor: "#000",
  //     shadowOffset: {
  //     width: 0,
  //     height: 1,
  //     },
  //     shadowOpacity: 0.20,
  //     shadowRadius: 1.41,
  //     elevation: 1,
  //     bottom: 28
  // },
  btnCircleUp: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#E8E8E8', 
    backgroundColor: '#F4BBBB',
    marginBottom:10,
    bottom: 0,
    shadowColor: "#000",
    shadowOffset: {
    width: 0,
    height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 1,
  },
  Text:{
    fontFamily:'Athiti-Bold'
  },
  camera:{
    height:300,
    margin:20
  },

  });