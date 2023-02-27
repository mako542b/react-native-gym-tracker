import { createNativeStackNavigator } from '@react-navigation/native-stack'
import GymTracker from './GymTracker'
import TrackerHistory from './TrackerHistory'

const TrackerStack = createNativeStackNavigator()

export default function() {

    return (
        <TrackerStack.Navigator>
            <TrackerStack.Screen name='Home' component={GymTracker}/>
            <TrackerStack.Screen name='Your sessions' component={TrackerHistory}/>
        </TrackerStack.Navigator>
    )

}