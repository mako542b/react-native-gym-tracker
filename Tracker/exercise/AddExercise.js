import { exercisesList } from "../../data/exercisesList";
import { useState } from "react";
import { View, Text, Button, Modal, FlatList, TextInput, Pressable } from 'react-native'
import ChooseGroup from "./ChooseGroup";
import { MaterialIcons } from '@expo/vector-icons'
import ActionButtons from "./ActionButtons";

export default function ({ sessionKey, sessionsDispatch }) {

    const [modal, setModal] = useState(false)
    const [exercise, setExercise] = useState('')
    const [expanded, setExpanded] = useState(false)

    function addExercise() {
        sessionsDispatch({type:'addExercise', payload: {exercise, sessionKey}})
        setExercise('')
        setModal(false)
        setExpanded(false)
    }

    return (
        <View>
            {expanded ? (
                <View style={{  padding: 20, flexDirection: 'column', alignItems: 'center'}}>
                    <View style={{ alignItems: 'center', flexDirection:'row', justifyContent:'space-between', alignSelf:'stretch'}}>
                        <Text style={{fontSize: 20,}}>Name:</Text>
                        <Pressable onPress={() => {
                            setExpanded(false)
                            setExercise('')
                        }}>
                            <Text style={{color:'#b22'}}>cancel</Text>
                        </Pressable>
                    </View>
                    <TextInput 
                        style={{backgroundColor: '#eee', width: '100%', padding: 6, fontSize:20, borderRadius:8, margin:4}}
                        value={exercise}
                        onChangeText={(value) => setExercise(value)}
                    />
                    <ActionButtons 
                        addExercise={addExercise}
                        setModal={setModal}
                    />
                </View>
            ) : (
                <Pressable
                    onPress={() => setExpanded(true)}
                    style={{padding: 15, flexDirection:'row', alignSelf:'flex-start'}}
                >
                    <MaterialIcons name='add' size={20}/>
                    <Text>new exercise</Text>
                </Pressable>
            )}

            <Modal visible={modal}>
                    <FlatList 
                        data={exercisesList}
                        renderItem={({ item }) => (
                            <ChooseGroup group={item} setExercise={setExercise} setModal={setModal}/>
                        )}
                    />
            </Modal>
        </View>
    )
}