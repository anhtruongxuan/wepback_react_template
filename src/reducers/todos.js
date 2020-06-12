import { ADD_TODO, REMOVE_TODO } from '../constants/actionTypes.js';

const initalState = []

let nextTodoId = 0

function todos(state = initalState, action) {
  switch(action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: nextTodoId++,
          text: action.text,
          completed: false,
        }
      ]
    
    case REMOVE_TODO:
      let itemRemoved = state.find(item => item.id == action.id)
      return state.filter(item => item != itemRemoved)
    
    default:
      return state;
  }
}

export default todos;