import { View, Button } from 'react-native'

export default function({ sessionsDispatch, setAddSession, date, tags, setTags }) {
    return (
        <View style={{flexDirection:'row', alignSelf:'flex-end'}}>
            <View style={{marginRight:15}}>
                <Button 
                    title='Add'
                    onPress={() => {
                        sessionsDispatch({type:'addSession', payload: {date: date.getTime(), tags}})
                        setAddSession(false)
                        setTags([])
                    }}
                    color='#00f'
                    style={{margin:10}}
                />
            </View>
                <Button 
                    title='cancel'
                    onPress={() => {
                        setAddSession(false)
                        setTags([])
                    }}
                    color='#a55'
                />
        </View>
    )
}