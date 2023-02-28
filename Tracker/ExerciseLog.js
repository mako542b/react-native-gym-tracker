import { View, Button, FlatList, Text, TextInput, Pressable } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import SetLog from './SetLog'
import ReadySet from './ReadySet'

export default function () {
    return (
        <View style={{margin: 20, padding: 10, backgroundColor: '#eee'}}>
            <Text style={{textAlign: 'center', fontSize: 22, padding:5}}>Bench press</Text>
            
            <SetLog />

            <Pressable 
                style={{flexDirection:'row', justifyContent:'flex-end', alignItems:'center', backgroundColor:'#efefef', alignSelf:'flex-end', padding:5}}
                onPress={() => null}
            >
                <Text>Add set</Text>
                <MaterialIcons name='add'  size={30}/>
            </Pressable>




            {exampleExercise.sets.map(item => (
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