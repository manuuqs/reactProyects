import { configureStore, type Middleware } from "@reduxjs/toolkit";
import usersReducer, { rollbackUserById } from "./users/slice";


// Middleware para persistir el estado en LocalStorage
const persistanceLocalStorageMiddleware: Middleware = (store) => (next) => (action) => {
    next(action);
    localStorage.setItem("_redux_state_", JSON.stringify(store.getState()));
}

// Middleware para sincronizar con la base de datos (ejemplo)
const syncWithDatabaseMiddleware: Middleware = (store) => (next) => (action) => {
    const { type, payload } = action as { type: string; payload: unknown };
    const previousState = store.getState();
    next(action);
    
    if (type === "users/deleteUserById") {
        const userToRemove = previousState.users.find((user: { id: unknown }) => user.id === payload);
        fetch(`https://jsonplaceholder.typicode.com/users/${payload}`, {
            method: "DELETE",
        })
        .then(response => {
           if (response.ok) console.log("Usuario eliminado con éxito");
        })
        .catch(() => {
            if (userToRemove) store.dispatch(rollbackUserById(userToRemove));
            console.error("Error al eliminar el usuario:");
        });
    }

}

export const store = configureStore({
    reducer: {
        users: usersReducer,
    },
    // Usamos getDefaultMiddleware para incluir los middlewares predeterminados de Redux y añadir los nuestros
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(persistanceLocalStorageMiddleware, syncWithDatabaseMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
