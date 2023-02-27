import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createAppContainer } from 'react-navigation'
import Exercises from './Exercises'
import GroupDetails from './GroupDetails'

const HomeStack = createNativeStackNavigator()

export default function () {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Groups list" component={Exercises} />
            <HomeStack.Screen 
                name="GroupDetails" 
                component={GroupDetails} 
                options={({ route }) => ({ title: route.params.name })}
            />
        </HomeStack.Navigator>
    )
}
