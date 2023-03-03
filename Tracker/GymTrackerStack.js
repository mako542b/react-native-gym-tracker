import { createNativeStackNavigator } from '@react-navigation/native-stack'
import GymTracker from './GymTracker'

const TrackerStack = createNativeStackNavigator()

export default function() {

    return (
        <TrackerStack.Navigator>
            <TrackerStack.Screen name='Home' component={GymTracker}/>
            {/* <TrackerStack.Screen name='Your sessions' component={TrackerHistory}/>
            <TrackerStack.Screen name='Add session' component={ManageSession}/> */}
        </TrackerStack.Navigator>
    )

}