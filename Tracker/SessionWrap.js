import AddSession from './AddSession'
import { useState } from 'react'
import { View, Pressable, Text } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'


export default function({ session, sessionsDispatch }) {

    const [expanded, setExpanded] = useState(false)

    return (
        <View style={{marginVertical:2, marginHorizontal:10}}>
            <Pressable
                onPress={() => setExpanded(prev => !prev)}
                style={{justifyContent:'space-between', flexDirection:'row', alignItems:'center', paddingVertical: 6, paddingHorizontal:10, backgroundColor:'#bce'}}
            >   
                
                <Text>{session.group}</Text>
                <Text>{session.date}</Text>
                <MaterialIcons 
                    // style={{position: 'absolute', right: 20}}
                    name={`${expanded ? 'arrow-drop-up' : 'arrow-drop-down'}`}
                    size={30}
                />    
            </Pressable> 
            {expanded ? <AddSession session={session} sessionsDispatch={sessionsDispatch}/> : null}
        </View>
    )
}