import { ImageBackground, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import quickFood from '../data/quickFood';
import { MaterialIcons } from "@expo/vector-icons";

const QuickFood = () => {
  const data = quickFood;  
  return (
    <View style={{ margin: 10 }}>
      <Text style={{ fontSize: 16, fontWeight: "500" }}>Get it Quickly</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((item, index) => (
            <Pressable style={{ margin: 10}} key={index}>
              <ImageBackground imageStyle={{ borderRadius: 6}} style={{ aspectRatio: 5/6, height: 170 }} 
              source={{ uri: item.image}}
              >
                <Text style={{ position: "absolute", bottom: 10, left: 10, fontSize: 27, fontWeight: "900", color: "white"}}>
                    {item.offer} OFF
                </Text>
              </ImageBackground>
            </Pressable>
        ))}
      </ScrollView>
    </View>
  )
}

export default QuickFood

const styles = StyleSheet.create({})