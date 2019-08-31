import { Component, OnInit, Input } from '@angular/core';
import { TodosState } from '../core/reducers/todo.state';
import { Store } from '@ngrx/store';
import { UpdateTodo, DeleteTodo, StarTodo } from '../core/reducers/todos.action';
import { TodoModel } from '../core/models/todo.model';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: TodoModel;

  constructor(private store: Store<TodosState>) { }

  ngOnInit() {
  }

  mark() {
    this.store.dispatch(new UpdateTodo(this.todo));
  }

  markStar() {
    this.store.dispatch(new StarTodo(this.todo));
  }

  deleteTodo() {
    this.store.dispatch(new DeleteTodo(this.todo));
  }

}


