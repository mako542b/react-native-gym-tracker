import { View, Button, Flatlist, Text, TextInput, Pressable } from 'react-native'
import SetInfo from './SetInfo'

export default function ({ set }) {
 
 
    return (
        <View style={{flexDirection:'row', alignItems:'center', borderTopColor: '#222', borderTopWidth:1, padding:5}}>
            <Text style={{marginEnd:10, fontWeight:'bold'}}>Set {set.setNumber}:</Text>
            <View style={{flex:1, marginRight:10}}>
                {set.reps && <SetInfo label='Reps' info={set.reps}/>}
                {set.duration && <SetInfo label='Duration (min)' info={set.duration}/>}
                {set.weight && <SetInfo label='Weight (kg)' info={set.weight}/>}
                {set.others && <SetInfo label='Other' info={set.others}/>}
            </View>
            <View style={{marginLeft:'auto', justifyContent:'space-around'}}>
                <View >
                    <Button title='Edit' />
                </View>
            </View>
        </View>
    )
}