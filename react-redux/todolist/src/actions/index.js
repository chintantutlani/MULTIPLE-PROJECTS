export const addTodo =(data)=>{
    return {
        type: "ADDTODO",
        payload: {
            id: new Date().getTime().toString(),
            data:data
        }
    }
}


export const deleteTodo =(id)=>{
    
    return {
        type: "DELETETODO",
        id
    }
}

export const removeTodo =()=>{
    return {
        type: "REMOVETODO"
    }
}

export const VisibilityFilters = ()=>{
    return {
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
    SHOW_ALL: 'SHOW_ALL'
    }
}