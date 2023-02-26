import { View, ScrollView, Button, FlatList, Text, Image, Modal, Pressable } from 'react-native'
import { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons';

export default function ({ route }) {

    const [modal, setModal] = useState(false)
    const [modalInfo, setModalInfo] = useState(null)
    const {data: exercises} = route.params

    function handleModal(item) {
        setModal(true)
        setModalInfo(item)
    }

    return (
        <View>
            <FlatList 
                data={exercises}
                renderItem={({ item }) => (
                    <View style={{marginBottom:25}}>
                        <Image 
                            source={item.image}
                            style={{width: '100%', height: 250}}
                        />
                        <Button 
                            title={item.title}
                            onPress={() => handleModal(item)}
                        />
                    </View>
                )}
            />
            <Modal visible={modal}>
                <ScrollView>
                    <Pressable onPress={() => setModal(false)} style={{position:'relative', justifyContent:'center'}}>
                        <Text style={{padding: 10, textAlign: 'center', backgroundColor: '#bbb', fontSize:20}}>
                            {modalInfo?.title}
                        </Text>
                        <MaterialIcons name='close' style={{position:'absolute', left:10 }} size={20}/>
                    </Pressable>
                    <Text style={{padding:20, lineHeight: 18, textAlign:'right'}}>
                        {modalInfo?.description}
                    </Text>
                    <Image 
                        source={modalInfo?.image}
                        style={{
                            width:'100%', 
                            resizeMode:"contain",
                            maxHeight: 400
                        }}
                    />
                </ScrollView>
            </Modal>
        </View>
    )
}