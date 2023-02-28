import { View, Button, Flatlist, Text, TextInput, Pressable } from 'react-native'


export default function () {
    return (
        <View style={{flexDirection:'row', alignItems:'center', borderTopColor: '#222', borderTopWidth:1, padding:5}}>
                    <Text style={{marginEnd:10, fontWeight:'bold'}}>Set 3:</Text>
                    <View style={{flex:1}}>
                        <View style={{flexDirection: 'row', alignItems:'center',}}>
                            <Text>Reps:</Text>
                            <TextInput 
                                style={{backgroundColor:'#fef', marginHorizontal:8, marginVertical:4, borderRadius:8, paddingHorizontal:4, flex:1}}
                                inputMode="numeric"
                            />
                        </View>
                        <View style={{flexDirection: 'row', alignItems:'center',}}>
                            <Text>Duration (min):</Text>
                            <TextInput 
                                style={{backgroundColor:'#fef', marginHorizontal:8, marginVertical:4, borderRadius:8, paddingHorizontal:4, flex:1}}
                                inputMode="numeric"
                            />
                        </View>
                        <View style={{flexDirection: 'row', alignItems:'center',}}>
                            <Text>Weight (kg):</Text>
                            <TextInput 
                                style={{backgroundColor:'#fef', marginHorizontal:8, marginVertical:4, borderRadius:8, paddingHorizontal:4, flex:1}}
                                inputMode="numeric"
                            />
                        </View>
                        <View style={{flexDirection: 'row', alignItems:'center',}}>
                            <Text>Other: </Text>
                            <TextInput 
                                style={{backgroundColor:'#fef', marginHorizontal:8, marginVertical:4, borderRadius:8, paddingHorizontal:4, flex:1}}
                            />
                        </View>
                    </View>
                    <View style={{marginLeft:'auto', justifyContent:'space-around'}}>
                        <View style={{marginBottom:5}}>
                            <Button title='Save' />
                        </View>                    
                        <View style={{marginTop:5}}>
                            <Button title='Delete' color='#f40'/>
                        </View>
                    </View>
                </View>
    )
}