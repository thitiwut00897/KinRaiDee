import React, { useState } from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity, Button, Picker } from 'react-native';
import { createBottomTabNavigator} from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';

import {MenuProvider,
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
  } from 'react-native-popup-menu';

import Main from '../screen/main';
import Signup from '../auth/signup';
import Login from '../auth/signin';
import Vagetable from "../screen/Vagetable";
import Deeppage from "../screen/deeppage";
import Notification from "../screen/notification";
import Profile from "../screen/profile";
import Createprofile from "../screen/createprofilepage";
import Createrecipe from "../screen/createrecipe";
import Editprofile from "../screen/editprofile";
import Editrecipe from "../screen/editrecipe";
import Reivewrecipe from "../screen/reviewrecipe";
import Detailvagetable from "../screen/detailvagetable";
import Styles from "../style/styles";


    function TitleNameHeader(){
        return(
            <View style={{flexDirection:'row'}}>
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
                                source={require('../assets/vegetable.png')}
                                resizeMode='contain'
                                style={focused?styles.IconNavbarfocus:styles.IconNavbar}
                                />
                        </View>
                        );
                    }}},
            Deeppage:{screen:Reivewrecipe,
                navigationOptions: {
                    tabBarIcon: ({ focused }) => {
                        return(
                                <View style={{width:80, height:80,
                                borderTopLeftRadius:40,borderTopRightRadius:40,
                                backgroundColor: '#57CC99',
                                // backgroundColor:"white",
                                marginBottom:30, alignItems: 'center',
                                justifyContent: 'center',
                                // borderWidth:1,
                                borderBottomLeftwidht:0,borderBottomRightwidht:0,
                                }}>
                                
                                <View style={Styles.btnCircleUp}>
                                    <Image source={require('../assets/camera.png')} resizeMode='contain'style={{width:35,height:35,tintColor:focused?'black':'gray'}}/>
                                </View>
                                
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
                    // backgroundColor: 'white',
                    borderTopWidth:0,
                    // borderTopLeftRadius:20,
                    // borderTopRightRadius:20
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
                    elevation:0, //border headerBar
                    borderBottomWidth:0
                },
                
                
                
            },},
            Signup:{screen:Signup,
                navigationOptions: {
                    headerShown: true,
                    title: '',
                    headerStyle:{
                        backgroundColor:'#57CC99',
                        elevation:0, //border headerBar
                        borderBottomWidth:0
                    },
                    
                    headerRight:()=>{return(<Text style={{color:'white', right:10}} onPress={()=> Login}>Login</Text>);},
                    
                },},
            Createprofile:{screen:Createprofile,
                navigationOptions: {
                    headerShown: true,
                    title: '',
                    headerStyle:{
                        backgroundColor:'#57CC99',
                        elevation:0, //border headerBar
                        borderBottomWidth:0
                    },
                    
                    headerRight:()=>{return(<Text style={{color:'white', right:10}} onPress={()=>''}>Login</Text>);},
                    
                },},
            Createrecipe:{screen:Createrecipe,
                navigationOptions: {
                    headerShown: true,
                    title: '',
                    headerStyle:{
                        backgroundColor:'#57CC99',
                        elevation:0, //border headerBar
                        borderBottomWidth:0
                    },
                },}, 
            Detailvagetable:{screen:Detailvagetable,
                navigationOptions: {
                    headerShown: true,
                    title: '',
                    headerStyle:{
                        backgroundColor:'#57CC99',
                        elevation:0, //border headerBar
                        borderBottomWidth:0
                    },
                },}, 
            Editprofile:{screen:Editprofile,
                navigationOptions: {
                    headerShown: true,
                    title: '',
                    headerStyle:{
                        backgroundColor:'#57CC99',
                        elevation:0, //border headerBar
                        borderBottomWidth:0
                    },
                },},
            Editrecipe:{screen:Editrecipe,
                navigationOptions: {
                    headerShown: true,
                    title: '',
                    headerStyle:{
                        backgroundColor:'#57CC99',
                        elevation:0, //border headerBar
                        borderBottomWidth:0
                    },
                },},
            Reivewrecipe:{screen:Reivewrecipe,
                navigationOptions: {
                    headerShown: true,
                    title: '',
                    headerStyle:{
                        backgroundColor:'#57CC99',
                        elevation:0, //border headerBar
                        borderBottomWidth:0
                    },
                },},    
            Main:{screen:Tab,
                navigationOptions: {
                    headerShown: true,
                    title: <TitleNameHeader/>,
                    headerStyle:{
                        backgroundColor:'#57CC99',
                        // backgroundColor:'#87FAD2',
                        
                        elevation:0, //border headerBar
                        borderBottomWidth:0
                        
                    },
                    headerLeft:()=>{},//<Image source={require('../assets/profilefacebook.jpg')} style={{height:40, width:40, borderRadius:30, right:10}}></Image>
                    headerRight:()=>
                    {
                        // return(
                        // <Image source={require('../assets/profilefacebook.jpg')} style={{height:40, width:40, borderRadius:30,marginRight:20, marginTop:10}}></Image>
                        // );
                    }
                    
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


