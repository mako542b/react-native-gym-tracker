import { View, Button, Flatlist, Text, TextInput, Pressable } from 'react-native'
import { useState } from 'react'

export default function ({ setAddSet, exerciseKey, sessionKey, sessionsDispatch }) {

    const [weight, setWeight] = useState(null)
    const [duration, setDuration] = useState(null)
    const [reps, setReps] = useState(null)
    const [others, setOthers] = useState(null)

    function createSet() {
        const setInfo = {weight, duration, reps, others}
        sessionsDispatch({type:'addSet', payload: {sessionKey, exerciseKey, setInfo}})
        setAddSet(false)
    }

    return (
        <View style={{flexDirection:'row', alignItems:'center', borderTopColor: '#222', borderTopWidth:1, padding:5}}>
                    <Text style={{marginEnd:10, fontWeight:'bold'}}>Set 3:</Text>
                    <View style={{flex:1}}>
                        <View style={{flexDirection: 'row', alignItems:'center',}}>
                            <Text>Reps:</Text>
                            <TextInput 
                                style={{backgroundColor:'#fef', marginHorizontal:8, marginVertical:4, borderRadius:8, paddingHorizontal:4, flex:1}}
                                inputMode="numeric"
                                value={reps}
                                onChangeText={(value) => setReps(value)}
                            />
                        </View>
                        <View style={{flexDirection: 'row', alignItems:'center',}}>
                            <Text>Duration (min):</Text>
                            <TextInput 
                                style={{backgroundColor:'#fef', marginHorizontal:8, marginVertical:4, borderRadius:8, paddingHorizontal:4, flex:1}}
                                inputMode="numeric"
                                value={duration}
                                onChangeText={(value) => setDuration(value)}
                            />
                        </View>
                        <View style={{flexDirection: 'row', alignItems:'center',}}>
                            <Text>Weight (kg):</Text>
                            <TextInput 
                                style={{backgroundColor:'#fef', marginHorizontal:8, marginVertical:4, borderRadius:8, paddingHorizontal:4, flex:1}}
                                inputMode="numeric"
                                value={weight}
                                onChangeText={(value) => setWeight(value)}
                            />
                        </View>
                        <View style={{flexDirection: 'row', alignItems:'center',}}>
                            <Text>Others: </Text>
                            <TextInput 
                                style={{backgroundColor:'#fef', marginHorizontal:8, marginVertical:4, borderRadius:8, paddingHorizontal:4, flex:1}}
                                value={others}
                                onChangeText={(value) => setOthers(value)}
                            />
                        </View>
                    </View>
                    <View style={{marginLeft:'auto', justifyContent:'space-around'}}>
                        <View style={{marginBottom:5}}>
                            <Button title='Save' 
                                onPress={createSet}
                            />
                        </View>                    
                        <View style={{marginTop:5}}>
                            <Button 
                                title='Cancel' 
                                color='#f40'
                                onPress={() => setAddSet(false)}
                            />
                        </View>
                    </View>
                </View>
    )
}