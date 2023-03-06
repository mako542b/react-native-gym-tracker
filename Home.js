import { View, Pressable, Text } from 'react-native'

export default function ({ navigation }) {
    return (
        <View>
            <Pressable 
                style={{padding:15, backgroundColor:'#ddd', margin:5}}
                onPress={() => navigation.navigate('Gym tracker')}
            >
                <Text style={{fontSize:20, textAlign:'center'}}>Manage sessions</Text>
            </Pressable>
            <Pressable 
                style={{padding:15, backgroundColor:'#ddd', margin:5}}
                onPress={() => navigation.navigate('Exercises logs')}
            >
                <Text style={{fontSize:20, textAlign:'center'}}>Your exercises</Text>
            </Pressable>
        </View>
    )
}