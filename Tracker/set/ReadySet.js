import { useState } from 'react'
import { View, Button, Flatlist, Text, TextInput, Pressable } from 'react-native'
import SetInfo from './SetInfo'
import SetLog from './SetLog'

export default function ({ set, index, exerciseKey, sessionKey, sessionsDispatch}) {

    const [isEditing, setIsEditing] = useState(false)

    if(isEditing){
        return (
            <SetLog 
                sessionsDispatch={sessionsDispatch}
                sessionKey={sessionKey}
                exerciseKey={exerciseKey}
                index={index}
                set={set}
                action='editSet'
                cancelFn={setIsEditing}
            />
    )}
 
 
    return (
        <View style={{flexDirection:'row', alignItems:'center', borderColor:'#333',borderWidth:1, padding:15, borderRadius:6, marginVertical:5}}>
            <Text style={{marginEnd:10, fontWeight:'bold'}}>Set {index}:</Text>
            <View style={{flex:1, marginRight:10}}>
                {set.reps && <SetInfo label='Reps' info={set.reps}/>}
                {set.duration && <SetInfo label='Duration (min)' info={set.duration}/>}
                {set.weight && <SetInfo label='Weight (kg)' info={set.weight}/>}
                {set.others && <SetInfo label='Other' info={set.others}/>}
            </View>
            <View style={{marginLeft:'auto', justifyContent:'space-around'}}>
                <View >
                    <Button title='Edit' 
                        onPress={() => setIsEditing(true)}
                    />
                </View>
            </View>
        </View>
    )
}