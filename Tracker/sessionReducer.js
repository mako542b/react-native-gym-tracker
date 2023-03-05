import idGenerator from '../Utils/idGenerator'
import immer from 'immer'


export default function(state, action) {

    switch(action.type){
        case 'addSession':
            return addSession(state, action.payload)

        case 'addExercise':
            return addExercise(state, action.payload)

        case 'addSet':
            return addSet(state, action.payload)
            
        case 'editSet':
            return editSet(state, action.payload)

        case 'deleteSet':
            return deleteSet(state, action.payload)

        case 'deleteSession':
            return deleteSession(state, action.payload)

        case 'deleteExercise':
            return deleteExercise(state, action.payload)

        case 'getInitData':
            return action.payload.data

        default:
            return state
    }
}


function addSession(state, payload){
    const newSession = {
        date: payload.date,
        tags: payload.tags, 
        key:idGenerator(),
        exercises:[]
    }
    const newState = immer(state, draft => {
        draft.push(newSession)
        return draft
    })
    return newState
}

function addExercise(state, payload) {
    const newExercise = {
        name: payload.exercise, 
        key:idGenerator(), 
        sets:[],
        timestamp: new Date().getTime(),
        sessionDate: payload.sessionDate
    }
    const newState = immer(state, draft => {
        const modSession = draft.find(s => s.key === payload.sessionKey)
        modSession.exercises.push(newExercise)
        return draft
    })
    return newState
}

function addSet(state, payload) {
    const newSet = {
        ...payload.setInfo, 
        key:idGenerator(), 
        timestamp: new Date().getTime(),
    }
    const newState = immer(state, draft => {
        const modSession = draft.find(s => s.key === payload.sessionKey)
        const modExercise = modSession.exercises.find(e => e.key === payload.exerciseKey)
        modExercise.sets.push(newSet)
        return draft
    })
    return newState 
}

function editSet(state, payload) {
    const newState = immer(state, draft => {
        const modSession = draft.find(s => s.key === payload.sessionKey)
        const modExercise = modSession.exercises.find(e => e.key === payload.exerciseKey)
        const modSetIndex = modExercise.sets.findIndex(set => set.key === payload.setKey)
        modExercise.sets[modSetIndex] = {...modExercise.sets[modSetIndex], ...payload.setInfo}
        return draft
    })
    return newState
}

function deleteSet(state, payload) {
    const newState = immer(state, draft => {
        const modSession = draft.find(s => s.key === payload.sessionKey)
        const modExercise = modSession.exercises.find(e => e.key === payload.exerciseKey)
        modExercise.sets = modExercise.sets.filter(set => set.key !== payload.setKey)
        return draft
    })
    return newState
}

function deleteSession(state, payload) {
    const newState = immer(state, draft => draft.filter(session => session.key !== payload.sessionKey))
    return newState
}

function deleteExercise(state, payload) {
    const newState = immer(state, draft => {
        const modSession = draft.find(session => session.key === payload.sessionKey)
        modSession.exercises = modSession.exercises.filter(exercise => exercise.key !== payload.exerciseKey)
        return draft
    })
    return newState
}