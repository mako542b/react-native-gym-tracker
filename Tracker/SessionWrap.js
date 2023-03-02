import AddSession from './AddSession'
import { useState } from 'react'
import { View, Pressable, Text } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'


export default function({ session, sessionsDispatch }) {

    const [expanded, setExpanded] = useState(false)

    return (
        <View style={{marginVertical:5, backgroundColor:'#dd7', borderRadius:10}}>
            <Pressable
                onPress={() => setExpanded(prev => !prev)}
                style={{ alignItems:'center', paddingVertical: 6, paddingHorizontal:30, justifyContent:'center'}}
            >   
                
                <Text style={{fontSize:25, fontWeight:'bold', color:'#722'}}>{session.date}</Text>
                {session?.group && <Text>{session.group}</Text>}
                <MaterialIcons 
                    name={`${expanded ? 'arrow-drop-up' : 'arrow-drop-down'}`}
                    size={30}
                    style={{position:'absolute', right:5, }}
                />    
            </Pressable> 
            {expanded ? <AddSession session={session} sessionsDispatch={sessionsDispatch}/> : null}
        </View>
    )
}