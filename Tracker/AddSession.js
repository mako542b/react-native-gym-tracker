import { View, Text, TextInput, Button, TouchableWithoutFeedback, Keyboard, Modal, Pressable, ScrollView, FlatList } from "react-native";
import { useState } from "react";

import ExerciseLog from "./ExerciseLog";
import idGenerator from '../Utils/idGenerator'
import AddExercise from "./AddExercise";

export default function({ session, sessionsDispatch }) {



    return (
            <View>

                <AddExercise sessionKey={session.key} sessionsDispatch={sessionsDispatch}/>
                
                {session?.exercises && session.exercises.map(exercise => (
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
