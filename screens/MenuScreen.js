import { View, Text, ScrollView, Pressable, Image } from 'react-native'
import { Ionicons } from "@expo/vector-icons"
import { AntDesign } from "@expo/vector-icons"
import { MaterialIcons } from "@expo/vector-icons"
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation, useRoute } from '@react-navigation/native'
import FoodItem from '../components/FoodItem'
import { useState, useEffect } from 'react'
import Modal from "react-native-modal"
import { useSelector } from 'react-redux'
import { Feather } from '@expo/vector-icons';


const MenuScreen = () => {
  const cart = useSelector((state) => state.cart.cart);
  const total = cart.map((item) => item.price * item.quantity).reduce((curr, prev) => curr + prev, 0);
  const router = useRoute(); 
  const navigation = useNavigation();
  const [menu, setMenu] = useState([]);
  const [modalVisible, setModalVisible] = useState(false)


  useEffect(() => {
    const fetchMenu = () => {
      setMenu(router.params.menu);
    }

    fetchMenu();
  }, [])

  const toggleModal = () => {
    setModalVisible(!modalVisible)
  }
  

  return (
    <>
      <ScrollView>
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
              <Text>30₹ Delivery Charge</Text>
              </View>
            </View>
          </View>

          <Text style={{ textAlign: "center", fontSize: 18, fontWeight: '500', marginTop: 4}}>Menu</Text>

          {router.params.menu.map((item, index) => (
            <FoodItem item={item} key={index} />
          ))}
        </SafeAreaView>
      </ScrollView>

      {/* <Pressable onPress={toggleModal} style={{ width:60, height: 60, borderRadius: 40, justifyContent: "center", backgroundColor: "#fefefe", marginLeft: "auto", position: "absolute", bottom: 35, right: 25, alignContent: "center"}}>
        <MaterialIcons style={{ textAlign: "center"}} name='menu-book' size={24} color="black" />
        <Text style={{ textAlign: "center"}}>Menu</Text>
      </Pressable>   */}

      <Modal isVisible={modalVisible} onBackdropPress={toggleModal}>
         <View style={{height: 190, width: 250, backgroundColor: "#fefefe", position: "absolute", bottom: 35, right: 10, borderRadius: 8}}>
            {menu.map((item, i) => (
              <View style={{ padding: 10, flexDirection: "row", alignItems: "center", justifyContent: "space-between"}} key={i}>
                <Text style={{ fontSize: 16, fontWeight: "600"}}>{item.name}</Text>
                <Text>{item.items.length}</Text>
              </View>
            ))}
            <View style={{ justifyContent: "center", alignItems: "center"}}>
              <Image 
              source={{ uri: "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"}}
              style={{ width: 120, height: 70, resizeMode: "contain"}}
              />
            </View>
         </View>
      </Modal>

      {total === 0 ? null : (
        <Pressable onPress={() => navigation.navigate("Cart", {
          name: router.params.name,
        })}
        style={{ backgroundColor: "#00AB77", alignItems: "center", borderRadius: 10, flexDirection: "row", justifyContent: "space-between", width: "90%", padding: 14, marginLeft: "auto", marginRight: "auto", marginBottom: 30, position: "absolute", left: 20, bottom: 10}}>
          <View>
            <Text style={{ fontSize: 16, fontWeight: "700", color: "white"}}>{cart.length} items | {total} ₹</Text>
            <Text style={{ fontSize: 14, color: "white"}}>Extra Charges may be Apply!</Text>
          </View>

          <View>
          <Feather name="shopping-bag" size={24} color="white" />
          </View>
        </Pressable>
      )}
    </>
  )
}

export default MenuScreen