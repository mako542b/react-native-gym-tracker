import { View, Button, Flatlist, Text, TextInput, Pressable } from 'react-native'
import { useState } from 'react'
import SetInput from './SetInput'

export default function ({ cancelFn, exerciseKey, sessionKey, sessionsDispatch, index, set, action, setKey }) {

    const [weight, setWeight] = useState(() => set?.weight ? set.weight : null)
    const [duration, setDuration] = useState(() => set?.duration ? set.duration : null)
    const [reps, setReps] = useState(() => set?.reps ? set.reps : null)
    const [others, setOthers] = useState(() => set?.others ? set.others : null)

    function createSet() {
        const setInfo = {weight, duration, reps, others}
        const payload = {sessionKey, exerciseKey, setInfo, setKey: set?.key}
        sessionsDispatch({type: action, payload})
        cancelFn(false)
    }

    function deleteSet() {
        if(set) {
            const payload = {sessionKey, exerciseKey, setKey: set?.key}
            sessionsDispatch({type: 'deleteSet', payload})
        }
        cancelFn(false)
    }

    return (
        <View style={{flexDirection:'row', alignItems:'center', borderTopColor: '#222', borderTopWidth:1, padding:5}}>
            <Text style={{marginEnd:10, fontWeight:'bold'}}>Set {index}:</Text>
            <View style={{flex:1}}>
                <SetInput 
                    getter={reps}
                    setter={setReps}
                    label='Reps'
                    keyboard='numeric'
                />
                <SetInput 
                    getter={weight}
                    setter={setWeight}
                    label='Weight'
                    keyboard='numeric'
                />
                <SetInput 
                    getter={duration}
                    setter={setDuration}
                    label='Duration'
                    keyboard='numeric'
                />
                <SetInput 
                    getter={others}
                    setter={setOthers}
                    label='Others'
                    keyboard='text'
                />
            </View>
            <View style={{marginLeft:'auto', justifyContent:'space-around'}}>
                <View style={{marginBottom:5}}>
                    <Button title='Save' 
                        onPress={createSet}
                    />
                </View>                    
                <View style={{marginTop:5}}>
                    <Button 
                        title='Delete' 
                        color='#f40'
                        onPress={deleteSet}
                    />
                </View>
            </View>
        </View>
    )
}