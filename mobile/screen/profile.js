import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView, Button } from "react-native";
// import { Button } from "react-native-elements";
import styles from "../style/styles";
import axios from "axios";
import './global.js';

const Profile = (props) => {
  const [StatusPost, setStatusPost] = useState(true)
  const [StatusFav, setStatusFav] = useState(false)
  const [AuthID, setAuthId] = useState('6231e15f4a6866246c52609d')
  const [AuthList, setAuthList] = useState([])
  const [UserPost, setUserPost] = useState([])

  useEffect(() => {
    getAuth();
    getUserPost();
  }, [UserPost]);

  const getAuth=()=>{
    axios.get(`${url}/api/users/${AuthID}`).then((response) => {
      setAuthList(response.data)
    })
  }
  const getUserPost=()=>{
    axios.get(`${url}/api/recipes/users/${AuthID}`).then((response) => {
      setUserPost(response.data)
    })
  }

return (
  <View style={styles.container}>
  <View style={styles.page}>
  <ScrollView>
    <SafeAreaView style={{marginLeft:30, marginRight:30, flex:1,marginBottom:80}}>
      <View style={{ flexDirection:'row', marginTop:30}}>
        <View><Image source={{uri : AuthList.photo}} style={{height:100, width:100, borderRadius:50, borderColor:'gray', borderWidth:1}}></Image></View>
          <View style={{marginLeft:10, flex:1}}>
            <Text style={{fontWeight:'bold', fontSize:20, marginBottom:7}}>{AuthList.firstName} {AuthList.lastName}</Text>
            <Text style={{fontWeight:'bold', fontSize:10}}>{AuthList.descriptions}</Text>
            {/* <Button title={'Edit'} backgroundColor='yellow'><Text>Edit</Text></Button> */}
            
          </View>

      </View>
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity onPress={()=>{setStatusPost(true), setStatusFav(false)}} style={{height:30,borderWidth:1, borderColor:StatusPost?"#A69C9A":"black", marginTop:10, marginBottom:10, width:'50%', alignItems:'center', justifyContent: 'center'}}><Text style={{fontWeight:'bold', fontSize:10, color:StatusPost?"#A69C9A":"black",}}>{AuthList.postCount} POST</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>{setStatusPost(false), setStatusFav(true)}}  style={{height:30, borderWidth:1, borderColor:StatusFav?"#A69C9A":"black", marginTop:10, marginBottom:10, width:'50%', alignItems:'center', justifyContent: 'center'}}><Text style={{fontWeight:'bold', fontSize:10, color:StatusFav?"#A69C9A":"black"}}>2 Favorites</Text></TouchableOpacity>
      </View>
      
      
      {StatusPost?
        // Post card
        <View style={{flexDirection:'row', justifyContent:'flex-start', flexWrap: 'wrap',}}>
          {UserPost.map(UserPost=>
          <View style={{height:170, width:145, borderRadius:10, backgroundColor:'#EBEBEB', padding:5, marginRight:5, marginBottom:5}}>
            <View style={{flexDirection:'row'}}>
              <View style={{flexDirection:'row', width:'90%'}}><Text style={{color:'gray',fontSize:6}}>{UserPost.date}</Text></View>
              <TouchableOpacity onPress={()=>props.navigation.navigate('Editrecipe', {idrecipe:UserPost._id})}><Image source={require('../assets/pencil.png')}  style={{width:15, height:15, tintColor:'gray'}}/></TouchableOpacity>
            </View>
            <View style={{alignItems:'center'}}><Image source={{uri : UserPost.picture}} style={{height:80, width:80, margin:5, borderRadius:0}}/></View>
            <Text style={{fontWeight:'bold', fontSize:9}}>{UserPost.recipeName}</Text>
            <Text style={{fontSize:8}} numberOfLines={2}>{UserPost.directions}</Text><Text onPress={()=>props.navigation.navigate('Reivewrecipe', {idrecipe:UserPost._id})} style={{fontSize:8, color:'blue'}}>อ่านเพิ่มเติม</Text>
          </View>
          )}
          
        </View>:
        // favorite card
        <View style={{flexDirection:'row', justifyContent:'flex-start', flexWrap: 'wrap',}}>
          
          <View style={{height:170, width:145, borderRadius:10, backgroundColor:'#EBEBEB', padding:5, marginRight:5, marginBottom:5}}>
            <View style={{flexDirection:'row'}}>
              <View style={{width:'85%', flexDirection:'row'}}>
                <View><Image source={require('../assets/profilefacebook.jpg')} style={{height:20, width:20, borderRadius:15}}></Image></View>
                <View style={{marginLeft:1}}>
                  <Text style={{fontSize:7}}>Thitiwut.</Text>
                  <Text style={{color:'gray',fontSize:6}}>sun 29 AUG 00:00</Text>
                </View>
              </View>
              <View style={{flexDirection:'row-reverse'}}><Image source={require('../assets/bookmark.png')} style={{height:20, width:20, tintColor:'#F06C6A'}}/></View>
            </View>
            <View style={{alignItems:'center'}}><Image source={require('../assets/fried-rice.jpg')} style={{height:80, width:80, margin:5, borderRadius:0}}/></View>
            <Text style={{fontWeight:'bold', fontSize:9}}>สูตรทำข้าวผัด</Text>
            <Text style={{fontSize:8}} numberOfLines={2}>1.ผัดหมูให้สุก.....asdasdasdasdasdadasdasdasdasdsdfsdfsdfsdfsdfsdfdsfdsfdsfdsfs</Text><Text onPress={()=>props.navigation.navigate('Reivewrecipe')} style={{fontSize:8, color:'blue'}}>อ่านเพิ่มเติม</Text>
          </View>
          
          <View style={{height:170, width:145, borderRadius:10, backgroundColor:'#EBEBEB', padding:5, marginRight:5, marginBottom:5}}>
            <View style={{flexDirection:'row'}}>
              <View style={{width:'85%', flexDirection:'row'}}>
                <View><Image source={require('../assets/profilefacebook.jpg')} style={{height:20, width:20, borderRadius:15}}></Image></View>
                <View style={{marginLeft:1}}>
                  <Text style={{fontSize:7}}>Thitiwut.</Text>
                  <Text style={{color:'gray',fontSize:6}}>sun 29 AUG 00:00</Text>
                </View>
              </View>
              <View style={{flexDirection:'row-reverse'}}><Image source={require('../assets/bookmark.png')} style={{height:20, width:20, tintColor:'#F06C6A'}}/></View>
            </View>
            <View style={{alignItems:'center'}}><Image source={require('../assets/fried-rice.jpg')} style={{height:80, width:80, margin:5, borderRadius:0}}/></View>
            <Text style={{fontWeight:'bold', fontSize:9}}>สูตรทำข้าวผัด</Text>
            <Text style={{fontSize:8}} numberOfLines={2}>1.ผัดหมูให้สุก.....asdasdasdasdasdadasdasdasdasdsdfsdfsdfsdfsdfsdfdsfdsfdsfdsfs</Text><Text onPress={()=>props.navigation.navigate('Reivewrecipe')} style={{fontSize:8, color:'blue'}}>อ่านเพิ่มเติม</Text>
          </View>
          
          <View style={{height:170, width:145, borderRadius:10, backgroundColor:'#EBEBEB', padding:5, marginRight:5, marginBottom:5}}>
            <View style={{flexDirection:'row'}}>
              <View style={{width:'85%', flexDirection:'row'}}>
                <View><Image source={require('../assets/profilefacebook.jpg')} style={{height:20, width:20, borderRadius:15}}></Image></View>
                <View style={{marginLeft:1}}>
                  <Text style={{fontSize:7}}>Thitiwut.</Text>
                  <Text style={{color:'gray',fontSize:6}}>sun 29 AUG 00:00</Text>
                </View>
              </View>
              <View style={{flexDirection:'row-reverse'}}><Image source={require('../assets/bookmark.png')} style={{height:20, width:20, tintColor:'#F06C6A'}}/></View>
            </View>
            <View style={{alignItems:'center'}}><Image source={require('../assets/fried-rice.jpg')} style={{height:80, width:80, margin:5, borderRadius:0}}/></View>
            <Text style={{fontWeight:'bold', fontSize:9}}>สูตรทำข้าวผัด</Text>
            <Text style={{fontSize:8}} numberOfLines={2}>1.ผัดหมูให้สุก.....asdasdasdasdasdadasdasdasdasdsdfsdfsdfsdfsdfsdfdsfdsfdsfdsfs</Text><Text onPress={()=>props.navigation.navigate('Reivewrecipe')} style={{fontSize:8, color:'blue'}}>อ่านเพิ่มเติม</Text>
          </View>

          
          
        </View>}
        <Button title={'Logout'} color="#FF8B69" onPress={()=>props.navigation.popToTop()}></Button>
        





      
    </SafeAreaView>
    </ScrollView>
  </View>
</View>
);
};

export default Profile;
