import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import Carouse from '../components/Carouse'

const HomeScreen = () => {
  return (
    <SafeAreaView style={{marginTop: 30}}>
        {/* SearchBar */}
        <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-between", borderWidth: 1, margin: 10, padding: 10, borderColor: "#C0C0C0", borderRadius: 7, }}>
            <TextInput 
            style={{ fontSize: 17, }}
            placeholder='Search for restaurant' />
            <AntDesign name='search1' size={24} color="#E52B50" />
        </View>

        <Carouse />
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})