import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'
import { Stack } from 'expo-router'

const Transaction = () => {
  return (
    <>
        <Stack.Screen options={{headerShown:false}}/>
        <View style={styles.container}>
          <Text style={styles.text}>Transaction</Text>
        </View>
        </>
  )
}

export default Transaction

const styles = StyleSheet.create({
  container: { 
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:Colors.black
  },
  text: {
    color: Colors.white,
    textAlign:'center'
  }
})