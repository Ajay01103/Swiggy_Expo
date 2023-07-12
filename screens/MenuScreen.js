import { View, Text } from 'react-native'
import { Ionicons } from "@expo/vector-icons"
import { AntDesign } from "@expo/vector-icons"
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

        </View>
      </View>
    </SafeAreaView>
  )
}

export default MenuScreen