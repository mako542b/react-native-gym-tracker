import { Pressable, Text, Modal, Button, View, TextInput } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { useState } from 'react'
import TagsPicker from './TagsPicker'

export default function ({ tags, setTags }) {

    const [modal, setModal] = useState(false)



    return (
        <View>
            <View style={{flexDirection:'row'}}>
                <Pressable 
                    style={{flexDirection:'row', alignItems:'center'}}
                    onPress={() => setModal(true)}
                >
                    <Text style={{fontSize:20}}>Tags: </Text>
                    <MaterialIcons name='add' size={30}/>
                </Pressable>
                <View style={{flexDirection:'row', flexWrap:'wrap', width:'50%'}}>
                    {tags?.length > 0 && tags.map(tag => (
                        <Text style={{padding:6}} key={tag}>
                            {tag}
                        </Text>
                    ))}
                </View>
            </View>

                <Modal visible={modal}>
                    <TagsPicker 
                        tags={tags}
                        setTags={setTags}
                        setModal={setModal}
                    />
                    <Button 
                        title='done'
                        onPress={() => setModal(false)}
                    />
                </Modal>

        </View>
    )
}
