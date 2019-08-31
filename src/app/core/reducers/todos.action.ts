import {Action} from '@ngrx/store';
import { TodoModel } from '../models/todo.model';

export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const STAR_TODO ="STAR_TODO";

export class AddTodo implements Action {
  type = ADD_TODO;
  constructor(public payload: TodoModel) {
  }
}

export class DeleteTodo implements Action {
  readonly type = DELETE_TODO;
  constructor(public payload: TodoModel) {
  }
}

export class UpdateTodo implements Action {
  type = UPDATE_TODO;
  constructor(public payload: TodoModel) {
  }
}

export class StarTodo implements Action {
  type = STAR_TODO;
  constructor(public payload: TodoModel) {
  }
}


export type TodosActions = AddTodo | DeleteTodo | UpdateTodo | StarTodo;

