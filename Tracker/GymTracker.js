import { View, Text, StyleSheet, Button, FlatList, Pressable, ScrollView, Modal, TextInput } from 'react-native'
import { useState } from 'react'
import idGenerator from '../Utils/idGenerator'
import AddSession from './AddSession'
import SessionWrap from './SessionWrap'
import { MaterialIcons } from '@expo/vector-icons'


export default function ({ navigation }) {

    const [allSessions, setAllSessions] = useState(history)
    const [modal, setModal] = useState(false)
    const [date, setDate] = useState(() => new Date().toLocaleDateString())
    const [group, setGroup] = useState('')


    return(
        <ScrollView>
            <Pressable 
                    style={{alignSelf:'center', backgroundColor:'#eee', padding:10, borderRadius: 14,}}
                    onPress={() => setModal(true)}
                >
                    <MaterialIcons name='add'  size={35}/>
                </Pressable>
            {allSessions.map(session => (
                <SessionWrap 
                    session={session} 
                    key={session.key} 
                    setAllSessions={setAllSessions}
                />
            ))}

            <Modal visible={modal}>
                <Button 
                    title='cancel'
                    onPress={() => setModal(false)}
                />
                <View style={{justifyContent:'center', alignItems:'center', padding: 10,}}>
                    <Text style={{fontSize:20}}>
                        Date:
                    </Text>
                    <TextInput 
                        placeholder='dd.mm.yyyy'
                        value={date}
                        onChangeText={val => setDate(val)}
                        style={{fontSize:20,}}
                        inputMode='numeric'
                    />
                </View>
                <View style={{justifyContent:'center', alignItems:'center', padding: 10,}}>
                    <Text style={{fontSize:20}}>
                        Group:
                    </Text>
                    <TextInput 
                        placeholder='add group'
                        value={group}
                        onChangeText={val => setGroup(val)}
                        style={{fontSize:20,}}
                    />
                </View>
                <Button 
                    title='Add'
                    onPress={() => {
                        setAllSessions(prev => [...prev, {date, group, key:idGenerator(),exercises:[]}])
                        setModal(false)
                    }}
                />
            </Modal>

        </ScrollView>
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
            others: 'last only half rep',
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

const secondExampleExercise = {
    name: 'Push ups',
    key: 'tes2',
    sets: [
        {
            setNumber: 1,
            reps: 20,
            key:'12g'
        },{
            setNumber: 2,
            reps: 22,
            key:'32g'
        },{
            setNumber: 3,
            reps: 18,
            key:'46g'
        },
    ]
}


const history = [
    {
        date: '28.02.2023',
        group: 'Cardio',
        key: '123456789',
        exercises: [
            exampleExercise,
            secondExampleExercise
        ]
    },
]