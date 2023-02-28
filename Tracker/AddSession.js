import { View, Text, TextInput, Button, TouchableWithoutFeedback, Keyboard, Modal, Pressable, ScrollView, FlatList } from "react-native";
import { useState } from "react";
import { MaterialIcons } from '@expo/vector-icons';
import { exercisesList } from "../Exercises/exercisesList";
import ChooseGroup from "./ChooseGroup";
import ExerciseLog from "./ExerciseLog";
import idGenerator from '../Utils/idGenerator'

export default function() {

    const [date, setDate] = useState(() => new Date().toLocaleDateString())
    const [modal, setModal] = useState(false)
    const [exercise, setExercise] = useState('')

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <ScrollView style={{height:'100%'}}>

                <Pressable 
                    // onPress={() => setModal(false)} 
                    style={{alignSelf:'center', backgroundColor:'#eee', padding:10, borderRadius: 14,}}
                >
                    <MaterialIcons name='add'  size={35}/>
                </Pressable>

                <TextInput
                    placeholder="date"
                    value={date}
                    onChangeText={(value) => setDate(value)}
                    keyboardType='number-pad'
                    style={{fontSize: 20, padding:5, textAlign: 'center'}}
                />


                <View style={{margin: 20, backgroundColor:'#eee', padding: 20}}>
                    <View style={{flexDirection: 'column', alignItems: 'center'}}>
                        <Text style={{fontSize: 20, marginBottom: 10,}}>Exercise:</Text>
                        <TextInput 
                            style={{backgroundColor: '#fff', width: '100%', padding: 6, fontSize:20}}
                            value={exercise}
                            onChangeText={(value) => setExercise(value)}
                        />
                        <Button 
                            title="Choose from popular"
                            onPress={() => setModal(true)}
                        />
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


                
                <ExerciseLog />

                
            </ScrollView>
        </TouchableWithoutFeedback>
    )
}
