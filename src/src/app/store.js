import { configureStore } from '@reduxjs/toolkit';
import reducers from '../../views/features/reducers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers } from '@reduxjs/toolkit';

import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import persistStore from 'redux-persist/lib/persistStore';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};
const rootReducer = combineReducers(reducers);


const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);
