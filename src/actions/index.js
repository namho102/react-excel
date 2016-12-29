let nextCardId = 0

export addCard = (name) => (
  {
    type: 'ADD_CARD',
    cardId: nextCardId++,
    name
  }
)
