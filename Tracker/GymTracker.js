import { View, Text, StyleSheet, Button, FlatList, Pressable, ScrollView, Modal, TextInput } from 'react-native'
import { useState, useReducer } from 'react'
import idGenerator from '../Utils/idGenerator'
import ManageSession from './ManageSession'
import SessionWrap from './SessionWrap'
import { MaterialIcons } from '@expo/vector-icons'
import sessionsReducer from './sessionReducer'
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';


export default function ({ navigation }) {

    const [allSessions, sessionsDispatch] = useReducer(sessionsReducer, [])
    const [modal, setModal] = useState(false)
    const [date, setDate] = useState(() => new Date())
    const [group, setGroup] = useState('')
    const [dateModal, setDateModal] = useState(false)

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setDate(selectedDate);
      };

    const showMode = (currentMode) => {
        DateTimePickerAndroid.open({
          value: date,
          onChange,
          mode: currentMode,
          is24Hour: true,
        });
      };
    
      const showDatepicker = () => {
        showMode('date');
      };


    return(
        <ScrollView style={{backgroundColor: '#6d8'}}>

            {!dateModal ? (
                <Pressable 
                    style={{alignSelf:'flex-start', backgroundColor:'#49e', padding:10, borderRadius: 14, flexDirection:'row', margin:9, justifyContent:'center'}}
                    onPress={() => setDateModal(true)}
                >
                    <MaterialIcons name='add'  size={20}/>
                    <Text>new session</Text>
                </Pressable>
            ) : (
                <View style={{backgroundColor:'#49e', padding:15}}>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Text style={{fontSize:20}}>Date: </Text>
                        <Text style={{fontSize:20}}>{date.toLocaleDateString()} </Text>
                        <Pressable
                            onPress={showDatepicker}
                        >
                            <MaterialIcons name='date-range' size={30}/>
                        </Pressable>
                    </View>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Text style={{fontSize:20}}>Tags: </Text>
                        <MaterialIcons name='add' size={30}/>
                    </View>
                    <View style={{flexDirection:'row', alignSelf:'flex-end'}}>
                        <View style={{marginRight:15}}>
                            <Button 
                                title='Add'
                                onPress={() => {
                                    sessionsDispatch({type:'addSession', payload: {date, group}})
                                    setDateModal(false)
                                }}
                                color='#00f'
                                style={{margin:10}}
                            />
                        </View>
                            <Button 
                                title='cancel'
                                onPress={() => setDateModal(false)}
                                color='#a55'
                            />
                    </View>
                </View>
            )}

            {allSessions.slice().sort((a,b) => b.date.getTime() - a.date.getTime()).map(session => (
                <SessionWrap 
                    session={session} 
                    key={session.key} 
                    sessionsDispatch={sessionsDispatch}
                />
            ))}

        </ScrollView>
    )
}
