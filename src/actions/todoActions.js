import {GET_TODOS, GET_TODOS_STATUS_COUNT, SHOW_TODOS_STATUS_COUNT, NEW_TODO, ADD_TODO, DELETE_TODO, EDIT_TODO, EDITED_TODO, MARK_DONE_TODO} from './types';

export const getTodos = () => {
    return {
        type: GET_TODOS
    }
}

export const getToDosStatusCount = () => {
    return {
        type: GET_TODOS_STATUS_COUNT
    }
}

export const showToDosStatusCount = () => {
    return {
        type: SHOW_TODOS_STATUS_COUNT
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

export const editToDo = (id) => {
    return {
        type: EDIT_TODO,
        payLoad: id
    }
}

export const editedToDo = (data) => {
    return {
        type: EDITED_TODO,
        payLoad: data
    }
}

export const markToDoDone = (id) => {
    return {
        type: MARK_DONE_TODO,
        payLoad: id
    }
}

