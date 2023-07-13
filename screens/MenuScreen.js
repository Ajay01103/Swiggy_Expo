import { View, Text } from 'react-native'
import { Ionicons } from "@expo/vector-icons"
import { AntDesign } from "@expo/vector-icons"
import { MaterialIcons } from "@expo/vector-icons"
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation, useRoute } from '@react-navigation/native'

const MenuScreen = () => {
  const router = useRoute();  
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View style={{ height: 300, backgroundColor: "#B0C4DE", borderBottomLeftRadius: 40, borderBottomRightRadius: 40}}>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", margin: 10}}>
          <Ionicons onPress={() => navigation.goBack()} name='arrow-back' size={24} color="black" />
          <View style={{ flexDirection: "row", alignItems: "center", gap: 4}}>
            <AntDesign name='search1' size={22} color="black" />
            <Text style={{ fontSize: 16, fontWeight: "600"}}>Search</Text>
          </View>
        </View>
        
        <View style={{ backgroundColor: "white", height: 210, marginHorizontal: 20, marginVertical: 5, padding: 10, borderRadius: 15}}>
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
          <Text style={{ fontSize: 17, fontWeight: "bold"}}>{router.params.name}</Text>
          <View style={{ flexDirection: "row", alignItems: "center"}}>
            <AntDesign style={{ marginHorizontal: 8}} name='sharealt' size={24} color="black" />
            <AntDesign name='hearto' size={24} color="black" />
          </View>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center", marginTop: 7}}>
                <MaterialIcons name='stars' size={24} color="green" />
                <Text style={{ marginLeft: 3, fontWeight: "400", fontSize: 17}}>{router.params.rating}</Text>
                {/* <Text style={{ marginLeft: 3}}>*</Text> */}
                <Text style={{ marginLeft: 12, fontWeight:"400"}}>{router.params.time} mins</Text>
              </View>

          <Text style={{ marginTop: 5, color: "gray", fontSize: 16}}>{router.params.cuisines}</Text> 

          <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
            <Text style={{ fontWeight: "bold", fontSize: 15}}>Outlet</Text>
            <Text style={{ marginLeft: 15, fontSize: 15}}>{router.params.adress}</Text>
          </View>   

          <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
            <Text style={{ fontWeight: "bold", fontSize: 15}}>22 mins</Text>
            <Text style={{ marginLeft: 15, fontSize: 15}}>Home Delivery</Text>
          </View>

          <Text style={{ borderColor: "#808080", borderWidth: 0.8, height: 1, marginTop: 4}} />

          <View style={{ margin: 6, flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
          <MaterialIcons name="delivery-dining" size={28} color="black" />
          <Text>0-3 Kms</Text>
          <Text>3$ Delivery Charge </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default MenuScreen