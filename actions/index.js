export const ADD_DECK = 'ADD_DECK';
export const DELETE_DECK = 'DELETE_DECK';
export const ADD_CARD = 'ADD_CARD';

export const addDeck = newDeck => {
  return {
    type: ADD_DECK,
    deck: newDeck
  };
};

export const deleteDeck = deckId => {
  return {
    type: DELETE_DECK,
    title: deckId
  };
};

export const addCard = (cardInfo, deckId) => {
  return {
    type: ADD_CARD,
    cardInfo: cardInfo,
    title: deckId
  };
};
