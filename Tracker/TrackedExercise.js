import { View, Text, FlatList } from "react-native"


export default function ({ exercise }) {
    return (
        <View style={{paddingHorizontal:10, paddingBottom: 6, marginVertical: 6, marginHorizontal: 10, backgroundColor: '#cfc', borderRadius: 6,}}>
            <Text style={{textAlign: 'center', marginBottom: 6, fontSize:16}}>{exercise.name}:</Text>
            {exercise.duration && <Text>Duration: {exercise.duration}</Text>}
            {exercise.sets && (
                <View>
                    <Text>Sets:</Text>
                    <FlatList 
                        data={exercise.sets}
                        renderItem={( {item: set} ) => (
                            <Text>{'\t'} reps: {set.reps}, weight: {set.weight}</Text>
                        )}
                    />
                </View>
            )}
        </View>
    )
}