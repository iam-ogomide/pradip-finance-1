import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { SimpleLineIcons, AntDesign, FontAwesome } from '@expo/vector-icons'
import Colors from '@/constants/Colors'
import { StatusBar } from 'expo-status-bar'

const Layout = () => {
  return (
    <>
    <Tabs screenOptions={{
        tabBarStyle:{
            backgroundColor:Colors.grey,
            position:'absolute',
            bottom:40,
            justifyContent: 'center',
            alignSelf: 'center',
            height:63,
            marginHorizontal:120,
            paddingHorizontal:10,
            paddingVertical:8,
            paddingBottom:18,
            borderRadius:40,
            borderWidth:1,
            borderTopWidth:1,
            borderColor:'#333',
            borderTopColor:'#333',
        },
        tabBarShowLabel:false,
        tabBarInactiveTintColor:'#999',
        tabBarActiveTintColor: Colors.white
    }}>
        <Tabs.Screen name='index' options={{
            tabBarIcon: ({color,size,focused}) => (
                <View style={{
                    padding:12,
                    borderRadius:30,
                    backgroundColor:focused ? Colors.tintColor : Colors.grey
                }}>
                    <SimpleLineIcons name='pie-chart' size={18} color={color}/>
                </View>
            )
        }}/>
        <Tabs.Screen name='profile' options={{
            tabBarIcon: ({color,size,focused}) => (
                <View style={{
                    padding:12,
                    borderRadius:30,
                    backgroundColor:focused ? Colors.tintColor : Colors.grey
                }}>
                    <FontAwesome name='user-o' size={18} color={color}/>
                </View> 
            )
        }}/>
        <Tabs.Screen name='transaction' options={{
            tabBarIcon: ({color,size,focused}) => (
                <View style={{
                    padding:12,
                    borderRadius:30,
                    backgroundColor:focused ? Colors.tintColor : Colors.grey
                }}>
                    <AntDesign name='swap' size={18} color={color}/>
                </View>
            )
        }}/>
    </Tabs>


    <StatusBar style='light'/>
    </>
  )
}

export default Layout

const styles = StyleSheet.create({})