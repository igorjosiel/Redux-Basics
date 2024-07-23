import store from "./store/configureStore";
import { addBook, removeBook, updateBook } from "./store/books";
import { addUser, logInUser, logOutUser } from './store/users';

const unsubscribe = store.subscribe(() => {
    console.log("Updated", store.getState());
});

store.dispatch(addUser({
    name: "Francielle de Paula",
    logedIn: false,
}));

store.dispatch(logInUser(1));
store.dispatch(logOutUser(1));

store.dispatch(addBook({
    title: "The Walking Dead",
    year: 2020,
    writer: "Fulano de tal",
    genre: ["Terror", "Action"],
}));
store.dispatch(addBook({
    title: "O Amor Perfeito",
    year: 2016,
    writer: "Rosita de Sá",
    genre: ["Romance"],
}));
console.log(store.getState());

unsubscribe();
store.dispatch(updateBook({
    id: 2,
    title: "O Amor Imperfeito",
    year: 2017,
    writer: "Rosita Abreu",
    genre: ["Romance"],
}));

store.dispatch(removeBook(1));
console.log(store.getState());
