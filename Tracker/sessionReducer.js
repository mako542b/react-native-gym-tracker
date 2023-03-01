import idGenerator from '../Utils/idGenerator'
import immer from 'immer'


export default function(state, action) {
    // const newState = [...state]
    switch(action.type){
        case 'addSession':{
            const newSession = {date: action.payload.date, group: action.payload.group, key:idGenerator(),exercises:[]}
            const newState = immer(state, draft => {
                draft.push(newSession)
                return draft
            })
            return newState
        }

        case 'addExercise':{
            const newExercise = {
                name: action.payload.exercise, 
                key:idGenerator(), 
                sets:[],
                timestamp: new Date().getTime(),
            }
            const newState = immer(state, draft => {
                const modSession = draft.find(s => s.key === action.payload.key)
                modSession.exercises.push(newExercise)
                return draft
            })
            return newState
        }

        case 'addSet':{
            const newSet = {
                ...action.payload.setInfo, 
                key:idGenerator(), 
                timestamp: new Date().getTime(),
            }
            const newState = immer(state, draft => {
                const modSession = draft.find(s => s.key === action.payload.sessionKey)
                const modExercise = modSession.exercises.find(e => e.key === action.payload.exerciseKey)
                modExercise.sets.push(newSet)
                return draft
            })
            return newState 
        }

        case 'editSet':{
            const newState = immer(state, draft => {
                const modSession = draft.find(s => s.key === action.payload.sessionKey)
                const modExercise = modSession.exercises.find(e => e.key === action.payload.exerciseKey)
                const modSetIndex = modExercise.sets.findIndex(set => set.key === action.payload.setKey)
                modExercise.sets[modSetIndex] = {...modExercise.sets[modSetIndex], ...action.payload.setInfo}
                return draft
            })
            return newState
        }

        case 'deleteSet':{
            const newState = immer(state, draft => {
                const modSession = draft.find(s => s.key === action.payload.sessionKey)
                const modExercise = modSession.exercises.find(e => e.key === action.payload.exerciseKey)
                modExercise.sets = modExercise.sets.filter(set => set.key !== action.payload.setKey)
                return draft
            })
            return newState
        }

        default:
            return state
    }
}