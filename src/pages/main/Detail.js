import React from 'react'
import { Text,View,StyleSheet,ScrollView,TouchableOpacity,Image } from 'react-native'


export default function Detail(){
 return(
  <View style={styles.container}>
      <View style={{ width: 60, height: 30, borderRadius: 5, borderWidth: 5, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fdeaed',borderColor: '#fdeaed' }}>
            <Text style={{ color: 'red', backgroundColor: '#fdeaed', fontWeight: '500' }}>• Live</Text>
      </View>
      <View style={styles.match}>
            <View style={{ alignItems: 'center' }}>
               <View style={styles.logo}>
                  <Image style={styles.img} source={require('../../../src/img/teams/1.png')} />
               </View>
               <Text style={styles.teamName}>Bercelona</Text>
            </View>
            <View>
               <View style={styles.score}>
                  <Text style={[styles.scoreText, { color: '#623cea' } ]}>2</Text>
                  <Text style={[styles.scoreText, { color : '#8f8d8d' }]}> : </Text>
                  <Text style={styles.scoreText}>0</Text>
               </View>
               <View style={{ alignItems: 'center' }}>
                  <Text style={{ color: 'orange', fontWeight: 'bold' }}>72'</Text>
                  <Text style={{ color: '#8f8d8d' }}>Ref: <Text style={{ color: 'black' }}>Joseph Hicks</Text></Text>
               </View>
            </View>
            <View style={{ alignItems: 'center' }}>
               <View style={styles.logo}>
                  <Image style={styles.img} source={require('../../../src/img/teams/2.png')} />
               </View>
               <Text style={styles.teamName}>Chelsea</Text>
            </View>
      </View>
      {/* Odds */}
      <View style={styles.oddsContainer}>
         <View style={styles.odds}>
            <Text style={{ color: '#8f8d8d' }}>1x</Text>
            <Text style={styles.oddsValue}>2.13</Text>
         </View>
         <View style={styles.odds}>
            <Text style={{ color: '#8f8d8d' }}>X</Text>
            <Text style={styles.oddsValue}>1.98</Text>
         </View>
         <View style={styles.odds}>
            <Text style={{ color: '#8f8d8d' }}>2x</Text>
            <Text style={styles.oddsValue}>3.24</Text>
         </View>
      </View>
      {/* Buttons */}
      <View style={{ flexDirection: 'row', alignSelf: 'center'}}>
         <TouchableOpacity style={[styles.playButton, styles.shadow ]}>
            <Image source={ require('../../../src/img/play.png')} style={{ resizeMode: 'contain', width: 30, height: 30 }} />
         </TouchableOpacity>
         <TouchableOpacity style={[ styles.betButton, styles.shadow] }>
            <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Place a Bet</Text>
         </TouchableOpacity>
      </View>
      {/* Game Summary */}
      <View style={styles.gameSummary}> 
         {/* Team 1 */}
         <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={require('../../../src/img/teams/1.png')} style={[styles.img, { width: 30, marginRight: 5 } ]} />
            <Text>Barcelona</Text>
         </View>
         {/* Summary */}
         <View style={{ width: '90%', flexDirection: 'row', alignSelf: 'center', alignItems: 'center'}}>
            <Text style={{ marginRight: 10, color: '#8f8d8d' }}>0</Text>
               <SummaryLegendIcon minutes={10}  team="a" source={require('../../../src/img/cards/red.png')} />
               <SummaryLegendIcon minutes={20}  team="a" source={require('../../../src/img/ballicon.png')} />
               <SummaryLegendIcon minutes={35}  team="b" source={require('../../../src/img/cards/yellow.png')} />
               <SummaryLegendIcon minutes={50}  team="a" source={require('../../../src/img/cards/red.png')} />
               <SummaryLegendIcon minutes={60}  team="b" source={require('../../../src/img/ballicon.png')} />
               <SummaryLegendIcon minutes={76} />
               <View style={styles.percentageLayer}></View>
               <View style={styles.summary}></View>
            <Text style={{ marginLeft: 10, color: '#8f8d8d' }}>90</Text>
         </View>
         {/* Team 2 */}
         <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={require('../../../src/img/teams/2.png')} style={[styles.img, { width: 30, marginRight: 5 } ]} />
            <Text>Chealsea</Text>
         </View>
      </View>

      {/* Live Line */}
      <View style={{ width: '100%' }}>
         <View style={{ flexDirection: 'row', borderBottomWidth: 2, borderTopWidth: 2, justifyContent: 'center', borderColor: '#bfbfbf',backgroundColor: '#e7e6e8',marginBottom: 5  }}>
            <View style={{ padding: 5 }}>
               <Text style={{ color : '#99979c', fontWeight: 'bold' }}>Live Line</Text>
            </View>
         </View>
         <ScrollView style={{ height: '35%' }}>
               <LiveLine team="b" name="Alvin John Nolasco" minutes={59} watch teamIcon={require('../../../src/img/teams/2.png')} action={require('../../../src/img/ballicon.png')} />
               <LiveLine team="a" name="Japoy Daks Juts" minutes={47} teamIcon={require('../../../src/img/teams/1.png')} action={require('../../../src/img/cards/red.png')} />
               <LiveLine team="b" name="Jepoy Pogi Abusama" minutes={45} teamIcon={require('../../../src/img/teams/2.png')} action={require('../../../src/img/cards/yellow.png')} />
               <LiveLine watch team="a" name="Franklin Kiko Pogs" minutes={34} teamIcon={require('../../../src/img/teams/1.png')} action={require('../../../src/img/ballicon.png')} />
               <LiveLine team="a" name="Chris John Pineda" minutes={28} teamIcon={require('../../../src/img/teams/1.png')} action={require('../../../src/img/cards/red.png')} />
         </ScrollView>
      </View>
  </View>
 )
}

const SummaryLegendIcon = ({ minutes,source,team }) => {
   return(
      <View style={{ marginLeft: minutes+'%', zIndex: 3 , position: 'absolute',flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
         <View style={[styles.legendIcon, styles.shadow, !team && !source ? { backgroundColor: '#623cea' } : null  ]}>
            {source && team 
            ?
               <Image style={[ styles.img, { width: 20, height: 20 } ]} source={source} />
            : 
              <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold' }}>{minutes}</Text>}
         </View>
         {source && team 
         ?
         <View style={{ height: 50, flexDirection: team==='b' ? 'column-reverse' : null  }}><Text style={{ fontWeight: 'bold', color: '#99979c' }}>|</Text></View>
         :
         null}
      </View>
   )
}

const LiveLine = ({ minutes, name, action, team, teamIcon, watch }) =>{
   return(
      <View style={[ styles.liveline]}>
         <View style={ team==='a' ? {flexDirection: 'row' } : { flexDirection : 'row-reverse' } }>
            <View style={{ justifyContent: 'center', marginLeft: 10 }}>
               <Text style={ [{color: '#99979c'}, team==='a' ? {marginRight: 5} : {marginLeft: 5}] }>{minutes}'</Text>
            </View>
               
               {team==='a' 
                  ?
                  <View style={{ width: '40%', flexDirection: 'row', justifyContent: 'flex-start', flex: 1 }}>
                     <View style={[ styles.shadow, styles.legendIcon, { position: 'relative' } ]}>
                        <Image style={[ styles.img, { width: 15, height: 15 } ]} source={teamIcon} />
                     </View>
                     <View style={[styles.shadow, styles.legendIcon, { position: 'relative', marginLeft: -5 } ]}>
                        <Image style={[styles.img, { width: 15, height: 15 } ]} source={action} />
                     </View>
                     <View style={{justifyContent: 'center', flexDirection: 'row', alignItems:'center', marginLeft: 5 }}>
                        <Text>{name}</Text>
                     </View>
                  </View>
                  :
                  <View style={{ width: '40%', flexDirection: 'row', justifyContent: 'flex-end', flex: 1, marginRight: -10 }}>
                     <View style={{justifyContent: 'center', flexDirection: 'row', alignItems:'center', marginRight: 5 }}>
                        <Text>{name}</Text>
                     </View>
                     <View style={[styles.shadow, styles.legendIcon, { position: 'relative'} ]}>
                        <Image style={[styles.img, { width: 15, height: 15 } ]} source={action} />
                     </View>
                     <View style={[ styles.shadow, styles.legendIcon, { position: 'relative', marginLeft: -5 }]}>
                        <Image style={[ styles.img, { width: 15, height: 15 } ]} source={teamIcon} />
                     </View>
                  </View>
               }
           
            {watch ?
            <View>
               <View style={{ flexDirection:'row', borderWidth: 1, borderRadius: 5, padding: 5, borderColor: '#bfbfbf', backgroundColor: '#e7e6e8', alignItems: 'center' }}>
                  <Image source={ require('../../../src/img/play.png')} style={[ styles.img, { width: 30, height: 20, tintColor: '#99979c' } ]} />
                  <Text style={{ color: '#99979c'}}  >Watch</Text>
               </View>
            </View>
            : null}
         </View>
         <View style={{ borderBottomWidth: 0.5, borderBottomColor: '#99979c', marginTop: 15 }}></View>
      </View>
   )
}

const styles = StyleSheet.create({
   liveline:{
      width: '100%',
      padding: 8,
   },
   container:{
      padding: 10,
      justifyContent: 'center',
      alignItems:'center',
   },
   shadow:{
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.2,
      shadowRadius: 0.5,
      elevation: 1
   },
   match:{
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around'
   },
   score:{
      flexDirection: 'row',
      padding: 10,
      justifyContent: 'center'

   },
   scoreText:{
      fontSize: 35,
      fontWeight: 'bold'
   },
   logo:{
      width: 80,
      height: 80,
      borderWidth: 8,
      borderColor: '#e7e6e8',
      borderRadius: 80/2,
      alignItems: 'center',
      justifyContent: 'center'
   },
   teamName:{
      marginTop: 10,
      fontSize: 15,
      fontWeight: 'bold'
   },
   oddsContainer:{
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'center',
      marginTop: '5%',
      marginBottom: '5%',
   },
   odds:{
      flexDirection: 'row',
      width: '28%',
      height: 40,
      marginRight: 15,
      alignItems: 'center',
      justifyContent: 'space-around',
      borderWidth:1,
      borderColor: '#bfbfbf',
      borderRadius: 10,
      backgroundColor: '#e7e6e8'
   },
   oddsValue:{
      fontWeight: 'bold',
      color: '#424040'
   },
   playButton:{
      backgroundColor: '#e1233d',
      width: '15%',
      height:50,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: '3%'
   },
   betButton:{
      backgroundColor: '#623cea',
      width: '75%',
      height:50,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center'
   },
   legendIcon:{
      width: 30,
      height: 30,
      position: 'absolute',
      zIndex: 2,
      borderWidth: 2,
      borderRadius: 50,
      borderColor: '#e7e6e8',
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
   },
   gameSummary:{
      width: '100%',
      alignItems: 'flex-start',
      padding: 15,
      marginTop: '3%',
      marginBottom: '3%'
   },
   summary:{
      marginTop: 10,
      marginBottom: 10,
      height: 10,
      width: '90%',
      backgroundColor: '#e7e6e8',
      borderColor: '#e7e6e8',
      borderWidth: 1,
      borderRadius: 5,
      alignSelf: 'center',
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0
   },
   percentageLayer:{
      position: 'absolute',
      zIndex: 1,
      marginTop: 10,
      marginBottom: 10,
      marginLeft: '5%',
      height: 10,
      width: '76%',
      backgroundColor: '#623cea',
      borderColor: '#623cea',
      borderWidth: 1,
      borderRadius: 5,
      alignSelf: 'center'
   },
   img:{
      resizeMode: 'contain',
      width: 40,
      height: 40,
   }
})