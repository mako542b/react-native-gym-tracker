import { View, Text, StyleSheet, Button, FlatList, Pressable, ScrollView, Modal, TextInput } from 'react-native'
import { useState, useReducer } from 'react'
import SessionWrap from './session/SessionWrap'
import sessionReducer from './sessionReducer'
import AddSession from './session/AddSession'
import FilterSession from './session/FilterSession'
import { filterByDate } from '../Utils/filter'

export default function ({ navigation }) {

    const [allSessions, sessionsDispatch] = useReducer(sessionReducer, [])
    const [addSession, setAddSession] = useState(false)
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)

    
    
    return(
        <ScrollView style={{backgroundColor: '#ddd'}}>
            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <AddSession sessionsDispatch={sessionsDispatch} addSession={addSession} setAddSession={setAddSession}/>
                {!addSession ? (
                    <FilterSession 
                        addSession={addSession}
                        endDate={endDate}
                        setEndDate={setEndDate}
                        startDate={startDate}
                        setStartDate={setStartDate}    
                    />
                ) : null}
            </View>

            {filterByDate(allSessions, {startDate, endDate})?.sort((a,b) => b.date.getTime() - a.date.getTime()).map(session => (
                <SessionWrap 
                    session={session} 
                    key={session.key} 
                    sessionsDispatch={sessionsDispatch}
                />
            ))}

        </ScrollView>
    )
}
