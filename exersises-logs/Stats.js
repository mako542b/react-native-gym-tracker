import { View, Button, Modal } from 'react-native'
import { useState } from 'react'
import StatsModal from './StatsModal'

export default function({ exercise }) {

    const [modal, setModal] = useState(false)

    return (
        <View>
            <Button title="see stats" onPress={() => setModal(true)}/>

            <Modal visible={modal}>
                <StatsModal exercise={exercise}/>
                <Button title="exit stats" onPress={() => setModal(false)}/>
            </Modal>
        </View>
    )
}