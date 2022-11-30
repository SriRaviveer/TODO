import { Injectable } from '@angular/core';
import { Todo } from '../model/Todo';
// import { Ctdo } from '../model/Todo';

import { of } from 'rxjs';
import { TodoForm } from '../components/todo-form/todo-form.component.service';
// import { TodoFormComponent } from '../components/todo-form/todo-form.component';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todosInService: Todo[];
  todoCom: Todo[] = [];
  todo: Todo;
  // ctdo: Ctdo;

  constructor(private todoForm: TodoForm) {
    this.todosInService = [
      // {
      //   id: '111',
      //   title: 'rakesh',
      //   isCompleted: true,
      //   date: new Date(),
      // },
      // {
      //   id: '222',
      //   title: 'honey',
      //   isCompleted: true,
      //   date: new Date(),
      // },
      // {
      //   id: '333',
      //   title: 'sravs',
      //   isCompleted: false,
      //   date: new Date(),
      // },
    ];
    // this.todosInService = this.todoForm.todos;
    // this.todosInService = rakesh.todos;
  }
  getTodos() {
    return of(this.todosInService);
  }

  addTodos(todo: Todo) {
    this.todosInService.push(todo);
  }



  // changeStatus(todo: Todo) {
  //   this.todosInService.map((singleTodo) => {
  //     if (singleTodo.id == todo.id) todo.isCompleted = !todo.isCompleted;
  //   });
  // }


  deleteTodo(todo: Todo) {
    const index = this.todosInService.findIndex(
      (rakesh) => rakesh.id === todo.id
    );
    this.todosInService.splice(index, 1);
  }

  delete() {
    this.todosInService = [];
    this.todoCom = [];
  }

  showTodos() {
    console.log(this.todosInService);
  }

  updateCompletedTodo() {
    this.todoCom = this.todosInService.filter(rakesh => rakesh.isCompleted);
  }

  deteleCom() {
    this.todosInService = this.todosInService.filter(res => !res.isCompleted)
    this.updateCompletedTodo();
  }


}
