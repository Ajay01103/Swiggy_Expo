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
            name:"Sandwich"
        },
        {
            id:"7",
            image:"https://b.zmtcdn.com/data/dish_images/91c554bcbbab049353a8808fc970e3b31615960315.png",
            name:"Noodles"
        }
    ]

    const Brands = [
        {
            id:"8",
            image:"https://b.zmtcdn.com/data/brand_creatives/logos/874c2b2b4554f4aed7dd3bb4e755c420_1604382909.png?output-format=webp",
            name:"McDonal",
        },
        {
            id:"9",
            image:"https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589432379.png?output-format=webp",
            name:"KFC",
        },
        {
            id:"10",
            image:"https://b.zmtcdn.com/data/brand_creatives/logos/e6f2085a4ed0cd750cac265574748f3f_1601467978.png?output-format=webp",
            name:"Roll express"
        },
        {
            id:"11",
            image:"https://b.zmtcdn.com/data/brand_creatives/logos/5caf38856d23347b351bb7abf97134d3_1521806929.png?output-format=webp",
            name:"Domino"
        },
        {
            id:"12",
            image:"https://b.zmtcdn.com/data/brand_creatives/logos/ad6c42058fd9d162b33070bc6779fd0f_1638339755.png?output-format=webp",
            name:"Pizza Hut",

        },
        {
            id:"13",
            image:"https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187857.png?output-format=webp",
            name:"King"
        },
        {
            id:"14",
            image:"https://b.zmtcdn.com/data/brand_creatives/logos/22529ff52d41a4aa3b36ac1e7e0c0db3_1605099406.png?output-format=webp",
            name:"Haldiram"
        },
        {
            id:"15",
            image:"https://b.zmtcdn.com/data/brand_creatives/logos/1356425eff0c9acd8ab6b0ad351759e4_1611253489.png?output-format=webp",
            name:"Bikaner"
        }
    ]

  return (
    <View style={{ padding: 10}}>
        <Text style={{ fontSize: 16, fontWeight: "500"}}>What's on your mind</Text>
       <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {types.map((item, index) => (
            <TouchableOpacity style={{margin: 10}} key={index}>
                <Image source={{ uri: item.image}} style={{ width: 70, height: 70, borderRadius: 30}} />
                <Text style={{ marginTop: 6, textAlign: "center"}}>
                    {item.name}
                </Text>
            </TouchableOpacity>
          ))}
       </ScrollView>
       <View style={{ padding: 10}}>
        <Text style={{ fontSize: 16, fontWeight: '500'}}>Top Brands</Text>
       <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {Brands.map((item, index) => (
            <TouchableOpacity style={{margin: 10}} key={index}>
                <Image source={{ uri: item.image}} style={{ width: 70, height: 70, borderRadius: 30}} />
                <Text style={{ marginTop: 6, textAlign: "center"}}>
                    {item.name}
                </Text>
            </TouchableOpacity>
          ))}
       </ScrollView>
       </View>
    </View>
  )
}

export default FoodTypes

const styles = StyleSheet.create({})