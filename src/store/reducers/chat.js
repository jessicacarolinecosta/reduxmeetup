const initialState = {
    currentUser: {}, 
    users: [
        {
            id: 1,
            name: 'User 1'
        },
        {
            id: 2,
            name: 'User 2'
        }
    ]
}

//state -> estado antes da alteração que a action irá fazer
export default function reducer(state = initialState, action) { 
    console.log('estado anterior: ', state);
    console.log('action: ', action);

    if(action.type === "SELECT_USER") {
        return { ...state, currentUser: action.user }
    }

    return state;
}