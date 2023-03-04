export function filterAndSort(array, {startDate, endDate, tags, byNewest}) {
    let filteredSessions = filterByDate(array, startDate, endDate)
    filteredSessions = filterByTags(filteredSessions, tags)
    filteredSessions = sortByDate(filteredSessions, byNewest)    
    return filteredSessions
}

function sortByDate(array, byNewest) {
    return array.sort((a,b) => {
        if(byNewest){
            return b.date.getTime() - a.date.getTime()
        } else {
            return a.date.getTime() - b.date.getTime()
        }
    })
}

function filterByDate(array, startDate, endDate) {
    let filteredSessions = [...array]
    if(startDate) {
        filteredSessions = filteredSessions.filter(session => session.date.getTime() >= startDate.getTime() - 1000*60*60*24)
    }
    if(endDate) {
        filteredSessions = filteredSessions.filter(session => session.date.getTime() <= endDate.getTime())
    }
    return filteredSessions
}

function filterByTags (array, tags) {
    if(tags.length === 0) return array

    let newArray = array.filter(session => {
        return tags.some(tag => {
            let regex = new RegExp(tag, 'gi')
            return session.tags.some(sessionTag => regex.test(sessionTag))
        })
    })
    return newArray
}