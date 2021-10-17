import React from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
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
                                style={{
                                    width:35,
                                    height:35,
                                    tintColor:focused?'white':'gray',
                                }}
                                />
                            {/* {focused?<Text style={{color:'white', fontSize:12}}>Home</Text>:null} */}
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
                                style={{
                                    width:35,
                                    height:35,
                                    tintColor:focused?'white':'gray',
                                }}
                                />
                            {/* {focused?<Text style={{color: 'white', fontSize:12}}>Vagetable</Text>:null} */}
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
                                style={{
                                    width:35,
                                    height:35,
                                    tintColor:focused?'white':'gray',
                                }}
                                />
                            {/* {focused?<Text style={{color:'white', fontSize:12}}>Notification</Text>:null} */}
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
                                style={{
                                    width:35,
                                    height:35,
                                    tintColor:focused?'white':'gray',
                                }}
                                />
                            {/* {focused?<Text style={{color:'white', fontSize:12}}>Profile</Text>:null} */}
                        </View>
                        );
                    }}},
        },{tabBarOptions:{
                showLabel: false,
                style:{
                    position:'absolute',
                    bottom:0,
                    left:2,
                    right:2,
                    height:60,
                    elevation:0,
                    backgroundColor: '#57CC99',
                    borderRadius:10,
                } 
            }
        }
    );
    const Stack = createStackNavigator(
        {
            Login:{screen:Login},
            Signup:{screen:Signup},
            Main:{screen:Tab,
                navigationOptions: {headerShown: false,},},
        }
    );

export default createAppContainer(Tab);   


