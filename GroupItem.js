import { View, Button } from 'react-native'

export default function ({ group }) {

    return (
        <View style={{marginBottom: 10}}>
            <Button 
                title={group.name}
            />
        </View>
    )
}