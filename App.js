import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import GymTrackerStack from './main-stack/GymTrackerStack';

export default function App() {

  return (
    <NavigationContainer>
      <GymTrackerStack />
    </NavigationContainer>
  )
  
}


