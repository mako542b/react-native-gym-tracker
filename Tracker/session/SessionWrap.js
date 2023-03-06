import ManageSession from './ManageSession'
import { useState } from 'react'
import { View, Pressable, Text } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'


export default function({ session, sessionsDispatch }) {

    const [expanded, setExpanded] = useState(false)
    const dateOptions = {weekday: 'short', day: '2-digit', month: '2-digit', year:'numeric'}

    return (
        <View style={{margin: 10, backgroundColor:'#eee', borderRadius:4, padding:10}}>
            <Pressable
                onPress={() => setExpanded(prev => !prev)}
                style={{ alignItems:'center', paddingVertical: 6, paddingHorizontal:30, justifyContent:'center'}}
            >   
                <Text style={{fontSize:25, color:'#111'}}>{new Date(session.date).toLocaleDateString(undefined, dateOptions)}</Text>
                {session?.tags?.length > 0 && (
                    <View style={{flexDirection:'row', width:'80%', flexWrap:'wrap', justifyContent:'center'}}>
                        {session.tags.map(tag => (
                            <Text key={tag} style={{paddingHorizontal:6}}>{tag}</Text>
                        ))}
                    </View>
                )}
                <MaterialIcons 
                    name={expanded ? 'expand-less' : 'expand-more'}
                    size={30}
                    style={{position:'absolute', right:5, }}
                />    
            </Pressable>       
            {expanded ? <ManageSession session={session} sessionsDispatch={sessionsDispatch}/> : null}
        </View>
    )
}