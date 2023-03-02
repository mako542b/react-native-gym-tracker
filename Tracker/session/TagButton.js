import { Pressable, Text } from "react-native"
import { MaterialIcons } from '@expo/vector-icons'


export default function ({ tag, isAdded, handleTags, toAddList }) {

    const nonDisplay = isAdded && toAddList

    return (
        <Pressable 
            style={{margin:4, padding: 8, borderRadius: 6, backgroundColor: isAdded ? '#fda' : null, flexDirection:'row', alignItems:'center', display: nonDisplay ? 'none' : 'flex'}}
            onPress={() => handleTags(tag)}
        >
            <Text style={{fontSize:16}}>
                {tag}
            </Text>
            <MaterialIcons 
                name={isAdded ? 'remove' : 'add'}
                size={18}
            />
        </Pressable>
    )
}