import { View, Text, Pressable, Image } from 'react-native'
import { FontAwesome } from "@expo/vector-icons"
import { useDispatch } from 'react-redux'
import { useState } from 'react';
import { addToCart, decrementQuantity, incrementQuantity, removeFromCart } from '../redux/CartReducer';

const MenuComponent = ({food}) => {
  const dispatch = useDispatch();
  const [addItems, setAddItems] = useState(0);
  const [selected, setSelected] = useState(false);


  return (
    <View>
      <Pressable style={{ margin: 10, flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
        <View>
          <Text style={{ fontSize: 15, fontWeight: "600"}}>{food.name}</Text>
          <Text>{food.price} ₹</Text>
          <Text style={{ marginTop: 6}}>{
            [0, 0, 0, 0, 0].map((en, i) => (
              <FontAwesome name={i < Math.floor(food.rating) ? "star" : "star-o"} size={15} color="#FFD700" />
            ))
            }
          </Text>
          <Text style={{ width: 180, marginTop: 6, color: "gray"}}>
            {food.description}
          </Text>
        </View>

        <Pressable onPress={() => {
          setSelected(true);
          if(addItems == 0) {
            setAddItems((c) => c + 1)
          }
          dispatch(addToCart(food))
        }} 
        style={{marginRight: 8}}>
          <Image source={{ uri: food.image}} style={{ width: 130, height: 130, borderRadius: 8}} />
          {selected ? (
            <Pressable
            style={{
              position: "absolute",
              top: 90,
              left: 15,

              flexDirection: "row",
              paddingHorizontal: 10,
              paddingVertical: 5,
              alignItems: "center",
              backgroundColor: "white",
              borderRadius: 5,
            }}
            >
              <Pressable
              onPress={() => {
                if (addItems === 1) {
                  dispatch(removeFromCart(food))
                  setSelected(false)
                  setAddItems(0)
                } else {
                  setAddItems((c) => c - 1);
                  dispatch(decrementQuantity(food))
                }
              }}
              >
                <Text style={{ fontSize: 25, color: "black", paddingHorizontal: 6}}>
                  -
                </Text>
              </Pressable>
              <Pressable>
              <Text style={{ fontSize: 20, color: "green", paddingHorizontal: 6 }}
                >
                  {addItems}
                </Text>
              </Pressable>
              <Pressable
              onPress={() => {
                setAddItems((c) => c + 1);
                dispatch(incrementQuantity(food))
              }}
              >
                <Text style={{ fontSize: 20, color: "black", paddingHorizontal: 6}}>
                  +
                </Text>
              </Pressable>
            </Pressable>
          ) : (
            <Pressable
            onPress={() => {
              setSelected(true);
              if (addItems == 0) {
                setAddItems((c) => c + 1);
              }
              dispatch(addToCart(food))
            }}
             style={{ position: "absolute", top: 105, left: 23, flexDirection: "row", paddingHorizontal: 28, paddingVertical: 6,
             alignItems: "center", backgroundColor: "#e9e9e9", borderRadius: 8}}>
            <Text style={{ fontSize: 14, fontWeight: "600", color: "#018749"}}>
              Add
            </Text>
          </Pressable>
          )}
        </Pressable>
      </Pressable>
    </View>
  )
}

export default MenuComponent