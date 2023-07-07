import { ScrollView, StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const FoodTypes = () => {
    const types = [
        {
            id:"0",
            image:"https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
            name:"Pizza",
        },
        {
            id:"1",
            image:"https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png",
            name:"Thali",
        },
        {
            id:"2",
            image:"https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png",
            name:"Dessert"
        },
        {
            id:"3",
            image:"https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
            name:"Burger"
        },
        {
            id:"4",
            image:"https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png",
            name:"Rolls",

        },
        {
            id:"5",
            image:"https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png",
            name:"Sandwiches"
        },
        {
            id:"6",
            image:"https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
            name:"Biryani"
        },
        {
            id:"7",
            image:"https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png",
            name:"Biryani"
        }
    ]


  return (
    <View>
       <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {types.map((item, index) => (
            <TouchableOpacity style={{margin: 10}} key={index}>
                <Image source={{ uri: item.image}} style={{ width: 60, height: 60, borderRadius: 30}} />
                <Text style={{ marginTop: 6, textAlign: "center"}}>
                    {item.name}
                </Text>
            </TouchableOpacity>
          ))}
       </ScrollView>
    </View>
  )
}

export default FoodTypes

const styles = StyleSheet.create({})