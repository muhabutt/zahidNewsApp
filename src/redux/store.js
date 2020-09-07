import AsyncStorage from '@react-native-community/async-storage'
import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'

import thunk from 'redux-thunk'

import rootReducer from './Reducers'

const initialState = {}

// Middleware: Redux Persist Config
const persistConfig = {
	// Root
	key: 'root',
	// Storage Method (React Native)
	storage: AsyncStorage,
	// Whitelist (Save Specific Reducers)
	whitelist: [
		'NewsReducer',
	],
	// Blacklist (Don't Save Specific Reducers)
	blacklist: [],
}

/* root reducer will be persisted , meaning reducers which are in whitelist will be store in local storage */
const pReducer = persistReducer(persistConfig, rootReducer)

/* all middleware object */
const middleware = [thunk]

const store = createStore(pReducer, applyMiddleware(...middleware))

/* while store is persisted */
const persistor = persistStore(store)

export  {
	persistor,
	store
}
