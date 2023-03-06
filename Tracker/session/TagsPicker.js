import { Text, Button, View, TextInput } from 'react-native'
import { useState } from 'react'
import TagButton from './TagButton'
import popularTags from '../../data/popularTags'



export default function ({ tags, setTags }) {

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
        <View style={{padding:20}}>
            <Text>Your tags:</Text>
            <View style={{flexDirection:'row', flexWrap:'wrap', margin:10}}>
                {tags?.length > 0 && tags.map(tag => (
                    <TagButton 
                        key={tag}
                        tag={tag}
                        handleTags={handleTags}
                        isAdded={isAdded(tag)}
                        toAddList={false}
                    />
                ))}
            </View>

            <View style={{flexDirection:'row', justifyContent:'space-between', margin:10,}}>
                <TextInput 
                    placeholder='add here...'
                    style={{fontSize:16, borderColor:'#222', borderWidth:1, borderRadius:6, paddingHorizontal:6, flex:1}}
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
            
        </View>
    )
}