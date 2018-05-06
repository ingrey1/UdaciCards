import {
  ADD_DECK,
  DELETE_DECK,
  ADD_CARD,
  addDeck,
  deleteDeck,
  addCard
} from '../actions/index.js';
import store from '../data/store.js';
const deepCopy = require('deep-copy');

const deckReducer = (state = store, action) => {
  switch (action.type) {
    case ADD_DECK:
      return {
        ...state,
        [action['deck']['title']]: action['deck']
      };

    case DELETE_DECK:
      let copiedState = deepCopy(state);

      delete copiedState[action.title];

      return copiedState;

    case ADD_CARD:
      return {
        ...state,
        [action['title']]: {
          ...state[action['title']],
          questions: state[action['title']]['questions'].concat({
            question: action['cardInfo']['question'],
            answer: action['cardInfo']['answer']
          })
        }
      };

    default:
      console.log('default case triggered');

      return state;
  }
};

export default deckReducer;
