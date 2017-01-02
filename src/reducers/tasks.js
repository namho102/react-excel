const card = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        taskId: action.taskId,
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
          card(undefined, action)
        ]
      default:
        return state
    }
}

export default tasks
