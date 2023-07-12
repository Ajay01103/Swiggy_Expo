import { ScrollView } from 'react-native';
import HomeScreen from './screens/HomeScreen';


export default function App() {
  return (
    <ScrollView style={{ marginTop: 4}}>
      <HomeScreen />
    </ScrollView>
  );
}
