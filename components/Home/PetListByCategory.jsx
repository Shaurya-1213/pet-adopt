import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Category from './Category'
import { collection, getDocs, query, where } from 'firebase/firestore'
import {db} from './../../config/FirebaseConfig'
import PetListItem from './PetListItem'

export default function PetListByCategory() {

  const [petList,setPetList]=useState([]);

  useEffect(()=>{
   GetPetList('Dogs');
  },[])

  /**
   * used to get Pet List on Category Selected
   * @param {*} category 
   */
  const GetPetList=async(category)=>{
    setPetList([]);
   const q=query(collection(db,'Pets'),where('category','==',category));
   const querySnapshot=await getDocs(q);

   querySnapshot.forEach(doc=>{
    setPetList(petList=>[...petList,doc.data()]);
   })
  }

  return (
    <View>
      <Category category={(value)=>GetPetList(value)}/>
        <FlatList
        data={petList}
        horizontal={true}
        renderItem={({item,index})=>{
          <PetListItem pet={item}/>
        }}
        />
    </View>  
  )
}