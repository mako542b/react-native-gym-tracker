import { useReducer, useEffect, useRef } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function (reducerFunction, key, defaultState) {

    const [state, dispatch] = useReducer(reducerFunction, defaultState)
    const defaultStateRef = useRef(defaultState)

    useEffect(() => {
        async function getInitData() {
            let initData
            try {
                initData = await AsyncStorage.getItem(key)
                return dispatch({type: 'getInitData', payload: {data: initData ? JSON.parse(initData) : defaultState}})
             } catch (error) {
                console.log(error)
             }
        }
        getInitData()
    }, [key])

    useEffect(() => {
        async function syncData(){
            if(defaultStateRef.current === state) return
            try {
                await AsyncStorage.setItem(key, JSON.stringify(state))
            } catch (error) {
                console.log(error)
            }
        }
        syncData()
    }, [state, key])

    return [state, dispatch]

}