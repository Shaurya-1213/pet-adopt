import { View, Text, Image } from 'react-native'
import React from 'react'
import Colors from './../../constants/Colors'

export default function PetListItem({pet}) {
  return (
    <View style={{
      padding:10,
      marginRight:15,
      backgroundColor:Colors.WHITE,
      borderRadius:10
    }}>
      <Text>hi</Text>
      <Image source={{uri:pet?.imageUrl }}
      style={{
        width:150,
        height:135,
        objectFit:'cover'
      }}
        />
        <Text>hi</Text>
    </View>
  )
}