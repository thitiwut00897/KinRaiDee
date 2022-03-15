import { StyleSheet} from "react-native";

export default StyleSheet.create({
    container: {
      flex:1,
      display:'flex',
      flexDirection:'column',
      backgroundColor: '#57CC99',
      // backgroundColor: 'white',
      // backgroundColor:'#87FAD2',
      justifyContent: 'center',
    },
    page:{
      top:0,
      flex:1,
      borderRadius:35,
      backgroundColor: 'white',
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
    backgroundColor: '#E8E8E8',
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
  // cardview:{
  //   height:180, width:140, borderWidth:0,
  //   shadowColor: "#000",
  //   shadowOffset: {
  //     width: 0,
  //     height: 1,
  //   },
  //   shadowOpacity: 0.18,
  //   shadowRadius: 1.00,

  //   elevation: 1,
  //     }
  });