import { View, Text, ScrollView, Image, Pressable } from 'react-native'
import React from 'react'
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation, useRoute } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'
import { decrementQuantity, incrementQuantity, removeFromCart } from '../redux/CartReducer'

const CartScreen = () => {
    const navigation = useNavigation();
    const router = useRoute();
    const cart = useSelector((state) => state.cart.cart);
    const total = cart
    .map((item) => item.price * item.quantity)
    .reduce((curr, prev) => curr + prev, 0);
    const dispatch = useDispatch();
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
        {
          id: "4",
          name: "Beware of Pet",
          iconName: "dog"
        }
    ];  
  return (
    <ScrollView>
      {total > 0 ? (
        <>
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
                     dispatch(decrementQuantity(item));
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

                  <Pressable onPress={() => {
                    dispatch(incrementQuantity(item))
                  }}>
                    <Text style={{ fontSize: 19, color: "black", paddingHorizontal: 6, fontWeight: "600"}}>
                      +
                    </Text>
                  </Pressable>
                  </View>

                  <Text style={{ fontSize: 15, fontWeight: "600"}}>
                  {item.price * item.quantity} ₹
                  </Text>
                </View>
              ))}
            </View>
        </View>
        
        <View style={{ padding: 10, marginLeft: 6}}>
          <Text style={{ fontSize: 16, fontWeight: "500"}}>
            Delivery Instructions
          </Text>

          <ScrollView horizontal style={{ marginTop: 10}} showsHorizontalScrollIndicator={false}>
            {instructions.map((item, i) => (
              <Pressable key={i} style={{ margin: 10, borderRadius: 10, padding: 10, backgroundColor: "white"}}>
                 <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                  <FontAwesome5 name={item.iconName} color="gray" size={24} />
                  <Text style={{ width: 80, fontSize: 13, color: "#383838", paddingTop: 10, textAlign: "center"}}>
                    {item.name}
                  </Text>
                 </View>
              </Pressable>
            ))}
          </ScrollView>
        </View>

        <View style={{ marginHorizontal: 10}}>
          <Text style={{ fontSize: 16, marginLeft: 6, fontWeight: "500"}}>
            Billing Details
          </Text>
          <View style={{ backgroundColor: "white", borderRadius: 12, padding: 14, marginTop: 15}}> 
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
              <Text style={{ fontWeight: "500"}}>Total Items</Text>
              <Text style={{ fontWeight: "500", fontSize: 16}}>{total} ₹</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
              <Text style={{ fontWeight: "500"}}>Delivery Fee</Text>
              <Text style={{ color: "#FF4500", fontSize: 16, padding: 2, fontWeight: "500"}}>Free</Text>
            </View>
            <View style={{ flexDirection: "row", padding: 2, alignItems: "center", justifyContent: "space-between" }}>
              <Text style={{ fontWeight: "500"}}>Taxes</Text>
              <Text style={{ fontWeight: "500", fontSize: 16 }}>{total * 12/100} ₹</Text>
            </View>
            <View style={{ flexDirection: "row", padding: 2, alignItems: "center", justifyContent: "space-between",}}>
              <Text style={{ fontWeight: "500"}}>Total Price</Text>
              <Text style={{ fontWeight: "500", fontSize: 16}}>{total + total * 12/100} ₹</Text>
            </View>
          </View>
        </View>

        </>
      ) : (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "white"}}>
          <Image style={{ width: 300, height: 300}} source={{ uri: "https://ik.imagekit.io/wwgqcjqcf/cart.jpg?updatedAt=1689936140576"}} />
          <Text style={{ textAlign: "center", fontSize: 26, marginTop: 20, fontWeight: "600"}}>Your cart is empty!!</Text>
          
          <Text style={{ flex: 8, flexDirection: "row", padding: 14, textAlign: "center"}}>
            Looks like you have'nt added anything to your cart
          </Text>
        </View>
      )}
        
    </ScrollView>
  )
}

export default CartScreen