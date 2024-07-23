// Action Types
const ADD_USER = "ADD_USER";
const REMOVE_USER = "REMOVE_USER";
const UPDATE_USER = "UPDATE_USER";
const LOG_IN_USER = "LOG_IN_USER";
const LOG_OUT_USER = "LOG_OUT_USER";

// Actions
export const addUser = (user) => {
    return { type: ADD_USER, payload: { user } };
};

export const removeUser = (id) => {
    return { type: REMOVE_USER, payload: { id } };
};

export const updateUser = (user) => {
    return { type: UPDATE_USER, payload: { user } };
};

export const logInUser = (id) => {
    return { type: LOG_IN_USER, payload: { id } };
};

export const logOutUser = (id) => {
    return { type: LOG_OUT_USER, payload: { id } };
};

// Reducer
let id = 0;

export default function reducer(state = [], action) {
    switch (action.type) {
        case ADD_USER:
            return [
                ...state,
                {
                    id: ++id,
                    name: action.payload.user.name,
                    logedIn: action.payload.user.logedIn,
                },
            ];

        case REMOVE_USER:
            return state.filter((user) => user.id !== action.payload.id);

        case UPDATE_USER:
            return state.map((user) =>
                user.id === action.payload.user.id
                    ?   {
                            ...user,
                            name: action.payload.user.name ? action.payload.user.name : user.name,
                            logedIn: action.payload.user.logedIn ? action.payload.user.logedIn : user.logedIn,
                        }
                    :   user
            );
        
        case LOG_IN_USER:
            return state.map((user) =>
                user.id === action.payload.id
                    ?   {
                            ...user,
                            logedIn: true,
                        }
                    :   user
            );

        case LOG_OUT_USER:
            return state.map((user) =>
                user.id === action.payload.id
                    ?   {
                            ...user,
                            logedIn: false,
                        }
                    :   user
            );

        default:
            return state;
    }
}
