import { View, Text, FlatList } from "react-native";
import TrackedSession from "./TrackedSession";

let mockSession = [{
    key:'mmmmmm',
    date: '27.02.2023',
    muscleGroup: ['legs'],
    exercises: [
        {key: '123456', name: 'Incline walk', duration: '10 minutes', sets: null},
        {key: '098767', name: 'Nut cracker', duration: null, sets: [
            {key: '765', reps: 14, weight: '16kg'}, {reps: 12, weight: '16kg'}, {reps: 10, weight:'16kg'}
        ]},
        {key: '09feasf', name: 'Squats', duration: null, sets: [
            {key: '765432' ,reps: 6, weight: '65kg'}, {reps: 5, weight: '70kg'}, {reps: 4, weight:'70kg'}
        ]},
    ]
    } , {
        key:'mmmmfefmm',
        date: '27.02.2023',
        muscleGroup: ['legs'],
        exercises: [
            {key: '123456', name: 'Incline walk', duration: '10 minutes', sets: null},
            {key: '098767', name: 'Nut cracker', duration: null, sets: [
                {key: '765', reps: 14, weight: '16kg'}, {reps: 12, weight: '16kg'}, {reps: 10, weight:'16kg'}
            ]},
            {key: '09feasf', name: 'Squats', duration: null, sets: [
                {key: '765432' ,reps: 6, weight: '65kg'}, {reps: 5, weight: '70kg'}, {reps: 4, weight:'70kg'}
            ]},
        ]
    }
]

export default function() {
    return (
        <FlatList 
            data={mockSession}
            renderItem={({ item }) => <TrackedSession session={item}/>}
        />
    )
}