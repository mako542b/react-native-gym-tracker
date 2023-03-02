import { View, Text, TextInput, Button, TouchableWithoutFeedback, Keyboard, Modal, Pressable, ScrollView, FlatList } from "react-native";
import { useState } from "react";

import ExerciseLog from "./ExerciseLog";
import idGenerator from '../Utils/idGenerator'
import AddExercise from "./AddExercise";

function sortExercises(exercises) {
    return exercises.slice().sort((a,b) => b.timestamp - a.timestamp)
}

export default function({ session, sessionsDispatch }) {



    return (
            <View style={{borderTopColor:'#555', borderTopWidth:1, paddingBottom:12, paddingHorizontal:10}}>

                <AddExercise sessionKey={session.key} sessionsDispatch={sessionsDispatch}/>
                
                {session?.exercises && sortExercises(session.exercises).map(exercise => (
                    <ExerciseLog 
                        exercise={exercise} 
                        key={exercise.key}
                        sessionsDispatch={sessionsDispatch}
                        sessionKey={session.key}
                    />
                ))}

                
            </View>
    )
}
