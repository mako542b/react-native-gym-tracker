import { View, Text, Pressable } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect, useRef, useMemo } from "react";
import SetsView from "./SetsView";
import PickExercise from "./PickExercise";

export default function () {

    const [sessions, setSessions] = useState(null)
    const [loggedExercise, setLoggedExercise] = useState(null)
    // const [exerciseList, setExerciseList] = useState(null)

    useEffect(() => {
        async function getInitData() {
            try {
                const initData = await AsyncStorage.getItem('sessions') 
                setSessions(JSON.parse(initData))
            } catch (error) {
                console.log(error)
            }
        }
        getInitData()
    }, [])

    const foundExercises = useMemo(() => {
        if(!sessions || !loggedExercise) return null
        const matchingExercises = sessions?.reduce((acc, session) => {
            session.exercises.forEach(exercise => {
                if(exercise.name === loggedExercise) acc.push(exercise)
            })
            return acc
        },[])
        return matchingExercises
    }, [loggedExercise, sessions])



    




    return (
        <View>
            <PickExercise 
                setLoggedExercise={setLoggedExercise}
                sessions={sessions}
            />

            {foundExercises && (
                <View>
                    <Text style={{fontSize:22, textAlign:'center', padding:10}}>Results for {loggedExercise}:</Text>
                    {foundExercises.map(exercise => (
                        <View key={exercise.key}>
                            {exercise.sessionDate && <Text>Date: {new Date(exercise.sessionDate).toLocaleDateString()}</Text>}
                            {exercise.sets && exercise.sets.map((set, index) => (
                                <SetsView key={set.timestamp} set={set} index={index}/>
                            ))}
                        </View>
                        
                    ))}
                </View>
            )}
            
        </View>
    )
}