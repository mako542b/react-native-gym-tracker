import { View, Text, StyleSheet, Button, FlatList } from 'react-native'
import { exercisesList } from './exercisesList'
import GroupItem from './GroupItem'

function Exercises({ navigation }) {

    return(
        <View>
            <FlatList 
                data={exercisesList}
                renderItem={({ item }) => (
                    <View style={{marginBottom:10}}>
                        <Button 
                            title={item.name}
                            onPress={() => navigation.navigate('GroupDetails', {
                                data: item.data, name:item.name
                            })}
                        />
                    </View>
                )}
            />
        </View>
    )
}

export default Exercises