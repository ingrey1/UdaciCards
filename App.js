import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from 'react-redux'
import logger from 'redux-logger'
import {createStore, applyMiddleware} from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'
import { composeWithDevTools } from 'remote-redux-devtools';
// in-project imports
import store from './data/store.js'
import deckReducer from './reducers/index.js'



const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, deckReducer);

const composeEnhancers = composeWithDevTools({ realtime: true });


export const officialStore = createStore(persistedReducer, store, composeEnhancers()         ) 

export const persistedStore = persistStore(officialStore)


class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Provider store={officialStore}>
        <PersistGate loading={null} persistor={persistedStore} > 
            <Text>My App</Text>
         </PersistGate>
        </Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App


