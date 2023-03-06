import { View, Text, Pressable, Modal, Button, ScrollView } from "react-native"
import { useState, useEffect, useRef, useMemo } from "react";


export default function ({ sessions, setLoggedExercise }) {

    const [modal, setModal] = useState(false)
    

    const exercisesNames = useMemo(() => {
        return sessions?.reduce((acc, session) => {
            session.exercises.forEach(exercise => {
                acc[exercise.name] = true
            })
            return acc
        }, {})
    }, [sessions])


    return (
        <View>
            
            <Button 
                title='choose exercise'
                onPress={() => setModal(true)}
            />

            <Modal visible={modal}>
                <ScrollView>
                    
                    <Pressable
                        onPress={() => setModal(false)}
                        style={{alignSelf:'flex-end', padding:20}}
                    >
                        <Text style={{fontSize:20}}>X</Text>
                    </Pressable>
                    {exercisesNames && Object.keys(exercisesNames).map(name => (
                        <Pressable
                            style={{alignItems:'center', padding:7,}}
                            key={name}
                            onPress={() => {
                                setLoggedExercise(name)
                                setModal(false)
                            }}
                        >
                            <Text style={{color:'#822'}}>{name}</Text>
                        </Pressable>
                    ))}
                </ScrollView>
            </Modal>

        </View>
    )
}