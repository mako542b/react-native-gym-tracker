import { View, ScrollView, Button, FlatList, Text, Image, Modal } from 'react-native'
import { useState } from 'react'


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
                    <Button 
                        title='X'
                        onPress={() => setModal(false)}
                    />
                    <Text>
                        {modalInfo?.title}
                    </Text>
                    <Text style={{padding:20, lineHeight: 18}}>
                        {modalInfo?.description}
                    </Text>
                    <Image 
                        source={modalInfo?.image}
                        style={{width:'100%'}}
                        resizeMode="contain"
                    />
                </ScrollView>
            </Modal>
        </View>
    )
}