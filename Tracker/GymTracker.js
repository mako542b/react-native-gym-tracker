import { View, Text, StyleSheet, Button, FlatList, Pressable, ScrollView, Modal, TextInput } from 'react-native'
import { useState, useReducer } from 'react'
import idGenerator from '../Utils/idGenerator'
// import ManageSession from './ManageSession'
import SessionWrap from './SessionWrap'
import { MaterialIcons } from '@expo/vector-icons'
import sessionReducer from './sessionReducer'
import AddSession from './session/AddSession'

export default function ({ navigation }) {

    const [allSessions, sessionsDispatch] = useReducer(sessionReducer, [])
    const [modal, setModal] = useState(false)

    


    return(
        <ScrollView style={{backgroundColor: '#6d8'}}>

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
