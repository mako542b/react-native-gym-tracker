import { Pressable, Text, Alert } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'


export default function ({ sessionsDispatch, sessionKey }) {

    function confirmDelete () {
        Alert.alert('Confirm', 'Delete this session?', [
          {
            text: 'Cancel',
            onPress: () => null,
            style: 'cancel',
          },
          {text: 'OK', onPress: () => sessionsDispatch({type:'deleteSession', payload:{sessionKey}})},
        ])
    }


    return (
        <Pressable 
            style={{flexDirection:'row', alignItems:'center'}}
            onPress={confirmDelete}    
        >
            <MaterialIcons name='delete' color='#d00' size={15}/>
            <Text style={{color:'#d00', fontSize:12}}>delete session</Text>
        </Pressable>
    )
}