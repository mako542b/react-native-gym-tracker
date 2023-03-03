import { View, Text, StyleSheet, Button, FlatList, Pressable, ScrollView, Modal, TextInput } from 'react-native'
import { useState, useReducer } from 'react'
import SessionWrap from './session/SessionWrap'
import sessionReducer from './sessionReducer'
import AddSession from './session/AddSession'

export default function ({ navigation }) {

    const [allSessions, sessionsDispatch] = useReducer(sessionReducer, [])
    
    return(
        <ScrollView style={{backgroundColor: '#ddd'}}>
            <AddSession 
                sessionsDispatch={sessionsDispatch}
            />

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
