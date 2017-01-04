const card = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_CARD':
      return {
        cardId: action.cardId,
        name: action.name
      }
    default:
      return state
  }
}

const cards = (state = [], action) => {
    switch (action.type) {
      case 'ADD_CARD':
        return [
          ...state,
          card(undefined, action)
        ]

      default:
        return state
    }
}

export default cards
