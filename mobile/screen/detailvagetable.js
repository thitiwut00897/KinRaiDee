import React from "react";
import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView} from "react-native";
import styles from "../style/styles";

const VagetableDetail = (props) => {
return (
  <View style={styles.container}>
  <View style={styles.page}>
    <SafeAreaView style={{marginLeft:30, marginRight:30, paddingTop:10, flex:1}}>
      
        <View><Text style={{color:'black', fontSize:24, fontWeight: 'bold'}}>กะเพรา</Text></View>
        <View style={{alignItems: 'center',}}>
            <Image source={require('../assets/krapao.jpg')} style={{height:135, width:135, borderRadius:100, margin:20, borderColor:'gray', borderWidth:1}}></Image>
        </View>
        <Text>Botanical(พฤภษศาสตร์): Ocimum tenuiflorum </Text>
        <Text>Common Name(ชื่อทั่วไป): กะเพรา </Text>
        <Text>Genus(ประเภท): Ocimum </Text>
        <View style={{height:10, borderTopWidth:1, borderColor:'gray', marginTop:10, marginBottom:10}}></View>
        <Text style={{fontWeight: 'bold'}}>Descriptions</Text>
        
        <ScrollView>
        <Text>เป็นไม้พุ่มเตี้ยความสูงประมาณ 1-3 ฟุต ต้นค่อนข้างแข็ง แตกกิ่งก้านสาขามาก ก้านเป็นขน ก้านใบยาว รูปใบเรียว โคนใบรูดในลักษณะเรียวปลายมนรอบขอบใบเป็นหยัก พื้นใบด้านหน้าสีเขียว หรือแดงแก่กว่าด้านหลัง ซึ่งมีกระดูกใบนูนเห็นได้ชัด ดอกออกเป็นช่อตั้งขึ้นคล้ายฉัตร ออกบริเวณปลายยอดและปลายกิ่ง ดอกย่อยมีขนาดเล็ก รูปคล้ายระฆัง กลีบดอกมีทั้งชนิดสีขาวลายม่วงแดงและสีขาว เมล็ดอยู่ภายในกลีบ กลีบเลี้ยงสีม่วง ผลแห้งแล้วแตกออก เมื่อเมล็ดแก่สีดำ เมื่อนำไปแช่น้ำเปลือกหุ้มเมล็ดพองออกเป็นเมือกใใใใใใใใใใใใใใใใใใใใใใใใใใใใใใใใใใใใใใใใใใใใใใใใใใใใใใใใใใใใใใใใใใใใใใใใใใใใใใใใใใ\sdsadfsdfsgfdsafdsfdsgfdsfdsfdssfsfdsgfghkfhgfgjhfkjghfghfkghhgfhgkfghfkhgdhtyctytsdfaszzeutrou7tphk;ljh875796476ghjfhgkfghjfhgfj</Text>
        <Text></Text>      
      </ScrollView>
    </SafeAreaView>
  </View>
</View>
);
};
export default VagetableDetail;
