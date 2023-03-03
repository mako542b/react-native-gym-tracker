import { useState } from 'react'
import { View, Text, Pressable, Modal, Button } from 'react-native'
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker'
import { MaterialIcons } from '@expo/vector-icons'



export default function({ startDate, setStartDate, endDate, setEndDate }) {

    const [modal, setModal] = useState(false)

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
        <View>
            <Pressable onPress={() => setModal(true)} style={{backgroundColor:'#6bf', paddingVertical:10, paddingHorizontal:20, borderRadius: 14, flexDirection:'row', margin:9,}}>
                <Text>filter & sort</Text>
            </Pressable>

            <Modal visible={modal}>
                <Button onPress={() => setModal(false)} title='off'/>

                <View style={{alignItems:'center', justifyContent:'center'}}>
                    <Text>Filter by date:</Text>

                    <View style={{ alignSelf:'stretch', justifyContent:'space-between', padding:10}}>
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                            <Text>Start:</Text>
                            <Pressable
                                onPress={() => showDatepicker(startDate, setStartDate)}
                                style={{padding:10}}
                            >
                                <MaterialIcons name='date-range' size={30}/>
                            </Pressable>
                            {startDate ? (
                                <View style={{flexDirection:'row',alignItems:'center'}}>
                                    <Text>{startDate.toLocaleDateString()}</Text>
                                    <Pressable 
                                        style={{padding:6}}
                                        onPress={() => setStartDate(null)}
                                    >
                                        <MaterialIcons name='clear' size={25}/>
                                    </Pressable>
                                </View>) : null}

                        </View>

                        <View style={{flexDirection:'row', alignItems:'center'}}>
                            <Text>  End:</Text>
                            <Pressable
                                onPress={() => showDatepicker(endDate, setEndDate)}
                                style={{padding:10}}
                            >
                                <MaterialIcons name='date-range' size={30}/>
                            </Pressable>
                            {endDate ? (
                                <View style={{flexDirection:'row',alignItems:'center'}}>
                                    <Text>{endDate.toLocaleDateString()}</Text>
                                    <Pressable 
                                        style={{padding:6}}
                                        onPress={() => setEndDate(null)}
                                    >
                                        <MaterialIcons name='clear' size={25}/>
                                    </Pressable>
                                </View>) : null}
                        </View>
                    </View>

                </View>

            </Modal>
        </View>
    )
}