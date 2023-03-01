import { View, Button, FlatList, Text, TextInput, Pressable } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import SetLog from './SetLog'
import ReadySet from './ReadySet'
import { useState } from 'react'

export default function ({ exercise, sessionsDispatch, sessionKey }) {

    const [addSet, setAddSet] = useState(false)


    return (
        <View style={{ padding: 10, backgroundColor: '#eee'}}>

            <Text style={{textAlign: 'center', fontSize: 22, padding:5}}>{exercise.name}</Text>
        
            {addSet ? (
                <SetLog 
                    cancelFn={setAddSet}
                    sessionsDispatch={sessionsDispatch}
                    sessionKey={sessionKey}
                    exerciseKey={exercise.key}
                    index={exercise.sets.length + 1}
                    action='addSet'
                /> 
            ) : (
                <Pressable 
                    style={{flexDirection:'row', alignItems:'center', padding:0, alignSelf:'flex-end'}}
                    onPress={() => setAddSet(prev => !prev)}
                >
                    <Text>Add set</Text>
                    <MaterialIcons name='add' size={20}/>
                </Pressable>
            )}

            {exercise.sets?.slice().sort((a,b) => b.timestamp - a.timestamp).map((item, index) => (
                <ReadySet 
                    set={item} 
                    key={item.key}
                    index={exercise.sets.length - index}
                    sessionsDispatch={sessionsDispatch}
                    sessionKey={sessionKey}
                    exerciseKey={exercise.key}
                />
            ))}

        </View>
    )
}


const exampleExercise = {
    name: 'Bench press',
    key: 'test',
    sets: [
        {
            setNumber: 1,
            reps: 8,
            weight: 70,
            others: 'last only half rep last only half rep last only half rep half rep ly half rephalf  last only half rephalf rep last only half rep',
            key:'12'
        },{
            setNumber: 2,
            reps: 7,
            weight: 72.5,
            key:'32'
        },{
            setNumber: 3,
            reps: 5,
            weight: 75,
            key:'46'
        },
    ]
}


const history = [
    {
        date: '28.02.2023',
        group: 'Cardio',
        exercises: [
            exampleExercise
        ]
    }
]