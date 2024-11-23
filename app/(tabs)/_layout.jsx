import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import Colors from './../../constants/Colors'

export default function TabLayout() {
  return (
    <Tabs
    screenOptions={{
      tabBarActiveTintColor:Colors.PRIMARY
    }}>
        <Tabs.Screen name='home'
        options={{
          title:'Home',
          headerShown:false,
          tabBarIcon:({color})=><AntDesign name="home" size={24} color={color} />
        }}/>
        <Tabs.Screen name='favorite'
         options={{
          title:'Favorite',
          headerShown:false,
          tabBarIcon:({color})=><AntDesign name="hearto" size={24} color={color} />
        }}/>
        <Tabs.Screen name='inbox'
         options={{
          title:'Inbox',
          headerShown:false,
          tabBarIcon:({color})=><Feather name="message-circle" size={24} color={color} />
        }}/>
        <Tabs.Screen name='profile'
         options={{
          title:'Profile',
          headerShown:false,
          tabBarIcon:({color})=><Ionicons name="person" size={24} color={color} />
        }}/>
    </Tabs>
  )
}