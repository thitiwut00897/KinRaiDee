import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import styles from "../style/styles";
const Profile = (props) => {
  const [Post, setPost] = useState(true)
return (
  <View style={styles.container}>
  <View style={styles.page}>
    <View style={{marginLeft:30, marginRight:30}}>
      <View style={{ flexDirection:'row', marginTop:30}}>
        <View><Image source={require('../assets/profilefacebook.jpg')} style={{height:100, width:100, borderRadius:50, borderColor:'gray', borderWidth:1}}></Image></View>
          <View style={{marginLeft:10}}>
            <Text style={{fontWeight:'bold', fontSize:20, marginBottom:7}}>Thitiwut</Text>
            <Text style={{fontWeight:'bold', fontSize:10}}>สามารถทำอาหารไทยได้</Text>
          </View>
      </View>
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity onPress={()=>setPost(true)} style={{height:30, borderWidth:1, borderColor:'gray', marginTop:10, marginBottom:10, width:'50%', alignItems:'center', justifyContent: 'center'}}><Text style={{fontWeight:'bold', fontSize:10}}>25 POST</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>setPost(false)}  style={{height:30, borderWidth:1, borderColor:'gray', marginTop:10, marginBottom:10, width:'50%', alignItems:'center', justifyContent: 'center'}}><Text style={{fontWeight:'bold', fontSize:10}}>2 Favorites</Text></TouchableOpacity>
      </View>
      {Post?
        // Post card
        <View style={{flexDirection:'row'}}>
          <View style={{height:160, width:145, borderRadius:10, backgroundColor:'#EBEBEB', padding:5, marginRight:5}}>
            <View style={{flexDirection:'row'}}>
              <View style={{flexDirection:'row', width:'90%'}}><Text style={{color:'gray',fontSize:6}}>sun 29 AUG 00:00</Text></View>
              <View><Image source={require('../assets/pencil.png')} style={{width:10, height:10, tintColor:'gray'}}/></View>
            </View>
            <View style={{alignItems:'center'}}><Image source={require('../assets/fried-rice.jpg')} style={{height:80, width:80, margin:5, borderRadius:0}}/></View>
            <Text style={{fontWeight:'bold', fontSize:9}}>สูตรทำข้าวผัด</Text>
            <Text style={{fontSize:8}} numberOfLines={2}>1.ผัดหมูให้สุก.....asdasdasdasdasdadasdasdasdasdsdfsdfsdfsdfsdfsdfdsfdsfdsfdsfs</Text><Text onPress={()=>props.navigation.navigate('Reivewrecipe')} style={{fontSize:8, color:'blue'}}>อ่านเพิ่มเติม</Text>
          </View>

          <View style={{height:160, width:145, borderRadius:10, backgroundColor:'#EBEBEB', padding:5,}}>
            <View style={{flexDirection:'row'}}>
              <View style={{flexDirection:'row', width:'90%'}}><Text style={{color:'gray',fontSize:6}}>sun 29 AUG 00:00</Text></View>
              <View><Image source={require('../assets/pencil.png')} style={{width:10, height:10, tintColor:'gray'}}/></View>
            </View>
            <View style={{alignItems:'center'}}><Image source={require('../assets/fried-rice.jpg')} style={{height:80, width:80, margin:5, borderRadius:0}}/></View>
            <Text style={{fontWeight:'bold', fontSize:9}}>สูตรทำข้าวผัด</Text>
            <Text style={{fontSize:8}} numberOfLines={2}>1.ผัดหมูให้สุก.....asdasdasdasdasdadasdasdasdasdsdfsdfsdfsdfsdfsdfdsfdsfdsfdsfs</Text><Text onPress={()=>props.navigation.navigate('Reivewrecipe')} style={{fontSize:8, color:'blue'}}>อ่านเพิ่มเติม</Text>
          </View>
        </View>:
        // favorite card
        <View style={{flexDirection:'row'}}>
          <View style={{height:170, width:145, borderRadius:10, backgroundColor:'#EBEBEB', padding:5, marginRight:5}}>
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
          <View style={{height:170, width:145, borderRadius:10, backgroundColor:'#EBEBEB', padding:5,}}>
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
      





      
    </View>
  </View>
</View>
);
};

export default Profile;
