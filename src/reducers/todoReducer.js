import {GET_TODOS, NEW_TODO, ADD_TODO, DELETE_TODO, MARK_DONE_TODO} from '../actions/types'

const initialState = {
    toDoList: [
        {name: 'Todo 1', index: 0, targetDate: '2019-10-30', checked: false},
        {name: 'Todo 2', index: 1, targetDate: '2019-10-31', checked: true},
        {name: 'Todo 3', index: 2, targetDate: '2019-10-28', checked: true},
        {name: 'Movie Show', index: 3, targetDate: '2019-11-2', checked: false}
    ],
    showNewToDo: false
}

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_TODOS: 
            return {
                ...state
            }
        case NEW_TODO: 
            return {
                ...state,
                showNewToDo: true
            }
        case ADD_TODO: 
            const newToDo = [{
                name: action.payLoad.toDoValue,
                targetDate: action.payLoad.targetDate,
                index: state.toDoList.length,
                checked: false,
            }];
            return {
                ...state,
                toDoList: [...state.toDoList, ...newToDo],
                showNewToDo: false
            }
        case DELETE_TODO:
            return {
                ...state,
                toDoList: state.toDoList.filter(toDo => toDo.index !== action.payLoad)
            }
        case MARK_DONE_TODO: 
            return {
                ...state,
                toDoList: state.toDoList.map((todo, index) => ({
                    ...todo, 
                    checked: action.payLoad === index ? !todo.checked : todo.checked 
                }))
            }
        default:
            return state
    }
}