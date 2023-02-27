import { View, Text, FlatList } from "react-native";

let mockSession = {
    date: '27.02.2023',
    muscleGroup: ['legs'],
    exercises: [
        {key: '123456', name: 'Incline walk', duration: '10 minutes', sets: null},
        {key: '098767', name: 'Nut cracker', duration: null, sets: [
            {key: '765', reps: 14, weight: '16kg'}, {reps: 12, weight: '16kg'}, {reps: 10, weight:'16kg'}
        ]},
        {key: '09feasf', name: 'Squats', duration: null, sets: [
            {key: '765432' ,reps: 6, weight: '65kg'}, {reps: 5, weight: '70kg'}, {reps: 4, weight:'70kg'}
        ]},
    ]
}

export default function() {
    return (
        <View>
            <View style={{borderBottomColor: '#888', borderBottomWidth: 1, paddingBottom: 6}}>
                <Text style={{fontSize: 20, textAlign: 'center', padding: 10, backgroundColor: '#eee'}}>{mockSession.date}</Text>
                <Text style={{fontSize: 16, textAlign: 'center', paddingBottom: 10, backgroundColor: '#eee'}}>Group: {mockSession.muscleGroup}</Text>
                {/* <Text style={{padding:10, textAlign: 'center'}}>Performed exercises:</Text> */}
                <FlatList 
                    data={mockSession.exercises}
                    renderItem={({ item }) => (
                        <View style={{paddingHorizontal:10, paddingBottom: 6, marginVertical: 6, marginHorizontal: 10, backgroundColor: '#cfc', borderRadius: 6,}}>
                            <Text style={{textAlign: 'center', marginBottom: 6, fontSize:16}}>{item.name}:</Text>
                            {item.duration && <Text>Duration: {item.duration}</Text>}
                            {item.sets && (
                                <View>
                                    <Text>Sets:</Text>
                                    <FlatList 
                                        data={item.sets}
                                        renderItem={( {item: set} ) => (
                                            <Text>{'\t'} reps: {set.reps}, weight: {set.weight}</Text>
                                        )}
                                    />
                                </View>
                            )}

                        </View>
                    )}
                />
            </View>
        </View>
    )
}