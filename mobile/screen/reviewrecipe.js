import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TextInput, Button, SafeAreaView, ScrollView, Share} from "react-native";
import styles from "../style/styles";
import axios from "axios";
import './global.js';
import { TouchableOpacity } from "react-native-gesture-handler";
import firebase from 'firebase';
import 'firebase/firestore';
import color from '../style/color'

const Reviewrecipe = (props) => {
  const auth = firebase.auth();
  const firestore = firebase.firestore();
 const [AuthId, setAuthId] = useState(auth.currentUser?.uid)
  ///recipe detail state
  const [RecipeID, setRecipeID] = useState(props.navigation.getParam('idrecipe'));
  const [ownRecipe, setownRecipe] = useState('')
  const [photoProfile, setphotoProfile] = useState()
  const [directions, setdirections] = useState('')
  const [ingredients, setingredients] = useState('')
  const [recipeName, setrecipeName] = useState('')
  const [IDRecipe, setIDRecipe] = useState('')
  const [picRecipe, setpicRecipe] = useState()
  const [date, setdate] = useState('')
  const [userId, setuserId] = useState('')
///comment state
  const [Commentinput, setCommentinput] = useState('')
  const [getAllComment, setGetAllComment] = useState([])
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    getDetailRecipe();
    getComment();
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    setCurrentDate(
      date + '/' + month + '/' + year 
      + ' ' + hours + ':' + min + ':' + sec
    );
  }, []);

  const getDetailRecipe=()=>{
  
    axios.get(`${url}/api/recipes/${RecipeID}`).then((response) => {
      setownRecipe(response.data[0].firstName)
      setphotoProfile(response.data[0].photo)
      setdirections(response.data[0].directions)
      setingredients(response.data[0].ingredients)
      setrecipeName(response.data[0].recipeName)
      setpicRecipe(response.data[0].picture)
      setIDRecipe(response.data[0]._id)
      setdate(response.data[0].date)
      setuserId(response.data[0].userId)
    }).catch((err)=>{
      console.log(err);
    })
  }

  const postComment=async()=>{
    const users = firestore.collection('Auth').doc(AuthId);
    const doc = await users.get();
    axios.post(`${url}/api/userComments/create`, 
    {"comment": Commentinput,
    "userId": doc.data()._id,
    "date": currentDate,
    "recipeId": RecipeID,}).then((response) => {
      setCommentinput('')
      getComment()
      console.log(response.data)
      console.log('Success')
      
    }).catch((err)=>{
      console.log(err);
    })
  }

  const getComment=()=>{
    axios.get(`${url}/api/userComments/recipes/${props.navigation.getParam('idrecipe')}`).then((response) => {
      setGetAllComment(response.data)
    })
  }


    const onShare = async () => {
      
      try {
        const result = await Share.share({
          title:'มาลองชิมสูตรอาหารนี้สิ   '+recipeName+'   สามารถโหลด KinRaiDee เพื่อดูรายละเอียดเพิ่มเติมได้ >.<',
          url: picRecipe,
        });
        if (result.action === Share.sharedAction) {
          if (result.activityType) {
            // shared with activity type of result.activityType
          } else {
            // shared
          }
        } else if (result.action === Share.dismissedAction) {
          // dismissed
        }
      } catch (error) {
        alert(error.message);
      }
    };

  
return (
    
    <View style={styles.container}>
      <View style={styles.page}>
        <ScrollView>
            <SafeAreaView style={{paddingTop:30, marginBottom:0, paddingHorizontal:'5%'}}>
                <View style={Styles.profileWrapper}>
                    <View style={Styles.profileWrapperLeft}>
                        <Image source={{uri : photoProfile}} style={Styles.profileImage}></Image>
                        <View>
                            <Text style={{fontSize:9}}>{ownRecipe}</Text>
                            <Text style={{color:'gray',fontSize:9}}>{date}</Text>
                        </View>
                    </View>
                    <SafeAreaView style={Styles.profileWrapperRight}>
                        <Image source={require('../assets/bookmark.png')} style={{height:30, width:30, tintColor:true?'#F06C6A':'gray'}}/>
                    </SafeAreaView>
                </View>

                
                <View style={{alignItems: 'center',}}>
                    <Image source={{uri : picRecipe}} style={Styles.imageRecipe}></Image>
                </View>
                <Text style={Styles.headderText}>{recipeName}</Text>
                <View style={Styles.line}></View>
                <Text style={Styles.headderText}>Ingredients</Text>
                
                <Text style={Styles.detailText}>{ingredients}</Text>
                
                <Text style={Styles.headderText}>Directions</Text>
                
                <Text style={Styles.detailText}>{directions}</Text>
                <View style={Styles.Share}>
                  <Button title="Share" onPress={onShare}></Button>
                </View>
              
                <View style={Styles.line}></View>
            

            {/* --------------------------------comment------------------------------------ */}
                  <View><Text style={Styles.headderText}>Comment</Text></View>
              {getAllComment.map((items) =>
                  <View key={items._id} style={Styles.commentWrapper}>
                    <View style={Styles.commentWrapperLeft}>
                      <Image source={{uri:items.photo}} style={Styles.commentImageProfile}/>
                    </View>
                    <View style={Styles.commentWrapperRight}>
                      <Text style={[Styles.commentText, {fontWeight:'bold'}]}>{items.firstName} {items.lastName} <Text style={{fontSize:8,fontWeight:'normal'}}>{items.date}</Text></Text>
                      <Text style={Styles.commentText}>{items.comment}</Text>
                    </View>
                  </View>
              )}

                  <View style={Styles.postCommentWrapper}>
                    <View style={Styles.postCommentWrapperLeft}>
                      <TextInput
                        multiline={true}
                        numberOfLines={1}
                        onChangeText={(input) => setCommentinput(input)}
                        value={Commentinput}
                        placeholder="Write a comment"
                        style={Styles.textInputComment}/>
                    </View>
                    <View style={Styles.postCommentWrapperRight}>
                      <TouchableOpacity style={{padding:10,borderRadius:8}} disabled={Commentinput == ''?true:false} onPress={postComment}><Text style={{color:Commentinput==''?'#AFE6F5':'#5BD4F5'}}>Post</Text></TouchableOpacity>
                    </View>
                  </View>
                  
          </SafeAreaView>
        </ScrollView>
      </View>
    </View>
    
);
};

export default Reviewrecipe;
const Styles = StyleSheet.create({
profileWrapper:{
  flexDirection:'row', 
  paddingTop:10
},
profileWrapperLeft:{
  width:'90%', 
  flexDirection:'row'
},
profileWrapperRight:{
  flexDirection:'row-reverse'
},
profileImage:{
  height:30, 
  width:30, 
  borderRadius:15
},
imageRecipe:{
  height:140, 
  width:140, 
  borderRadius:70, 
  margin:10, 
  borderColor:'gray', 
  borderWidth:1, 
  backgroundColor:'white'
},
headderText:{
  fontWeight: 'bold', 
  marginBottom:5, 
  fontSize:18, 
  marginTop:10
},
detailText:{
  fontSize:12,
},
line:{
  height:10, 
  borderTopWidth:1, 
  borderColor:'gray', 
  marginTop:10, 
  marginBottom:0
},
commentWrapper:{
  flexDirection:'row', 
  marginBottom:10
},
commentWrapperLeft:{
  flexDirection:'row', 
  margin:5
},
commentWrapperRight:{
  borderRadius:10, 
  backgroundColor:color.gray, 
  padding:10, 
  width:'90%'
},
commentText:{
  fontSize:13
},
commentImageProfile:{
  height:30, 
  width:30, 
  borderRadius:50, 
  borderColor: '#E5E7E9', 
  borderWidth:1
},
postCommentWrapper:{
  flexDirection:'row', 
  marginTop:20
},
postCommentWrapperLeft:{
  width:'90%'
},
postCommentWrapperRight:{
  
},
textInputComment:{
  borderColor: color.grayTextinput,
  borderWidth: 1,
  borderRadius:8, 
  padding:5
},
Share:{
  marginTop:15
},
})