import { View, Text, StyleSheet, Button, FlatList } from 'react-native'
import { exercisesList } from './exercisesList'
import GroupItem from './GroupItem'

function Exercises() {

    return(
        <View>
            <FlatList 
                data={exercisesList}
                renderItem={({item}) => <GroupItem group={item}/>}
            />
        </View>
    )
}

export default Exercises