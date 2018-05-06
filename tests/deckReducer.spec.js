import {
  ADD_DECK,
  DELETE_DECK,
  ADD_CARD,
  addDeck,
  deleteDeck,
  addCard
} from '../actions/index.js';
import deckReducer from '../reducers/index.js';
import store from '../data/store.js';
const deepCopy = require('deep-copy');

let initialStore = deepCopy(store);

let questions1 = {
  question: 'q1',
  answer: 'a1'
};

let questions2 = {
  question: 'q2',
  answer: 'a2'
};

let deck2 = {
  title: 'd2',
  questions: []
};

let deck1 = {
  title: 'd1',
  questions: [questions1]
};

describe('testing action creators for Deck Reducer', () => {
  it('ADD_DECK creator should create an ADD_DECK action object', () => {
    const testResult = addDeck(deck1);
    const expectedResult = { type: ADD_DECK, deck: deck1 };
    expect(testResult).toEqual(expectedResult);
  });

  it('DELETE_DECK creator should create a DELETE_DECK action object', () => {
    const testResult = deleteDeck(deck1.title);
    const expectedResult = { type: DELETE_DECK, title: deck1.title };
    expect(testResult).toEqual(expectedResult);
  });

  it('ADD_CARD creator should create an ADD_CARD action object', () => {
    const testResult = addCard(questions2, deck1.title);
    let expectedResult = {
      type: ADD_CARD,
      title: deck1.title,
      cardInfo: questions2
    };
    expect(testResult).toEqual(expectedResult);
  });
});

describe('testing Deck Reducer', () => {
  it('ADD_DECK action should update store without mutation', () => {
    let expectedResult = deepCopy(initialStore);
    let testStore = deepCopy(initialStore);
    let testAction = addDeck(deck1);
    let testResult = deckReducer(testStore, testAction);
    expectedResult[deck1['title']] = deck1;
    expect(testResult).toEqual(expectedResult);
    expect(testStore).toEqual(initialStore);
  });

  it('DELETE_DECK action should update store without mutation', () => {
    let expectedResult = deepCopy(initialStore);
    let testStore = deepCopy(initialStore);
    let testAction = deleteDeck('philosophy1');
    let testResult = deckReducer(testStore, testAction);
    delete expectedResult['philosophy1'];
    expect(testResult).toEqual(expectedResult);
    expect(testStore).toEqual(initialStore);
  });

  it('ADD_CARD action should update store without mutation', () => {
    let expectedResult = deepCopy(initialStore);
    let testStore = deepCopy(initialStore);
    let testAction = addCard(questions1, 'philosophy1');
    let testResult = deckReducer(testStore, testAction);
    expectedResult['philosophy1'].questions = expectedResult[
      'philosophy1'
    ].questions.concat(questions1);
    expect(testResult).toEqual(expectedResult);
    expect(testStore).toEqual(initialStore);
  });
});
