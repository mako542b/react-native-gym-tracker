import { View, Text, Pressable, ScrollView } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect, useMemo } from "react";
import SetsView from "./SetsView";
import PickExercise from "./PickExercise";
import Stats from "./Stats";

export default function () {

    const [sessions, setSessions] = useState(null)
    const [loggedExercise, setLoggedExercise] = useState(null)

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
                let regex = new RegExp(exercise.name, 'gi')
                if(regex.test(loggedExercise)) acc.push(exercise)
            })
            return acc
        },[])
        return matchingExercises.sort((a,b) => b.sessionDate - a.sessionDate)
    }, [loggedExercise, sessions])



    




    return (
        <ScrollView>
            <PickExercise 
                setLoggedExercise={setLoggedExercise}
                sessions={sessions}
            />

            {foundExercises && (
                <View>
                    <Text style={{fontSize:22, textAlign:'center', padding:10}}>Results for {loggedExercise}:</Text>
                    <Stats exercise={foundExercises}/>
                    {foundExercises.map(exercise => (
                        <View key={exercise.key} style={{backgroundColor:'#fff', marginVertical:10, paddingVertical:12, borderBottomColor:'#999', borderBottomWidth:1, borderTopColor:'#999', borderTopWidth:1}}>
                            {exercise.sessionDate && <Text style={{textAlign:'center', paddingTop:16, fontSize:18}}>Date: {new Date(exercise.sessionDate).toLocaleDateString()}</Text>}
                            {exercise?.sets?.length > 0  ? (
                                <View style={{paddingHorizontal:25}}>
                                    {exercise.sets.sort((a,b) => a.timestamp - b.timestamp).map((set, index) => (
                                        <SetsView key={set.timestamp} set={set} index={index + 1}/>
                                    ))}
                                </View>
                            ) : (
                                <Text style={{padding:8, textAlign:'center'}}>No sets data</Text>
                            )}
                        </View>
                        
                    ))}
                </View>
            )}
            
        </ScrollView>
    )
}