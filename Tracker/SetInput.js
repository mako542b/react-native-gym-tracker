import { View, Text, TextInput } from 'react-native'

export default function({ label, setter, getter, keyboard }) {
    return (
        <View style={{flexDirection: 'row', alignItems:'center',}}>
            <Text>{label}:</Text>
            <TextInput 
                style={{backgroundColor:'#fef', marginHorizontal:8, marginVertical:4, borderRadius:8, paddingHorizontal:4, flex:1}}
                inputMode={keyboard}
                value={getter}
                onChangeText={(value) => setter(value)}
            />
        </View>
    )
}