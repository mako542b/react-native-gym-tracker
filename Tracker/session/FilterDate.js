import { Pressable, Text, View } from 'react-native'
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker'
import { MaterialIcons } from '@expo/vector-icons'


export default function ({ date, dateSetter, label }) {

    function showDatepicker (date, dateSetter) {
        DateTimePickerAndroid.open({
            value: date ? date : new Date(),
            onChange: ((e, newDate) => {
                if(e.type === 'dismissed') return
                dateSetter(newDate)
            }),
            mode: 'date',
        });
    }

    return (
        <View style={{flexDirection:'row', alignItems:'center'}}>
            <Text style={{width:40}}>{label}</Text>
            <Pressable
                onPress={() => showDatepicker(date, dateSetter)}
                style={{padding:10}}
            >
                <MaterialIcons name='date-range' size={30}/>
            </Pressable>
            {date ? (
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Text>{date.toLocaleDateString(undefined,{weekday: 'long', day: '2-digit', month: '2-digit', year:'numeric'})}</Text>
                    <Pressable 
                        style={{padding:6}}
                        onPress={() => dateSetter(null)}
                    >
                        <MaterialIcons name='clear' size={25}/>
                    </Pressable>
                </View>) : null}
        </View>
    )
}