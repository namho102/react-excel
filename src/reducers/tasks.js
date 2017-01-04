const task = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        taskId: action.taskId++,
        cardId: action.cardId,
        text: action.text
      }
    default:
      return state
  }
}

const tasks = (state = [], action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return [
          ...state,
          task(undefined, action)
        ]
        
      case 'MOVE_TASK':
        return  state.map(item => {
          if(item.taskId == action.taskId)
            item.cardId = action.cardId
          return item
        })

      default:
        return state
    }
}

export default tasks
