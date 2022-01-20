import React from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity, Button } from 'react-native';
import { createBottomTabNavigator} from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import Main from '../screen/main';
import Signup from '../auth/signup';
import Login from '../auth/signin';
import Vagetable from "../screen/Vagetable";
import Deeppage from "../screen/deeppage";
import Notification from "../screen/notification";
import Profile from "../screen/profile";
import Createprofile from "../screen/createprofilepage";
import Styles from "../style/styles";

    function TitleNameHeader(){
        return(
            <View style={Styles.header}>
                <Image source={require('../assets/earth.png')} style={Styles.logo}></Image>
                <Text style={{color:'white', paddingLeft:10, fontSize:16}}>KIN RAI DEE</Text>
            </View>
        );}

    const Tab = createBottomTabNavigator(
        {   
            
            Main:{screen:Main,
                navigationOptions: {
                    tabBarIcon: ({ focused }) => {
                        return(
                        <View style={{alignContent:"center", justifyContent:"center"}}>
                            <Image 
                                source={require('../assets/home.png')}
                                resizeMode='contain'
                                style={focused?styles.IconNavbarfocus:styles.IconNavbar}
                                />
                        </View>
                        );
                    }}},
            Vagetable:{screen:Vagetable,
                navigationOptions: {
                    tabBarIcon: ({ focused }) => {
                        return(
                        <View style={{alignContent:"center", justifyContent:"center"}}>
                            <Image 
                                source={require('../assets/carrot.png')}
                                resizeMode='contain'
                                style={focused?styles.IconNavbarfocus:styles.IconNavbar}
                                />
                        </View>
                        );
                    }}},
            Deeppage:{screen:Deeppage,
                navigationOptions: {
                    tabBarIcon: ({ focused }) => {
                        return(
                    
                                <View style={{
                                    top:-20,
                                    justifyContent:'center',
                                    alignContent:'center',
                                    width:70,
                                    height:70,
                                    borderRadius:35,
                                    backgroundColor:'#57CC99'
                                    
                                }}>
                                    <Image source={require('../assets/camera.png')} resizeMode='contain'style={{width:50,height:50,left:10,right:10,tintColor:focused?'black':'gray'}}/>
                                    
                                </View>
                
                            
                          
                        );
                    }
                }},
            Notification:{screen:Notification,
                navigationOptions: {
                    tabBarIcon: ({ focused }) => {
                        return(
                        <View style={{alignContent:"center", justifyContent:"center"}}>
                            <Image 
                                source={require('../assets/notification.png')}
                                resizeMode='contain'
                                style={focused?styles.IconNavbarfocus:styles.IconNavbar}
                                />
                        </View>
                        );
                    }}},
            Profile:{screen:Profile,
                navigationOptions: {
                    tabBarIcon: ({ focused }) => {
                        return(
                        <View style={{alignContent:"center", justifyContent:"center"}}>
                            <Image 
                                source={require('../assets/user.png')}
                                resizeMode='contain'
                                style={focused?styles.IconNavbarfocus:styles.IconNavbar}
                                />
                        </View>
                        );
                    }}},
        },{tabBarOptions:{
                showLabel: false,
                style:{
                    position:'absolute',
                    bottom:0,
                    left:0,
                    right:0,
                    height:60,
                    elevation:0,
                    backgroundColor: '#57CC99',
                    borderRadius:1,
                },
            
            }
        }
    );
    const Stack = createStackNavigator(
        {
            Login:{screen:Login,
                navigationOptions: {
                headerShown: true,
                title: '',
                headerStyle:{
                    backgroundColor:'#57CC99',
                    elevation:0 //border headerBar
                },
                
                
                
            },},
            Signup:{screen:Signup,
                navigationOptions: {
                    headerShown: true,
                    title: '',
                    headerStyle:{
                        backgroundColor:'#57CC99',
                        elevation:0 //border headerBar
                    },
                    
                    headerRight:()=>{return(<Text style={{color:'white', right:10}} onPress={()=> Login}>Login</Text>);},
                    
                },},
            Createprofile:{screen:Createprofile,
                navigationOptions: {
                    headerShown: true,
                    title: '',
                    headerStyle:{
                        backgroundColor:'#57CC99',
                        elevation:0 //border headerBar
                    },
                    
                    headerRight:()=>{return(<Text style={{color:'white', right:10}} onPress={()=>Login}>Login</Text>);},
                    
                },},    
            Main:{screen:Tab,
                navigationOptions: {
                    headerShown: true,
                    title: <TitleNameHeader/>,
                    headerStyle:{
                        backgroundColor:'#57CC99',
                        elevation:0 //border headerBar
                    },
                    headerLeft:()=>{},
                    headerRight:()=>{return(<Image source={require('../assets/profilefacebook.jpg')} style={{height:40, width:40, borderRadius:30, right:10}}></Image>);},
                    
                },},
        }
    );

   

export default createAppContainer(Stack);   

const styles = StyleSheet.create({
    IconNavbarfocus: {
        width:30,
        height:30,
        tintColor:'white',
    },
    IconNavbar: {
        width:30,
        height:30,
        tintColor:'gray',
    }
    
  });


