import { TodoModel } from '../models/todo.model';

export interface TodosState {
  todosPage: {
    todos: TodoModel[]
  };
}