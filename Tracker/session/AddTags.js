import { Pressable, Text } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

export default function () {
    return (
        <Pressable 
            style={{flexDirection:'row', alignItems:'center'}}
            onPress={() => console.log('null')}
        >
            <Text style={{fontSize:20}}>Tags: </Text>
            <MaterialIcons name='add' size={30}/>
        </Pressable>
    )
}