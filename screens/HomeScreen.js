import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import Carouse from '../components/Carouse'
import FoodTypes from '../components/FoodTypes'
import QuickFood from '../components/QuickFood'
import { Pressable } from 'react-native'
import { Ionicons } from "@expo/vector-icons"
import hotels from "../data/hotels"
import MenuItems from '../components/MenuItems'

const HomeScreen = () => {
  const data = hotels;
  return (
    <View style={{ marginTop: 20}}>
        {/* SearchBar */}
        <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-between", borderWidth: 1, margin: 10, padding: 10, borderColor: "#C0C0C0", borderRadius: 7, }}>
            <TextInput 
            style={{ fontSize: 17 }}
            placeholder='Search for restaurant' />
            <AntDesign name='search1' size={24} color="#E52B50" />
        </View>

      {/* Carousel Items */}
         <Carouse />

      {/* Food Items Types */}
        <FoodTypes />

      {/* Quick Food Section */}
        <QuickFood />

      {/* Filter Buttons */}
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-around"}}>
        <Pressable 
        style={{ marginHorizontal: 10, flexDirection: "row", alignItems: "center", borderWidth: 1, 
        borderColor: "#D0D0D0" ,padding: 10, borderRadius: 20, justifyContent: "center" ,width: 120}}>
          <Text style={{ marginRight: 10 }}>Filter</Text>
          <Ionicons name='filter' size={20} color="gray" />
        </Pressable>

        <Pressable 
        style={{ marginHorizontal: 10, flexDirection: "row", alignItems: "center", borderWidth: 1, 
        borderColor: "#D0D0D0" ,padding: 10, borderRadius: 20, justifyContent: "center", width: 120}}>
          <Text>Sort by Rating</Text>
        </Pressable>

        <Pressable 
        style={{ marginHorizontal: 10, flexDirection: "row", alignItems: "center", borderWidth: 1, 
        borderColor: "#D0D0D0" ,padding: 10, borderRadius: 20, justifyContent: "center"}}>
          <Text>Sort by Price</Text>
        </Pressable>
      </View>


      <ScrollView>
        {data.map((item, index) => (
          <MenuItems key={index} item={item} />
        ))}
      </ScrollView>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})