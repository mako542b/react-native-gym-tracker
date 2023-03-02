import { exercisesList } from "../Exercises/exercisesList";
import { useState } from "react";
import { View, Text, Button, Modal, FlatList, TextInput, Pressable } from 'react-native'
import ChooseGroup from "./ChooseGroup";
import { MaterialIcons } from '@expo/vector-icons'

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
            {expanded ? (<View style={{ backgroundColor:'#eee', padding: 20}}>
                <View style={{flexDirection: 'column', alignItems: 'center'}}>
                    <View style={{ alignItems: 'center', flexDirection:'row', justifyContent:'space-between', alignSelf:'stretch'}}>
                        <Text style={{fontSize: 20,}}>Name:</Text>
                        <Pressable
                            onPress={() => setExpanded(false)}
                        >
                            <Text>cancel</Text>
                        </Pressable>
                    </View>
                    <TextInput 
                        style={{backgroundColor: '#fff', width: '100%', padding: 6, fontSize:20}}
                        value={exercise}
                        onChangeText={(value) => setExercise(value)}
                    />
                    <View style={{flexDirection: 'row', justifyContent:'space-between', width:'100%'}}>
                        <Button 
                            title="Choose from popular"
                            onPress={() => setModal(true)}
                        />
                        <Button 
                            title="Add"
                            onPress={addExercise}
                        />
                    </View>
                </View>
            </View>) : (
                <Pressable
                    onPress={() => setExpanded(true)}
                    style={{padding: 10, flexDirection:'row'}}
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