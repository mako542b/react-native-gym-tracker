import { View, Text, StyleSheet, Button } from 'react-native'

export default function ({ navigation }) {

    return(
        <View>
            <Button 
                title='Previous workouts'
                onPress={() => navigation.navigate('Your sessions')}
            />
            <Button
                title='Add session'
                onPress={() => navigation.navigate('Add session')}
            />
        </View>
    )
}