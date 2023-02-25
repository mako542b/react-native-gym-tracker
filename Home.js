import { View, Text, Button, Image, StyleSheet } from 'react-native'

export default function ({ navigation }) {

    function navigate(route) {
        navigation.navigate(route)
    }
    return(
        <View>
            <Image 
                source={require('./assets/gym-landing.jpg')}
                style={{width:'100%', height: '60%'}}
            />
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button title='Exercises' onPress={navigate.bind(null, 'Exercises')}/>
                </View>
                <View style={styles.button}>
                    <Button title='Equipment' onPress={navigate.bind(null, 'Equipment')}/>
                </View>
                <View style={styles.button}>
                    <Button title='Gym Tracker' onPress={navigate.bind(null, 'GymTracker')}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonContainer: {
        padding: 10,
    },
    button: {
        marginBottom:10
    }
  });

