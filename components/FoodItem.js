import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { AntDesign } from "@expo/vector-icons"

const FoodItem = ({item}) => {
  const data = [item]  
  return (
    <View>
      {data.map((item, i) => (
        <>
         <Pressable key={i} style={{ margin: 10, flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
            <Text>{item.name}</Text>
            <AntDesign name='down' size={24} color="black" />
         </Pressable>
        </>
      ))}
    </View>
  )
}

export default FoodItem