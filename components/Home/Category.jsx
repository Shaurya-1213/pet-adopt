import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import {db} from './../../config/FirebaseConfig'
import Colors from './../../constants/Colors'
import { TouchableOpacity } from 'react-native'

export default function Category({category}) {

  const [categoryList,setCategoryList]=useState([]);

  const[selectedCategory,setSelectedCategory]=useState('Dogs');

  useEffect(()=>{
    GetCategories();
  },[])

  const GetCategories=async()=>{
    setCategoryList([]);
    const snapshot=await getDocs(collection(db,'Category'));  
    snapshot.forEach((doc)=>{
      setCategoryList(categoryList=>[...categoryList,doc.data()])
    })
  }
  return (
    <View style={{
      marginTop:20
    }}>
      <Text style={{
        fontFamily:'poppins-medium',
        fontSize:20
      }}>Category</Text>

      <FlatList
      data={categoryList}
      numColumns={4}
      renderItem={({item,index})=>(
          <TouchableOpacity 
          onPress={()=>{
            setSelectedCategory(item.name);
            category(item.name);
          }}
          style={{
            flex:1
          }}>
            <View style={[styles.container,
              selectedCategory==item.name&&styles.selectedContainer
            ]}> 
              <Image source={{uri:item?.imageUrl}}
              style={{
              width:50,
              height:50,
              borderRadius:25,
              backgroundSize:'contain'
              }}/>
            </View>
            <Text style={{
              textAlign:'center',
              fontFamily:'poppins'
            }}>{item?.name}</Text>
          </TouchableOpacity>
          
      )}/>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
   backgroundColor:Colors.LIGHT_PRIMARY,
   padding:15,
   alignItems:'center',
   borderWidth:1,
   borderRadius:15,
   borderColor:Colors.PRIMARY,
   margin:5},
   selectedContainer:{
    backgroundColor:Colors.SECONDARY,
    borderColor:Colors.SECONDARY
   }

})