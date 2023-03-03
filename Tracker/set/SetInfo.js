import { View, Text } from 'react-native'


export default function ({ label, info }) {
    return (
        <View style={{flexDirection: 'row', alignItems:'center', justifyContent: 'space-between', padding:6, margin:3, borderRadius:6, borderColor:'#333',borderWidth:1}}>
            <Text style={{fontSize:18}}>{label}: </Text>
            <Text style={{flex:-1, textAlign: 'right', fontSize:18}}>{info}</Text>
        </View>
    )
}