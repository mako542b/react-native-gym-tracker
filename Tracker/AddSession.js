import { View, Text, TextInput, Button, TouchableWithoutFeedback, Keyboard, Modal, Pressable, ScrollView, FlatList } from "react-native";
import { useState } from "react";
import { MaterialIcons } from '@expo/vector-icons';
import { exercisesList } from "../Exercises/exercisesList";
import ChooseGroup from "./ChooseGroup";

export default function() {

    const [date, setDate] = useState(() => new Date().toLocaleDateString())
    const [modal, setModal] = useState(false)
    const [exercise, setExercise] = useState('')


    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={{height:'100%'}}>
                <TextInput
                    placeholder="date"
                    value={date}
                    onChangeText={(value) => setDate(value)}
                    keyboardType='number-pad'
                    style={{fontSize: 20, padding:5, textAlign: 'center'}}
                />

                <Pressable 
                    // onPress={() => setModal(false)} 
                    style={{alignSelf:'center', backgroundColor:'#eee', padding:10, borderRadius: 14,}}
                >
                    <MaterialIcons name='add'  size={35}/>
                </Pressable>

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
                                // <Text>{item.name}</Text>
                            )}
                        
                        />
                </Modal>


            <View style={{margin: 20, padding: 10, backgroundColor: '#eee'}}>
                <Text style={{textAlign: 'center', fontSize: 22,}}>Bench press</Text>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Text style={{marginEnd:10}}>Set 1:</Text>
                    <View style={{flex:1}}>
                        <View style={{flexDirection: 'row', alignItems:'center',}}>
                            <Text>Reps:</Text>
                            <TextInput 
                                style={{backgroundColor:'#fef', marginHorizontal:8, marginVertical:4, borderRadius:8, paddingHorizontal:4, flex:1}}
                                inputMode="numeric"
                            />
                        </View>
                        <View style={{flexDirection: 'row', alignItems:'center',}}>
                            <Text>Duration (min):</Text>
                            <TextInput 
                                style={{backgroundColor:'#fef', marginHorizontal:8, marginVertical:4, borderRadius:8, paddingHorizontal:4, flex:1}}
                                inputMode="numeric"
                            />
                        </View>
                        <View style={{flexDirection: 'row', alignItems:'center',}}>
                            <Text>Weight (kg):</Text>
                            <TextInput 
                                style={{backgroundColor:'#fef', marginHorizontal:8, marginVertical:4, borderRadius:8, paddingHorizontal:4, flex:1}}
                                inputMode="numeric"
                            />
                        </View>
                    </View>
                    <View style={{marginLeft:'auto', justifyContent:'space-around'}}>
                        <View style={{marginBottom:5}}>
                            <Button title='Save' />
                        </View>                    
                        <View style={{marginTop:5}}>
                            <Button title='Delete' color='#f40'/>
                        </View>
                    </View>
                </View>
                <Pressable 
                    style={{flexDirection:'row', justifyContent:'flex-end', alignItems:'center', backgroundColor:'#efefef', alignSelf:'flex-end', padding:5}}
                    onPress={() => null}
                >
                    <Text>Add set</Text>
                    <MaterialIcons name='add'  size={30}/>
                </Pressable>
            </View>
                
            </View>
        </TouchableWithoutFeedback>
    )
}
