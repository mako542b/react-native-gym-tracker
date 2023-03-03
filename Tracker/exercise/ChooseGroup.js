import { useState } from 'react'
import { View, Text, FlatList, Pressable, Button } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

export default function ({ group, setModal, setExercise }) {

    const [rollUp, setRollUp] = useState()

    return (
        <View>
            <Pressable onPress={() => setRollUp(prev => !prev)} style={{position:'relative', justifyContent:'center'}}>
                <Text style={{textAlign:'center', padding: 10, fontSize:22,backgroundColor:'#eee', borderTopColor:'#000', borderTopWidth: 1}}>{group.name}</Text>
                <MaterialIcons 
                    style={{position: 'absolute', right: 20}}
                    name={`${rollUp ? 'arrow-drop-up' : 'arrow-drop-down'}`}
                    size={30}
                />
            </Pressable>
            {rollUp && (<FlatList 
                data={group.data}
                renderItem={({ item }) => (
                    <View style={{margin:5}}>
                        <Button 
                            title={item.title}
                            onPress={() => {
                                setExercise(item.title)
                                setModal(false)
                            }}
                        />

                    </View>
                )}
            />)}
        </View>
    )
}