import { View, Button } from 'react-native'


export default function({ sessionsDispatch, setAddSession, date, group }) {
    return (
        <View style={{flexDirection:'row', alignSelf:'flex-end'}}>
            <View style={{marginRight:15}}>
                <Button 
                    title='Add'
                    onPress={() => {
                        sessionsDispatch({type:'addSession', payload: {date, group}})
                        setAddSession(false)
                    }}
                    color='#00f'
                    style={{margin:10}}
                />
            </View>
                <Button 
                    title='cancel'
                    onPress={() => setAddSession(false)}
                    color='#a55'
                />
        </View>
    )
}