import { Injectable } from '@angular/core';
import { Todo } from 'src/app/model/Todo';

@Injectable({
  providedIn: 'root',
})
export class TodoForm {
  todos: Todo[] = [];
  constructor() {
    this.todos = [
      {
        id: '111',
        title: 'rakesh',
        isCompleted: true,
        date: new Date(),
      },
      {
        id: '222',
        title: 'honey',
        isCompleted: true,
        date: new Date(),
      },
      {
        id: '333',
        title: 'sravs',
        isCompleted: false,
        date: new Date(),
      },
    ];
  }

  focus() {
    document.getElementById('ravi').focus();
  }
  // focus1() {
  //   document.getElementById('downarrow1').focus();
  // }
}
