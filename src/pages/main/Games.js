import React from 'react'
import { StyleSheet,Text,View,ScrollView,Image } from 'react-native'

export default function Games(){
   return(
      <View style={styles.container}>
         <ScrollView horizontal={true}>
            <View style={styles.imgContainer}>
               <Image source={require('../../../src/img/games/1.png')} style={styles.img} />
            </View>
            <View style={[styles.imgContainer, styles.active]}>
               <Image source={require('../../../src/img/games/2.png')} style={styles.img} />
            </View>
            <View style={styles.imgContainer}>
               <Image source={require('../../../src/img/games/3.png')} style={styles.img} />
            </View>
            <View style={styles.imgContainer}>
               <Image source={require('../../../src/img/games/4.png')} style={styles.img} />
            </View>
            <View style={styles.imgContainer}>
               <Image source={require('../../../src/img/games/5.png')} style={styles.img} />
            </View>
            <View style={styles.imgContainer}>
               <Image source={require('../../../src/img/games/6.png')} style={styles.img} />
            </View>
            <View style={styles.imgContainer}>
               <Image source={require('../../../src/img/games/7.png')} style={styles.img} />
            </View>
            <View style={styles.imgContainer}>
               <Image source={require('../../../src/img/games/8.png')} style={styles.img} />
            </View>
            <View style={styles.imgContainer}>
               <Image source={require('../../../src/img/games/9.png')} style={styles.img} />
            </View>
            <View style={styles.imgContainer}>
               <Image source={require('../../../src/img/games/10.png')} style={styles.img} />
            </View>
         </ScrollView>
      </View>
   )
   }
   const styles= StyleSheet.create({
      container: {
         flexDirection:'row'
      },
      img:{
         resizeMode: 'contain',
         width: 30,
         height: 30,
         margin: 15,
      },
      imgContainer:{
         margin: 15,
         justifyContent:'center',
         // backgroundColor:'#f9f0ff',
         borderRadius: 100,
         borderWidth: 1,
         borderColor: '#e7e6e8'
      },
      active:{
         backgroundColor: '#623cea'
      }
   })