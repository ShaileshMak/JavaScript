import {GET_TODOS, NEW_TODO, ADD_TODO, DELETE_TODO, MARK_DONE_TODO} from './types';

export const getTodos = () => {
    return {
        type: GET_TODOS
    }
}

export const showNewToDoForm = () => {
    return {
        type: NEW_TODO
    }
}

export const addToDo = (data) => {
    return {
        type: ADD_TODO,
        payLoad: data
    }
}

export const deleteToDo = (id) => {
    return {
        type: DELETE_TODO,
        payLoad: id
    }
}

export const markToDoDone = (id) => {
    return {
        type: MARK_DONE_TODO,
        payLoad: id
    }
}

