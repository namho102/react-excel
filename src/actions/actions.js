export const INCREMENT = 'INCREMENT'

export function increment(value) {
  console.log('plus ' + value)
  return {
    type: INCREMENT,
    value
  }
}
