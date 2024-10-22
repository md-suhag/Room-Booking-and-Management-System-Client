import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import roomsReducer from "./features/rooms/roomsSlice";
import bookingReducer from "./features/booking/bookingSlice";
import { roomsApi } from "./services/roomsApi";
import { authApi } from "./services/authApi";
import authReducer from "./features/auth/authSlice";

export const store = configureStore({
  reducer: {
    roomR: roomsReducer,
    bookingR: bookingReducer,
    authR: authReducer,
    [roomsApi.reducerPath]: roomsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(roomsApi.middleware, authApi.middleware),
});

setupListeners(store.dispatch);
