import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GymTrackerStack from './main-stack/GymTrackerStack';
import GymTracker from './Tracker/GymTracker';
import ExercisesLogs from './exersises-logs/ExercisesLogs';

export default function App() {

  return (
    <NavigationContainer>
      <GymTrackerStack />
    </NavigationContainer>
  )
  
}

const Tab = createBottomTabNavigator()

