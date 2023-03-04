import { View, Text } from "react-native"

export default function({ startDate, endDate, tags }) {
    return (
        <View style={{flexDirection:'row', alignItems:'center'}}>
            <Text style={{flex:1, textAlign:'right', fontSize:20}}>Filters:</Text>
            <View style={{alignItems:'flex-end', flex:2, marginRight:15}}>
                {(startDate || endDate) && (
                    <View style={{flexDirection:'row'}}>
                        {startDate ? (
                            <Text style={{padding:5}}>from {startDate.toLocaleDateString()}</Text>
                        ) : null}
                        {endDate ? (
                            <Text style={{padding:5}}>to {endDate.toLocaleDateString()}</Text>
                        ) : null}
                    </View>
                )}
                {tags?.length > 0 ? (
                    <View style={{flexDirection:'row', flexWrap:'wrap', justifyContent:'flex-end'}}>
                        {tags.map(tag => (
                            <Text key={tag} style={{padding:5}}>#{tag}</Text>
                        ))}
                    </View>
                ) : null}
            </View>
        </View>
    )
}