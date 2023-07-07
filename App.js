import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';


export default function App() {
  return (
    <SafeAreaView style={{ paddingTop: 20}}>
      <HomeScreen />
    </SafeAreaView>
  );
}
