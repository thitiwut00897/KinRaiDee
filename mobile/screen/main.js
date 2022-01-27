import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Button} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import ImagedCarouselCard from "react-native-imaged-carousel-card";
import styles from "../style/styles";


const Main = (props) => {
  const [Search, setSearch] = useState('')
return (
    <View style={styles.container}>
      <View style={styles.page}>
        <View style={{marginLeft:30, marginRight:30, paddingTop:30,fontWeight: 'bold'}}>
        <View style={{flexDirection:'row', marginBottom:10, backgroundColor:'#EBEBEB', borderRadius:6}}>
          <View style={{width:'10%',justifyContent:'center', alignItems:'center'}}><Image source={require('../assets/search.png')} style={{width:20, height:20}}/></View>
          <View style={{width:'90%'}}><TextInput multiline={false}
                  numberOfLines={1}
                  onChangeText={(Search) => setSearch({Search})}
                  value={Search}
                  placeholder="search recipe"
                  style={{}}/></View>
        </View>
          
            
            
         
          <Button title="Create Recipe" onPress={()=> props.navigation.navigate('Createrecipe')} style={{}}></Button>

        

          <Text style={{fontWeight:'bold'}}>New Post {props.navigation.getParam("Token")}</Text>
          {/* card */}
          
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
            
            </View>
        </View>
      </View>
    </View>
);
};
export default Main;
