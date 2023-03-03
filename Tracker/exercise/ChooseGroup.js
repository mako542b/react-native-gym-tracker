import { useState } from 'react'
import { View, Text, Pressable } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';


export default function ({ group, setModal, setExercise }) {

    const [rollUp, setRollUp] = useState()

    return (
        <View style={{borderColor:'#888', borderWidth: 1}}>
            <Pressable onPress={() => setRollUp(prev => !prev)} style={{position:'relative', justifyContent:'center', }}>
                <Text style={{textAlign:'center', padding: 10, fontSize:22, }}>{group.name}</Text>
                <MaterialIcons 
                    style={{position: 'absolute', right: 20}}
                    name={`${rollUp ? 'arrow-drop-up' : 'arrow-drop-down'}`}
                    size={30}
                />
            </Pressable>
            {rollUp && group?.data.map(item => (
                <Pressable
                    style={{alignItems:'center', padding:7,}}
                    key={item}
                    onPress={() => {
                        setExercise(item)
                        setModal(false)
                    }}
                >
                    <Text style={{color:'#822'}}>{item}</Text>
                </Pressable>
            ))}

        </View>
    )
}