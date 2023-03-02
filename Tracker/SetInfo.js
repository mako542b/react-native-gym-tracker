import { View, Text } from 'react-native'


export default function ({ label, info }) {
    return (
        <View style={{flexDirection: 'row', alignItems:'center', justifyContent: 'space-between', padding:8, margin:3, backgroundColor:'#eef', borderRadius:6}}>
            <Text>{label}: </Text>
            <Text style={{flex:-1, textAlign: 'right'}}>{info}</Text>
        </View>
    )
}