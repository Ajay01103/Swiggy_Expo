import HomeScreen from './screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { View, Image } from 'react-native';
import { TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons'
import MenuScreen from './screens/MenuScreen';
import { Provider } from 'react-redux';
import store from './store';
import ItemScreen from './screens/ItemScreen';

const Stack = createNativeStackNavigator();

function LogoTitle() {
  return (
    <View style={{ flexDirection: 'row', width: "94%", alignItems: "center", justifyContent: "space-between", borderWidth: 1, margin: 4, marginTop: 10, padding: 10, borderColor: "#C0C0C0", borderRadius: 7, }}>
            <TextInput 
            style={{ fontSize: 17 }}
            placeholder='Search for restaurant' />
            <AntDesign name='search1' size={24} color="#E52B50" />
        </View>
  );
}

function ItemTitle() {
  return (
    <View style={{ flexDirection: "row", width: 300, alignItems: "center", height: 80, padding: 18}}>
      <Image style={{ width: 200, height: 42}} source={{ uri: "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" }} />
    </View>
  )
}


export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerTitle: (props) => <LogoTitle {...props} /> }} />
          <Stack.Screen name='Menu' component={MenuScreen} options={{ headerShown: false}} />
          <Stack.Screen name='Item' component={ItemScreen} options={{ headerTitle: (props) => <ItemTitle {...props} /> }} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
