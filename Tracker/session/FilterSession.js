import { useState } from 'react'
import { View, Text, Pressable, Modal, Button, TextInput, ScrollView } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import FilterDate from './FilterDate'
import TagsPicker from './TagsPicker'


export default function({ startDate, setStartDate, endDate, setEndDate, tags, setTags, byNewest, setByNewest }) {

    const [modal, setModal] = useState(false)


    return (
        <View>
            <Pressable onPress={() => setModal(true)} style={{backgroundColor:'#6bf', paddingVertical:10, paddingHorizontal:20, borderRadius: 14, flexDirection:'row', margin:9,}}>
                <Text>filter & sort</Text>
            </Pressable>

            <Modal visible={modal}>
                <View style={{height:'100%'}}>
                    <ScrollView>
                        <View style={{alignItems:'center', justifyContent:'center', padding:10}}>
                            <Text style={{fontSize:20}}>Filter by date:</Text>
                            <View style={{ alignSelf:'stretch', justifyContent:'space-between', paddingHorizontal:10}}>
                                <FilterDate date={startDate} dateSetter={setStartDate} label='start:'/>
                                <FilterDate date={endDate} dateSetter={setEndDate} label='end:'/>
                            </View>
                        </View>
                        <View style={{alignItems:'center', justifyContent:'center', padding:10}}>
                            <Text style={{fontSize:20}}>Filter by tags:</Text>
                            <TagsPicker tags={tags} setTags={setTags}/>
                        </View>
                        <Text style={{fontSize:20, alignSelf:'center'}}>Sort by:</Text>
                        <View style={{flexDirection: 'row', justifyContent:'space-evenly'}}>
                            <Pressable
                                onPress={() => setByNewest(true)}
                                style={{flexDirection:'row', alignItems:'center',  padding:20}}
                            >
                                <Text style={{fontSize:17}}>Newest </Text>
                                { byNewest ? <MaterialIcons name='check' size={22}/> : null}
                            </Pressable>
                            <Pressable
                                onPress={() => setByNewest(false)}
                                style={{flexDirection:'row', alignItems:'center',  padding:20}}
                            >
                                { !byNewest ? <MaterialIcons name='check' size={22}/> : null}
                                <Text style={{fontSize:17}}> Oldest</Text>
                            </Pressable>
                        </View>
                    </ScrollView>
                        <View style={{marginTop:'auto'}}>
                            <Button onPress={() => setModal(false)} title='submit'/>
                        </View>
                </View>
            </Modal>
        </View>
    )
}