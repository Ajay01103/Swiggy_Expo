import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'
import { Pressable } from 'react-native'

const CartScreen = () => {
    const navigation = useNavigation();
    const router = useRoute();
    const cart = useSelector((state) => state.cart.cart)
    const instructions = [
        {
          id: "0",
          name: "Avoid Ringing",
          iconName: "bell",
        },
        {
          id: "1",
          name: "Leave at the door",
          iconName: "door-open",
        },
        {
          id: "2",
          name: "directions to reach",
          iconName: "directions",
        },
        {
          id: "3",
          name: "Avoid Calling",
          iconName: "phone-alt",
        },
    ];  
  return (
    <ScrollView>
        <View>
          <Text style={{ fontSize: 17, fontWeight: "700", marginLeft: 10, padding: 8}}>{router.params.name}</Text>
          <View style={{ padding: 15, backgroundColor: "white", borderRadius: 10, marginHorizontal: 10, borderColor: "gray", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
            <Text style={{ fontWeight: "500", fontSize: 14}}>Ordering for Someone else ?</Text>
            <Text style={{ fontWeight: "500", fontSize: 14, color: "#FF4500"}}>Add Details +</Text>
          </View>
        </View>

        <View style={{ backgroundColor: "white", marginTop: 16, marginHorizontal: 15,  borderRadius: 10, padding: 14}}>
            <View>
              {cart.map((item, i) => (
                <View key={i} style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                  <Text style={{ width: 120, fontSize: 16, fontWeight: "600"}}>
                    {item.name}  
                  </Text>

                  <View style={{ flexDirection: "row", padding: 4}}>
                  <Pressable>
                    <Text style={{ fontSize: 20, color: "black", paddingHorizontal: 6, fontWeight: "700"}}
                    onPress={() => {
                      disp
                    }}
                    >
                      -
                    </Text>
                  </Pressable>

                  <Pressable>
                    <Text style={{ fontSize: 19, color: "black", paddingHorizontal: 7, fontWeight: "600"}}>
                      {item.quantity}
                    </Text>
                  </Pressable>

                  <Pressable>
                    <Text style={{ fontSize: 19, color: "black", paddingHorizontal: 6, fontWeight: "600"}}>
                      +
                    </Text>
                  </Pressable>
                  </View>

                  <Text>
                  {item.price} ₹
                  </Text>

                </View>
              ))}
                
            </View>

            <View>

            </View>
        </View>
    </ScrollView>
  )
}

export default CartScreen