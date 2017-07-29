const defaultTodos = [
    {text : 'Eat Launch', id : 1},
    {text : 'Read Books', id : 2},
];

export const todoReducer = (state = defaultTodos, action) => {
    switch (action.type) {
        case 'ADD_TODO' :
            const todo = {text : action.payload, id : state.length + 1};
            return [...state, todo];
        default :
            return state;
    }
};