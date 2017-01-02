let nextCardId = 0
let nextTaskId = 0

export const addCard = (name) => (
  {
    type: 'ADD_CARD',
    cardId: nextCardId++,
    name
  }
)

export const addTask = (text) => {
  return {
    type: 'ADD_TASK',
    taskId: nextTaskId++,
    text
  }
}
