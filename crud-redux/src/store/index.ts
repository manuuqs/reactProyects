import { configureStore, type Middleware } from "@reduxjs/toolkit";
import usersReducer from "./users/slice";

// Middleware para persistir el estado en LocalStorage
const persistanceLocalStorageMiddleware: Middleware = (store) => (next) => (action) => {
    next(action);
    localStorage.setItem("_redux_state_", JSON.stringify(store.getState()));
}

// Middleware para sincronizar con la base de datos (ejemplo)
const syncWithDatabaseMiddleware: Middleware = (store) => (next) => (action) => {
    const { type, payload } = action;
    next(action);
    // Aquí podrías agregar la lógica para sincronizar con la base de datos
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
