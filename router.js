import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Exercises from './Exercises'
import Equipment from './Equipment'
import Home from './Home'
import GymTracker from './GymTracker'

const screens = {
    Home: {
        screen: Home
    },
    Exercises: {
        screen: Exercises
    },
    Equipment: {
        screen: Equipment
    },
    GymTracker: {
        screen: GymTracker
    }
}

const HomeStack = createStackNavigator(screens)
export default createAppContainer(HomeStack)