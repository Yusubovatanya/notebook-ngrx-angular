import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodosState } from '../core/reducers/todo.state';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { TodoModel } from '../core/models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todosState$: Observable<TodoModel[]>;

  constructor(private store: Store<TodosState>) { }

  ngOnInit() {
    this.todosState$ = this.store.select('todosPage').pipe(
      pluck('todos')
    )
  }

}
