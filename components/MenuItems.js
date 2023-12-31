import { View, Text, Image, Pressable, ScrollView, ImageBackground } from 'react-native'
import { AntDesign } from "@expo/vector-icons"
import { MaterialIcons } from "@expo/vector-icons"
import { useNavigation } from '@react-navigation/native'

const MenuItems = ({ item }) => {
  const navigation = useNavigation()
  return (
    <View style={{ margin: 10}}>
      <Pressable onPress={() => navigation.navigate("Menu", {
        id: item.id,
        name: item.name,
        time: item.time,
        image: item.image,
        rating: item.rating,
        adress: item.adress,
        cost_of_two: item.cost_for_two,
        cuisines: item.cuisines,
        menu: item.menu
      })} 
      style={{ flexDirection: "row", }}>
        <View>
            <ImageBackground
            imageStyle={{ borderRadius: 6 }}
            source={{ uri: item.image}}
            style={{ aspectRatio: 5/6, width: 150}}
            >
              <AntDesign
              style={{ position: "absolute", top: 10, right: 10}} 
              name='hearto' size={24} color="white" />
            </ImageBackground>
        </View>


        <View style={{ marginLeft: 16}}>
          <Text style={{ fontSize: 16, fontWeight: "800"}}>
            {item.name}
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center", marginTop: 3 }}>
          <MaterialIcons name="stars" size={24} color="green" />
          <Text style={{ marginLeft: 3, fontSize: 15, fontWeight: "400" }}>{item.rating}</Text>
          <Text style={{ marginLeft: 16, fontSize: 15, fontWeight: "400" }}>{item.time} mins</Text>
          </View>
          <Text style={{ marginTop: 8}}>{item.adress}</Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 5,
            }}
          >
            <View
              style={{
                backgroundColor: "#FFB6C1",
                width: 22,

                height: 22,
                borderRadius: 11,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 13,
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                ₹
              </Text>
            </View>

            <Text
              style={{
                marginTop: 5,
                marginLeft: 4,
                fontSize: 16,
                fontWeight: "500",
              }}
            >
              {item.cost_for_two} for two
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <MaterialIcons name="delivery-dining" size={28} color="black" />
            <Text style={{ marginLeft: 6, fontSize: 16 }}>FREE DELIVERY</Text>
          </View>
        </View>
      </Pressable>
    </View>
  )
}

export default MenuItems