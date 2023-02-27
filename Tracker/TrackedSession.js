import { View, Text, FlatList } from "react-native"
import TrackedExercise from "./TrackedExercise"

export default function ({ session }) {
    return (
        <View style={{borderBottomColor: '#888', borderBottomWidth: 1, paddingBottom: 6}}>
            <Text style={{fontSize: 20, textAlign: 'center', padding: 10, backgroundColor: '#eee'}}>{session.date}</Text>
            <Text style={{fontSize: 16, textAlign: 'center', paddingBottom: 10, backgroundColor: '#eee'}}>Group: {session.muscleGroup}</Text>
            <FlatList 
                data={session.exercises}
                renderItem={({ item }) => (
                    <TrackedExercise exercise={item}/>
                )}
            />
        </View>
    )
}