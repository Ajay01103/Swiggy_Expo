import { ScrollView } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import { TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons'
import MenuScreen from './screens/MenuScreen';

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


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerTitle: (props) => <LogoTitle {...props} /> }} />
        <Stack.Screen name='MenuScreen' component={MenuScreen} options={{ headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
