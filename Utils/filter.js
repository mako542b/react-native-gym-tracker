export function filterAndSort(array, {startDate, endDate, tags, byNewest}) {
    let filteredSessions = filterByDate(array, startDate, endDate)
    filteredSessions = filterByTags(filteredSessions, tags)
    filteredSessions = sortByDate(filteredSessions, byNewest)    
    return filteredSessions
}

function sortByDate(array, byNewest) {
    return array.sort((a,b) => {
        if(byNewest){
            return b.date - a.date
        } else {
            return a.date - b.date
        }
    })
}

function filterByDate(array, startDate, endDate) {
    let filteredSessions = [...array]
    if(startDate) {
        filteredSessions = filteredSessions.filter(session => session.date >= startDate - 1000*60*60*24)
    }
    if(endDate) {
        filteredSessions = filteredSessions.filter(session => session.date <= endDate)
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