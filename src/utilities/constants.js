export const statusKeys = { 
    totalToDos: 'Total To Do', 
    completedToDos: 'Completed To Do', 
    pendingToDos: 'Pending To Do', 
    overDueToDos: 'Over Due To Do'
};

export const filterOptions = [
    {label: 'All', value:'ALL'},
    {label: 'Completed', value:'COMPLETED'},
    {label: 'Pendings', value:'PENDING'},
    {label: 'Past Dues', value:'PAST_DUES'}
]

export const filterNames = {
    ALL: 'ALL', 
    COMPLETED: 'COMPLETED', 
    PENDING: 'PENDING', 
    PAST_DUES: 'PAST_DUES'
}

export const orderingOptions = [
    {label: 'Ascending', value:'ASCENDING'},
    {label: 'Deescending', value:'DESCENDING'},
    {label: 'Latest', value:'LATEST'},
    {label: 'Oldest', value:'OLDEST'}
]

export const orderingName = {
    ASCENDING: 'ASCENDING', 
    DESCENDING: 'DESCENDING', 
    LATEST: 'LATEST', 
    OLDEST: 'OLDEST'
}
