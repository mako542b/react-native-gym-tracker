import { Pressable, Text, Alert } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'


export default function ({ sessionsDispatch, sessionKey, exerciseKey }) {

    function confirmDelete () {
        Alert.alert('Confirm', 'Delete this exercise?', [
          {
            text: 'Cancel',
            onPress: () => null,
            style: 'cancel',
          },
          {text: 'OK', onPress: () => sessionsDispatch({type:'deleteExercise', payload:{sessionKey, exerciseKey}})},
        ])
    }


    return (
        <Pressable 
            style={{flexDirection:'row', alignItems:'center'}}
            onPress={confirmDelete}    
        >
            <MaterialIcons name='delete' color='#b00' size={12}/>
            <Text style={{color:'#b00', fontSize:10}}>delete exercise</Text>
        </Pressable>
    )
}