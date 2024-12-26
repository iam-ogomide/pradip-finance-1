import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Colors from '@/constants/Colors'

const Header = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor:Colors.black, paddingTop:7}}>
        <View style={{flexDirection:'row',justifyContent:'space-between', height:70, paddingHorizontal:20, alignItems:"center"}}>

            <View style={{flexDirection:'row', alignItems:"center"}}>
             <Image source={{uri: 'https://i.pravatar.cc/250?u=12'}} style={{height:50,width:50,borderRadius:30}} />

             <View style={{marginLeft:10}}>
                <Text style={{color:Colors.white, fontSize:15}}>Hi, Mide</Text>
                <Text style={{color:Colors.white, fontSize:18}}>Your <Text style={{fontWeight:'bold'}}>Budget</Text></Text>
             </View>


            </View>
           

            <TouchableOpacity onPress={() => {}} style={{borderColor:'#666',borderWidth:1, padding:8, borderRadius:10}}>
                <Text style={{color:Colors.white, fontSize:15}}>
                    My Transactions
                </Text>
            </TouchableOpacity>


        </View>
    </SafeAreaView>
  )
}

export default Header

const styles = StyleSheet.create({})