import { View, Text, Pressable } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import SetLog from '../set/SetLog'
import ReadySet from '../set/ReadySet'
import { useState } from 'react'
import DeleteExercise from './DeleteExercise'

export default function ({ exercise, sessionsDispatch, sessionKey }) {

    const [addSet, setAddSet] = useState(false)
    const [expanded, setExpanded] = useState(false)


    return (
        <View style={{ padding: 10, backgroundColor: '#8aa', marginVertical:7, borderRadius:7}}>

            <Pressable 
                style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}
                onPress={() => setExpanded(prev => !prev)}
            >
                <Text style={{textAlign: 'center', fontSize: 22, padding:5}}>{exercise.name}</Text>
                <MaterialIcons name={expanded ? 'expand-less' : 'expand-more'} size={25}/>
            </Pressable>
            {expanded && (<View>
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
                    <View style={{justifyContent:'space-between', alignItems:'center', flexDirection:'row'}}>
                        <DeleteExercise sessionKey={sessionKey} sessionsDispatch={sessionsDispatch} exerciseKey={exercise.key}/>
                        <Pressable 
                            style={{flexDirection:'row', alignItems:'center', padding:0 }}
                            onPress={() => setAddSet(prev => !prev)}
                        >
                            <Text>Add set</Text>
                            <MaterialIcons name='add' size={20}/>
                        </Pressable>

                    </View>
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

            </View>)}

        </View>
    )
}

