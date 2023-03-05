import { View, Text } from 'react-native'
import SetInfo from '../Tracker/set/SetInfo'

export default function ({set, index }) {
    return (
        <View style={{flexDirection:'row', alignItems:'center', borderColor:'#333',borderWidth:1, padding:15, borderRadius:6, marginVertical:5}}>
            <Text style={{marginEnd:10, fontWeight:'bold'}}>Set {index}:</Text>
            <View style={{flex:1, marginRight:10}}>
                {set.reps && <SetInfo label='Reps' info={set.reps}/>}
                {set.weight && <SetInfo label='Weight (kg)' info={set.weight}/>}
                {set.duration && <SetInfo label='Duration (min)' info={set.duration}/>}
                {set.distance && <SetInfo label='Distance (m)' info={set.distance}/>}
                {set.others && <SetInfo label='Other' info={set.others}/>}
            </View>
        </View>
    )
}