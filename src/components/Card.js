import React from 'react'
import { Text,View,StyleSheet,Image } from 'react-native'

export default function Card({ title,description }){
 return(
  <View style={styles.container}>
   <View>
    <Text style={styles.title}>Lorem ipsum dolor sit.</Text>
    <View style={styles.description}>
      <Text style={{ color : 'white', fontStyle: 'italic', fontSize: 13 }}>Mauris scelerisque velit id enim rutrum facilisis. Sed varius neque enim, eget tempus metus lobortis eget.</Text>
   </View>
   </View>
   <View style={styles.imgContainer}>
    <Image style={styles.img} source={require('../../src/img/neymar4.png')} />
   </View>
  </View>
 )
}

const styles = StyleSheet.create({
 container:{
  flexDirection: 'row',
  backgroundColor : '#623cea',
  width : '90%',
  height : 125,
  padding: 15,
  alignSelf : 'center',
  borderRadius: 15,
 },
 title:{
  color: 'white',
  fontSize: 15,
  fontWeight: 'bold' 
 },
 description:{
  width:'80%',
  justifyContent:'flex-start'
 },

 imgContainer: {
  position: 'absolute',
  alignSelf:'center',
  right: 0
 },
 img:{
  resizeMode: 'contain',
  width: 205,
  // marginTop: -15
}
})