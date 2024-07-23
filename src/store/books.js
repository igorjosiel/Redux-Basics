// Action Types
const ADD_BOOK = "ADD_BOOK";
const REMOVE_BOOK = "REMOVE_BOOK";
const UPDATE_BOOK = "UPDATE_BOOK";

// Actions
export const addBook = (book) => {
    return { type: ADD_BOOK, payload: { book } };
};

export const removeBook = (id) => {
    return { type: REMOVE_BOOK, payload: { id } };
};

export const updateBook = (book) => {
    return { type: UPDATE_BOOK, payload: { book } };
};

// Reducer
let id = 0;

export default function reducer(state = [], action) {
    switch (action.type) {
        case ADD_BOOK:
            return [
                ...state,
                {
                    id: ++id,
                    title: action.payload.book.title,
                    year: action.payload.book.year,
                    writer: action.payload.book.writer,
                    genre: action.payload.book.genre,
                },
            ];

        case REMOVE_BOOK:
            return state.filter((book) => book.id !== action.payload.id);

        case UPDATE_BOOK:
            return state.map((book) =>
                book.id === action.payload.book.id
                    ?   {
                            ...book,
                            title: action.payload.book.title ? action.payload.book.title : book.title,
                            year: action.payload.book.year ? action.payload.book.year : book.year,
                            writer: action.payload.book.writer ? action.payload.book.writer : book.writer,
                            genre: action.payload.book.genre ? action.payload.book.genre : book.genre,
                        }
                    :   book
            );

        default:
            return state;
    }
}
