import { View, Text } from 'react-native'


export default function ({ exercise }) {

    const maxStats = exercise?.reduce((max, session) => {
        session.sets.forEach(set => {
            Object.keys(set).forEach(key => {
                if(['others', 'timestamp', 'key'].includes(key)) return
                if((!max[key] && Number(set[key])) || Number(max[key]?.value) < Number(set[key])) {
                    max[key] = {date: session.sessionDate, value: set[key]}
                }
            })
        })
        return max
    }, {})

    const valueLabels = {weight: 'kg', duration : 'min', distance: 'm'}

    return (
        <View style={{paddingBottom:10}}>
            <View style={{padding:15,}}>
                <Text style={{textAlign:'center', fontSize: 22}}>Your best achievements for</Text>
                <Text style={{textAlign:'center', fontSize: 22}}>{exercise[0]?.name}:</Text>
            </View>
            {maxStats && Object.keys(maxStats).map(entry => (
                <View key={entry} style={{alignItems:'center'}}>
                    <Text>{entry}</Text>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{padding:6}}>{maxStats[entry].date && new Date(maxStats[entry].date).toLocaleDateString()}:</Text>
                        <Text style={{padding:6}}>{maxStats[entry].value} {valueLabels[entry] || null}</Text>
                    </View>
                </View>
            ))}
        </View>
    )
}