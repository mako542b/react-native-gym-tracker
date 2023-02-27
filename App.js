import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ExercisesStack from './Exercises/ExercisesStack'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GymTrackerStack from './Tracker/GymTrackerStack';

import Equipment from './Equipment'

export default function App() {

  return (
    <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            {/* <Tab.Screen name="Home" component={Home} /> */}
            <Tab.Screen name="Exercises" component={ExercisesStack} />
            <Tab.Screen name="Equipment" component={Equipment} />
            <Tab.Screen name="GymTracker" component={GymTrackerStack} />
        </Tab.Navigator>
    </NavigationContainer>
  )
  
}

const Tab = createBottomTabNavigator()

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
