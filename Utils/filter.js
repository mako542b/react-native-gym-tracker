export function filterByDate(array, {startDate, endDate}) {
    let filteredSessions = [...array]
    if(startDate) {
        filteredSessions = filteredSessions.filter(session => session.date.getTime() >= startDate.getTime() - 1000*60*60*24)
    }
    if(endDate) {
        filteredSessions = filteredSessions.filter(session => session.date.getTime() <= endDate.getTime())
    }

    return filteredSessions
}