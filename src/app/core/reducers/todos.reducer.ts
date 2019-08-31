import { TodosActions, ADD_TODO, DELETE_TODO, UPDATE_TODO, STAR_TODO } from './todos.action';
import { TodoModel } from '../models/todo.model';


// mokodata
const TODO_MOCK: TodoModel[] = [
  { id: 1, text: 'Изучить HTML/CSS', status: true, starStatus: true },
  { id: 2, text: 'Изучить Git', status: false, starStatus: false },
  { id: 3, text: 'Изучить Java Script', status: true, starStatus: true },
  { id: 4, text: 'Изучить Angular', status: false, starStatus: true },
  { id: 5, text: 'Изучить Jquery', status: false, starStatus: false },
  { id: 6, text: 'Изучить NgRx', status: false, starStatus: false },
  { id: 7, text: 'Изучить Gulp', status: true, starStatus: false },
  { id: 8, text: 'Изучить Webpack', status: false, starStatus: true },
 
];




// initial state
const initState = {
  todos: TODO_MOCK,
}

export function todoReducer(state = initState, action: TodosActions) {

  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: [
          ...state.todos.filter(todo => todo.id !== action.payload.id)
        ]
      };
    case UPDATE_TODO:
      const idx = state.todos.findIndex(todo => {
        return todo.id === action.payload.id;
      });
      state.todos[idx].status = !state.todos[idx].status;
      return {
        ...state
      };
    case STAR_TODO:
      const idStar = state.todos.findIndex(todo => {
        return todo.id === action.payload.id;
      });
      state.todos[idStar].starStatus = !state.todos[idStar].starStatus;
      return {
        ...state
      };
    default:
      return state;
  }

};
