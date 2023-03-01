import idGenerator from '../Utils/idGenerator'


export default function(state, action) {
    const newState = [...state]
    switch(action.type){
        case 'addSession':
            const newSession = {date: action.payload.date, group: action.payload.group, key:idGenerator(),exercises:[]}
            newState.push(newSession)
            return newState

        case 'addExercise':
            console.log('lllllllllllllllllllllllllll')
            const newExercise = {
                name: action.payload.exercise, 
                key:idGenerator(), 
                sets:[]
            }
            const index = newState.findIndex(s => s.key === action.payload.key)
            if(index < 0) return newState
            const modSession = {...newState[index]}
            modSession.exercises.push(newExercise)
            newState[index] = modSession
            return newState
            

        default:
            return state
    }
}