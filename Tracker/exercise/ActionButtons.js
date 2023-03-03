import { View, Button } from 'react-native'
 
export default function({ setModal, addExercise }) {
    return (
        <View style={{flexDirection: 'row', justifyContent:'space-between', width:'100%'}}>
            <Button 
                title="Choose from popular"
                onPress={() => setModal(true)}
            />
            <Button 
                title="Add"
                onPress={addExercise}
            />
        </View>
    )
}