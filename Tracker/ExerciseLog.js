import { View, Button, FlatList, Text, TextInput, Pressable } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import SetLog from './SetLog'
import ReadySet from './ReadySet'

export default function ({ exercise }) {
    return (
        <View style={{ padding: 10, backgroundColor: '#eee'}}>

            <View style={{position:'relative', justifyContent:'center'}}>
                <Text style={{textAlign: 'center', fontSize: 22, padding:5}}>{exercise.name}</Text>
                <Pressable 
                    style={{flexDirection:'row', position:'absolute', right:0, alignItems:'center', padding:5}}
                    onPress={() => null}
                >
                    <Text>Add set</Text>
                    <MaterialIcons name='add'  size={20}/>
                </Pressable>
            </View>
            




                {/* <SetLog /> */}

            {exercise.sets?.map(item => (
                <ReadySet set={item} key={item.key} />
            ))}


        </View>
    )
}


const exampleExercise = {
    name: 'Bench press',
    key: 'test',
    sets: [
        {
            setNumber: 1,
            reps: 8,
            weight: 70,
            others: 'last only half rep last only half rep last only half rep half rep ly half rephalf  last only half rephalf rep last only half rep',
            key:'12'
        },{
            setNumber: 2,
            reps: 7,
            weight: 72.5,
            key:'32'
        },{
            setNumber: 3,
            reps: 5,
            weight: 75,
            key:'46'
        },
    ]
}


const history = [
    {
        date: '28.02.2023',
        group: 'Cardio',
        exercises: [
            exampleExercise
        ]
    }
]