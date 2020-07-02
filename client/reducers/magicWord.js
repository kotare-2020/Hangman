const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_WORD':
      return action.newWord.split('')
    
    default:
      return state
  }
}

export default reducer