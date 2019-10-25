export const utilities = { 
    isPastDueToDo: (todo) => {
        if(todo.checked) {
            return false;
        }
        const targetDate = new Date(todo.targetDate);
        const today = new Date();
        today.setDate(today.getDate() - 1);
    
        return targetDate < today;
    }
};
