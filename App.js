import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
import { composeWithDevTools } from 'remote-redux-devtools';
import { StackNavigator } from 'react-navigation';
import { setLocalNotification } from './utils/helpers.js';
// in-project imports
import store from './data/store.js';
import deckReducer from './reducers/index.js';
import Quiz from './components/Quiz';
import Deck from './components/Deck';
import Decks from './components/Decks';
import AddDeck from './components/AddDeck';
import AddCard from './components/AddCard';

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, deckReducer);

const composeEnhancers = composeWithDevTools({ realtime: true });

export const officialStore = createStore(
  persistedReducer,
  store,
  composeEnhancers()
);

export const persistedStore = persistStore(officialStore);

const Navigation = StackNavigator({
  Decks: { screen: Decks },

  Deck: {
    screen: Deck,
    navigationOptions: ({ navigation }) => ({
      title: 'Deck'
    })
  },

  Quiz: {
    screen: Quiz,
    navigationOptions: ({ navigation }) => ({
      title: 'Quiz'
    })
  },

  AddDeck: {
    screen: AddDeck,
    navigationOptions: ({ navigation }) => ({
      title: 'Add Deck'
    })
  },

  AddCard: {
    screen: AddCard,
    navigationOptions: ({ navigation }) => ({
      title: 'Add Card'
    })
  }
});

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Provider store={officialStore}>
          <PersistGate loading={null} persistor={persistedStore}>
            <Navigation />
          </PersistGate>
        </Provider>
      </View>
    );
  }
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});

export default App;
