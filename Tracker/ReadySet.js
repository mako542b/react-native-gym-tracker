import { View, Button, Flatlist, Text, TextInput, Pressable } from 'react-native'


export default function ({ set }) {
 
 
    return (
        <View style={{flexDirection:'row', alignItems:'center', borderTopColor: '#222', borderTopWidth:1, padding:5}}>
            <Text style={{marginEnd:10, fontWeight:'bold'}}>Set {set.setNumber}:</Text>
            <View style={{flex:1, marginRight:10}}>
                {set.reps ? (
                    <View style={{flexDirection: 'row', alignItems:'center', justifyContent: 'space-between', padding:5, margin:3, backgroundColor:'#fef'}}>
                        <Text>Reps: </Text>
                        <Text style={{}}>{set.reps}</Text>
                    </View>
                ) : null}
                
                {set.duration ? (
                    <View style={{flexDirection: 'row', alignItems:'center', justifyContent: 'space-between', padding:5, margin:3, backgroundColor:'#fef'}}>
                        <Text>Duration (min): </Text>
                        <Text style={{}}>{set.duration}</Text>
                    </View>
                ) : null}

                {set.weight ? (
                    <View style={{flexDirection: 'row', alignItems:'center', justifyContent: 'space-between', padding:5, margin:3, backgroundColor:'#fef'}}>
                        <Text>Weight (kg): </Text>
                        <Text style={{}}>{set.weight}</Text>
                    </View>
                ) : null}
                {set.others ? (
                    <View style={{flexDirection: 'row', alignItems:'center', justifyContent: 'space-between', padding:5, margin:3, backgroundColor:'#fef'}}>
                        <Text>Other: </Text>
                        <Text style={{flex:-1, textAlign: 'right'}}>{set.others}</Text>
                    </View>
                ) : null}

            </View>
            <View style={{marginLeft:'auto', justifyContent:'space-around'}}>
                <View >
                    <Button title='Edit' />
                </View>
            </View>
        </View>
    )
}