import { configureStore } from "@reduxjs/toolkit";
import ProfileReducer from "./profile";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, ProfileReducer);

let store = configureStore({
  reducer: {
    profile: persistedReducer,
  },
});
let persistor = persistStore(store);
export { store, persistor };
