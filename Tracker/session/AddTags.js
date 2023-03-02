import { Pressable, Text, Modal, Button, View, TextInput } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { useState } from 'react'
import TagButton from './TagButton'

export default function ({ tags, setTags }) {

    const [modal, setModal] = useState(false)
    const [newTag, setNewTag] = useState('')

    function handleTags(tag) {
        if(isAdded(tag)) {
            setTags(prev => [...prev].filter(addedTags => addedTags !== tag))
        } else {
            setTags(prev => [...prev, tag])
        }
        
    }

    function isAdded(tag) {
        return tags.indexOf(tag) >= 0
    }

    function handleNewTag() {
        if(newTag.trim() === '') return
        handleTags(newTag)
        setNewTag('')
    }

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
                    <View style={{padding:20}}>
                        <Text>Your tags:</Text>
                        <View style={{flexDirection:'row', flexWrap:'wrap', margin:10}}>
                            {tags.map(tag => (
                            <TagButton 
                                key={tag}
                                tag={tag}
                                handleTags={handleTags}
                                isAdded={isAdded(tag)}
                                toAddList={false}
                            />
                            ))}
                        </View>
                        <View style={{flexDirection:'row', alignItems:'center', marginBottom:10}}>
                            <TextInput 
                                placeholder='add here...'
                                style={{fontSize:22, padding:6, flex:1, borderColor:'red', borderWidth:1, height:'auto', marginRight:5, borderRadius:5 }}
                                value={newTag}
                                onChangeText={val => setNewTag(val)}
                            />
                            <Button 
                                title='add'
                                onPress={handleNewTag}
                            />
                        </View>
                        <Text>Or choose from popular:</Text>
                        <View style={{justifyContent:'center', flexDirection:'row', flexWrap:'wrap'}}>
                            {popularTags.map(tag => (
                                <TagButton 
                                    key={tag}
                                    tag={tag}
                                    handleTags={handleTags}
                                    isAdded={isAdded(tag)}
                                    toAddList={true}
                                />
                            ))}
                        </View>
                        <Button 
                            title='done'
                            onPress={() => setModal(false)}
                        />
                    </View>
                </Modal>

        </View>
    )
}

const popularTags = ['legs', 'arms', 'chest', 'backs', 'cardio', 'bicep', 'forearms', 'calves', 'swim', 'glutes', 'abs']