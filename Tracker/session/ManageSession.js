import { View } from "react-native";
import ExerciseLog from "../exercise/ExerciseLog";
import AddExercise from "../exercise/AddExercise";

function sortExercises(exercises) {
    return exercises.slice().sort((a,b) => b.timestamp - a.timestamp)
}

export default function({ session, sessionsDispatch }) {

    return (
            <View style={{borderTopColor:'#888', borderTopWidth:1, paddingBottom:12, paddingHorizontal:10}}>
                <AddExercise sessionKey={session.key} sessionsDispatch={sessionsDispatch} sessionDate={session.date}/>
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
