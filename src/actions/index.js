let nextCardId = 0

export const addCard = (name) => (
  {
    type: 'ADD_CARD',
    cardId: nextCardId++,
    name
  }
)
