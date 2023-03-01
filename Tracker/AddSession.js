import { View, Text, TextInput, Button, TouchableWithoutFeedback, Keyboard, Modal, Pressable, ScrollView, FlatList } from "react-native";
import { useState } from "react";
import { exercisesList } from "../Exercises/exercisesList";
import ChooseGroup from "./ChooseGroup";
import ExerciseLog from "./ExerciseLog";
import idGenerator from '../Utils/idGenerator'

export default function({ session, sessionsDispatch }) {

    const [modal, setModal] = useState(false)
    const [exercise, setExercise] = useState('')

    function addExercise() {
        sessionsDispatch({type:'addExercise', payload: {exercise, key:session.key}})
        setModal(false)
    }

    return (
        // <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View>


                <View style={{ backgroundColor:'#eee', padding: 20}}>
                    <View style={{flexDirection: 'column', alignItems: 'center'}}>
                        <Text style={{fontSize: 20, marginBottom: 2,}}>Add exercise:</Text>
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

                </View>

                <Modal visible={modal}>
                        <FlatList 
                            data={exercisesList}
                            renderItem={({ item }) => (
                                <ChooseGroup group={item} setExercise={setExercise} setModal={setModal}/>
                            )}
                        />
                </Modal>


                
                {session?.exercises && session.exercises.map(exercise => (
                    <ExerciseLog exercise={exercise} key={exercise.key}/>
                ))}

                
            </View>
        // </TouchableWithoutFeedback>
    )
}
