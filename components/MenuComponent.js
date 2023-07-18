import { View, Text, Pressable, Image } from 'react-native'
import { FontAwesome } from "@expo/vector-icons"

const MenuComponent = ({food}) => {
  return (
    <View>
      <Pressable style={{ margin: 10, flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
        <View>
          <Text style={{ fontSize: 15, fontWeight: "600"}}>{food.name}</Text>
          <Text>{food.price}</Text>
          <Text style={{ marginTop: 6}}>{
            [0, 0, 0, 0, 0].map((en, i) => (
              <FontAwesome name={i < Math.floor(food.rating) ? "star" : "star-o"} size={15} color="#FFD700" />
            ))
            }
          </Text>
          <Text style={{ width: 180}}>
            {food.description}
          </Text>
        </View>

        <Pressable>
          <Image source={{ uri: food.image}} style={{ width: 130, height: 130, borderRadius: 8}} />
        </Pressable>
      </Pressable>
    </View>
  )
}

export default MenuComponent