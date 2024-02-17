import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { usersReducer } from "./slices/usersSlice";
import { albumsApi } from "./apis/albumsAPI";
import { photosApi } from "./apis/photosAPI";

const store = configureStore({
    reducer: {
        users: usersReducer,
        [albumsApi.reducerPath]: albumsApi.reducer,
        [photosApi.reducerPath]: photosApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(albumsApi.middleware)
            .concat(photosApi.middleware),
});

setupListeners(store.dispatch);

export default store;
export { fetchUsers } from "./thunks/fetchUsers";
export { addUser } from "./thunks/addUser";
export { removeUser } from "./thunks/removeUser";
export { useFetchAlbumsQuery, useAddAlbumMutation, useRemoveAlbumMutation } from "./apis/albumsAPI";
export { useFetchPhotosQuery, useAddPhotoMutation, useRemovePhotoMutation } from "./apis/photosAPI";