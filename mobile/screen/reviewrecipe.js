import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, Button} from "react-native";
import { color } from "react-native-reanimated";
import styles from "../style/styles";

const Reviewrecipe = (props) => {
  const [RecipeName, setRecipeName] = useState('ข้าว')
  const [Ingredients, setIngredients] = useState('"1.xxxxxxxxxx2.xxxxxxxxx3.xxxxxxxxx"')
  const [Directions, setDirections] = useState('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
  const [Bookmark, setBookmark] = useState(true)
return (
    
    <View style={styles.container}>
      <View style={styles.page}>
            <View style={{marginLeft:30, marginRight:30}}>
                
                <View style={{flexDirection:'row', paddingTop:30}}>
                    <View style={{width:'90%', flexDirection:'row'}}>
                        <View><Image source={require('../assets/profilefacebook.jpg')} style={{height:30, width:30, borderRadius:15}}></Image></View>
                            <View>
                                <Text style={{fontSize:9}}>Thitiwut.</Text>
                                <Text style={{color:'gray',fontSize:9}}>sun 29 AUG 00:00 Test</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row-reverse'}}>
                            <Image source={require('../assets/bookmark.png')} style={{height:30, width:30, tintColor:Bookmark?'#F06C6A':'gray'}}/>
                        </View>
                    </View>
                
                <View style={{alignItems: 'center',}}>
                    <Image source={require('../assets/profilefacebook.jpg')} style={{height:140, width:140, borderRadius:70, margin:10, borderColor:'gray', borderWidth:1}}></Image>
                </View>
                <Text style={{ fontWeight: 'bold'}}>สูตรการทำ{RecipeName}</Text>
                <View style={{height:10, borderTopWidth:1, borderColor:'gray', marginTop:10, marginBottom:10}}></View>
                <Text style={{ fontWeight: 'bold'}}>Ingredients</Text>
                
                <Text>{Ingredients}</Text>
                
                <Text style={{ fontWeight: 'bold'}}>Directions</Text>
                
                <Text>{Directions}</Text>

                <View style={{height:10, borderTopWidth:1, borderColor:'gray', marginTop:10, marginBottom:10}}></View>
            
            
            
            </View>
        
        
            
      </View>
      
    </View>
    
);
};

export default Reviewrecipe;
