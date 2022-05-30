import React from "react";
import { View, Image, StyleSheet, Text} from 'react-native';
import { createBottomTabNavigator} from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';

import Main from '../screen/main';
import Signup from '../auth/signup';
import Login from '../auth/signin';
import Vagetable from "../screen/Vagetable";
import Profile from "../screen/profile";
import Createprofile from "../screen/createprofilepage";
import Createrecipe from "../screen/createrecipe";
import Editprofile from "../screen/editprofile";
import Editrecipe from "../screen/editrecipe";
import Reivewrecipe from "../screen/reviewrecipe";
import Detailvagetable from "../screen/detailvagetable";
import Styles from "../style/styles";
import Imagepickup from "../screen/imagepickup";




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
            Createrecipe:{screen:Createrecipe,
                navigationOptions: {
                    tabBarIcon: ({ focused }) => {
                        return(
                                <View style={{width:80, height:80,
                                borderTopLeftRadius:40,borderTopRightRadius:40,
                                backgroundColor:"white",
                                marginBottom:30, alignItems: 'center',
                                justifyContent: 'center',
                                borderBottomLeftwidht:0,borderBottomRightwidht:0,
                                }}>
                                
                                <View style={Styles.btnCircleUp}>
                                    <Image source={require('../assets/plus.png')} resizeMode='contain'style={{width:35,height:35,tintColor:focused?'black':'gray'}}/>
                                </View>
                                
                                </View>
                            
                          
                        );
                    }
                }},
            Deeppage:{screen: Imagepickup,
                navigationOptions: {
                    tabBarIcon: ({ focused }) => {
                        return(
                        <View style={{alignContent:"center", justifyContent:"center"}}>
                            <Image 
                                source={require('../assets/photo-camera.png')}
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
                    bottom:10,
                    left:8,
                    right:8,
                    height:60,
                    elevation:0,
                    backgroundColor: 'white',
                    borderTopWidth:0,
                    borderRadius:15,
                    shadowColor:'#7F5DF0',
                    shadowOffset:{
                        width:0,
                        height:10
                    },
                    shadowOpacity:0.25,
                    shadowRadius:3.5,
                    elevation:5
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
                    elevation:0,
                    borderBottomWidth:0
                },
                
                
                
            },},
            Signup:{screen:Signup,
                navigationOptions: {
                    headerShown: true,
                    title: '',
                    headerStyle:{
                        backgroundColor:'#57CC99',
                        elevation:0,
                        borderBottomWidth:0
                    },
                    
                },},
            Createprofile:{screen:Createprofile,
                navigationOptions: {
                    headerShown: true,
                    title: '',
                    headerStyle:{
                        backgroundColor:'#57CC99',
                        elevation:0,
                        borderBottomWidth:0
                    },       
                },},
            Createrecipe:{screen:Createrecipe,
                navigationOptions: {
                    headerShown: true,
                    title: '',
                    headerStyle:{
                        backgroundColor:'#57CC99',
                        elevation:0,
                        borderBottomWidth:0
                    },
                },}, 
            Detailvagetable:{screen:Detailvagetable,
                navigationOptions: {
                    headerShown: true,
                    title: '',
                    headerStyle:{
                        backgroundColor:'#57CC99',
                        elevation:0,
                        borderBottomWidth:0
                    },
                },}, 
            Editprofile:{screen:Editprofile,
                navigationOptions: {
                    headerShown: true,
                    title: '',
                    headerStyle:{
                        backgroundColor:'#57CC99',
                        elevation:0,
                        borderBottomWidth:0
                    },
                },},
            Editrecipe:{screen:Editrecipe,
                navigationOptions: {
                    headerShown: true,
                    title: '',
                    headerStyle:{
                        backgroundColor:'#57CC99',
                        elevation:0,
                        borderBottomWidth:0
                    },
                },},
            Reivewrecipe:{screen:Reivewrecipe,
                navigationOptions: {
                    headerShown: true,
                    title: '',
                    headerStyle:{
                        backgroundColor:'#57CC99',
                        elevation:0,
                        borderBottomWidth:0
                    },
                },},    
            Main:{screen:Tab,
                navigationOptions: {
                    headerShown: true,
                    title: <TitleNameHeader/>,
                    headerStyle:{
                        backgroundColor:'#57CC99',     
                        elevation:0,
                        borderBottomWidth:0
                        
                    },
                    headerLeft:()=>{},
                    
                },},
        }
    );

   

export default createAppContainer(Stack);   

const styles = StyleSheet.create({
    IconNavbarfocus: {
        width:30,
        height:30,
        tintColor:'#57CC99',
    },
    IconNavbar: {
        width:30,
        height:30,
        tintColor:'#D0D4D6',
    }
    
  });


