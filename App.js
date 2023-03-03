import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GymTrackerStack from './Tracker/GymTrackerStack';


export default function App() {

  return (
    <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="GymTracker" component={GymTrackerStack} />
        </Tab.Navigator>
    </NavigationContainer>
  )
  
}

const Tab = createBottomTabNavigator()

