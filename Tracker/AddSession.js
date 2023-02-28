import { View, Text, TextInput, Button, TouchableWithoutFeedback, Keyboard, Modal, Pressable } from "react-native";
import { useState } from "react";
import { MaterialIcons } from '@expo/vector-icons';

export default function() {

    const [date, setDate] = useState(() => new Date().toLocaleDateString())
    const [modal, setModal] = useState(false)

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

                <Button 
                    title='New exercise'
                    onPress={() => setModal(true)}
                />
                <Modal visible={modal}>
                    <View style={{padding:10}}>
                        <Pressable 
                            onPress={() => setModal(false)} 
                            style={{justifyContent:'center'}}
                        >
                            <MaterialIcons name='close'  size={35}/>
                        </Pressable>
                        
                        <View style={{flexDirection:'row'}}>
                            <Text>Name:</Text>
                            <TextInput 

                            />
                        </View>


                    </View>
                </Modal>
            </View>
        </TouchableWithoutFeedback>
    )
}