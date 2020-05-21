export const formDataReducer = (state, action) => {
    switch (action.type) {
        case 'SET_STATE':
            return [...state, {
                title: action.book.title,
                author: action.book.author,
                id: uuid()
            }
            ]
        case 'SUBMIT_FORM':
            return state.filter(book => book.id !== action.id);
        default:
            return state;
    }
} 