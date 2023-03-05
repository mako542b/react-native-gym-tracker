import { View,  ScrollView } from 'react-native'
import { useState, useMemo } from 'react'
import SessionWrap from './session/SessionWrap'
import useAsyncStorage from '../hooks/useAsyncStorage'
import sessionReducer from './sessionReducer'
import AddSession from './session/AddSession'
import FilterSession from './session/FilterSession'
import { filterAndSort } from '../Utils/filter'
import ResultsFor from './ResultsFor'

export default function ({ navigation }) {

    const [allSessions, sessionsDispatch] = useAsyncStorage(sessionReducer, 'sessions', [])

    const [addSession, setAddSession] = useState(false)
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const [tags, setTags] = useState([])
    const [byNewest, setByNewest] = useState(true)

    const isFiltered = startDate || endDate || tags?.length > 0

    const filteredSessions = useMemo(() => {
        if(!allSessions) return null
        return filterAndSort(allSessions, {startDate, endDate, tags, byNewest})
    }, [allSessions, startDate, endDate, tags, byNewest])

    
    
    return(
        <ScrollView style={{backgroundColor: '#fff'}}>
            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <AddSession sessionsDispatch={sessionsDispatch} addSession={addSession} setAddSession={setAddSession}/>
                {!addSession ? (
                    <FilterSession 
                        addSession={addSession}
                        endDate={endDate}
                        setEndDate={setEndDate}
                        startDate={startDate}
                        setStartDate={setStartDate}
                        tags={tags} 
                        setTags={setTags}
                        byNewest={byNewest}
                        setByNewest={setByNewest}
                    />
                ) : null}
            </View>
            {isFiltered ? (
                <ResultsFor 
                    startDate={startDate}
                    endDate={endDate}
                    tags={tags}
                />) : null}
            {filteredSessions?.map(session => (
                <SessionWrap 
                    session={session} 
                    key={session.key} 
                    sessionsDispatch={sessionsDispatch}
                />
            ))}

        </ScrollView>
    )
}
