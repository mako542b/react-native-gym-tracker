import { View, Text, Pressable } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';


export default function ({ date, setDate }) {

    function showDatepicker () {
        DateTimePickerAndroid.open({
            value: date,
            onChange: ((e, newDate) => setDate(newDate)),
            mode: 'date',
        });
    }

    return (
        <View style={{flexDirection:'row', alignItems:'center'}}>
            <Text style={{fontSize:20}}>Date: </Text>
            <Text style={{fontSize:20}}>{date.toLocaleDateString()} </Text>
            <Pressable
                onPress={showDatepicker}
            >
                <MaterialIcons name='date-range' size={30}/>
            </Pressable>
        </View>
    )
}