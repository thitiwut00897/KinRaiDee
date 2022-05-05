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
      top:0,
      flex:1,
      paddingBottom:30,
      borderTopRightRadius:35,
      borderTopLeftRadius:35,
      // backgroundColor: '#F2F5F5',
      backgroundColor: '#FEFEFE',
      marginBottom:0,
      width:'auto',

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
  photopreview:{
    height:280,
    width:280,
    marginTop:20,
    borderWidth:1,
    borderColor:'#BBBFBF',
    borderRadius:20
  },
  beforphoto:{
    height:280,
    width:280,
    marginTop:20,
    borderWidth:1,
    borderColor:'#BBBFBF',
    tintColor:'#BBBFBF',
    borderRadius:20
  },
  messageError:{
    alignItems:'center', 
    color:'red', 
    fontSize:12
  },
  textInput: {

    borderColor: '#CCCFCF',borderWidth: 1,borderRadius:8, marginTop:10,height:43, paddingHorizontal: 10
    
  },
  headderText:{
    fontWeight: 'bold', marginTop:5, marginBottom:5
  }

  });