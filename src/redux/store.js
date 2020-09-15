import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import reducerContacts from './contact/constReducer';
import reducerAuth from './auth/authReducer'
import storage from 'redux-persist/lib/storage'
import {persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from 'redux-persist'
import reducerNews from './news/newsReducer'

const authPersistConfig = {
    key:'auth',
    storage,
    whitelist:['token']
}



export const store = configureStore({
    reducer:{
        contacts:reducerContacts,
        auth:persistReducer(authPersistConfig,reducerAuth),
        news:reducerNews
    },
    middleware: getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
      })
});


export const persistor = persistStore(store)

