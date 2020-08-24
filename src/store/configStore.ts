import { createStore } from 'redux';
import { persistStore } from 'redux-persist';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session';
// importing reducers
import { searchResultsReducer } from './searchReducer';

const persistConfig: any = {
    key: 'searchResults',
    storage
}

const persistedReducer = persistReducer(persistConfig, searchResultsReducer);
export const store: any = createStore(persistedReducer);

// persisting store in sessionStorage
export const persistor = persistStore(store);

export default { store, persistor };
