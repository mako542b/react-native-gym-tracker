import { createNativeStackNavigator } from '@react-navigation/native-stack'
import GymTracker from '../Tracker/GymTracker'
import Home from '../Home'
import ExercisesLogs from '../exersises-logs/ExercisesLogs'

const TrackerStack = createNativeStackNavigator()

export default function() {

    return (
        <TrackerStack.Navigator>
            <TrackerStack.Screen name='Home' component={Home}/>
            <TrackerStack.Screen name='Gym tracker' component={GymTracker}/>
            <TrackerStack.Screen name='Exercises logs' component={ExercisesLogs}/>
        </TrackerStack.Navigator>
    )

}