import { View, Text, Button, Pressable,  Modal, TextInput } from 'react-native'
import { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import DatePicker from './DatePicker'
import AddSessionButtons from './AddSessionButtons'
import AddTags from './AddTags'

export default function ({ sessionsDispatch }) {

    const [addSession, setAddSession] = useState(false)
    const [date, setDate] = useState(() => new Date())
    const [group, setGroup] = useState('')

    


    return (
        <View>
            {!addSession ? (
                <Pressable 
                    style={{alignSelf:'flex-start', backgroundColor:'#49e', padding:10, borderRadius: 14, flexDirection:'row', margin:9, justifyContent:'center'}}
                    onPress={() => setAddSession(true)}
                >
                    <MaterialIcons name='add'  size={20}/>
                    <Text>new session</Text>
                </Pressable>
            ) : (
                <View style={{backgroundColor:'#49e', padding:15}}>
                    <DatePicker date={date} setDate={setDate}/>
                    <AddTags 
                        group={group}
                        setGroup={setGroup}
                    />
                    <AddSessionButtons 
                        sessionsDispatch={sessionsDispatch} 
                        setAddSession={setAddSession}
                        date={date}
                        group={group}
                    />
                </View>
            )}
        </View>
    )
}