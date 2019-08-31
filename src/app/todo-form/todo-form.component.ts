import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddTodo } from '../core/reducers/todos.action';
import { TodosState } from '../core/reducers/todo.state';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  value: string = "";
  constructor(private store: Store<TodosState>) { }

  ngOnInit() {
  }

  onAddTodo() {
    if (this.value === '') {
      return;
    }
    this.store.dispatch(new AddTodo(this.createTodo()));
    this.value = '';
  }

  createTodo() {
    return {
      id: Date.now(),
      text: this.value,
      status: false,
      starStatus: false
    }
  }
}
