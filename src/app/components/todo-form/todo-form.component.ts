import { Component, ElementRef, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { v4 as uuid } from 'uuid';

import { Todo } from '../../model/Todo';
import { TodoForm } from './todo-form.component.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent implements OnInit {
  @ViewChild('ravi11') rakeh: ElementRef;
  @Output() public bool = new EventEmitter();
  todos: Todo[];
  ravi: string = '';
  uid: string;


  constructor(private todoService: TodoService, private ravi1: TodoForm) {
    // this.rakeh.nativeElement.focus();

  }
  ngOnInit(): void {
    this.todos = [
      // {
      //   id: '111',
      //   title: 'ravi',
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
    this.ravi1.focus();
  }

  regex(event) {
    const regex = /^[A-z]*$/;
    if (regex.test(event.target.value)) {
      this.ravi = event.target.value;
    } else {
      event.target.value = this.ravi;
    }
  }

  add() {
    const todos = {
      id: uuid(),
      title: this.ravi,
      date: new Date(),
      isCompleted: false,
    };
    if (this.ravi) {
      this.todoService.addTodos(todos);
      this.bool.emit("hai");
      this.todos.push(todos)
    }
    this.ravi = '';
  }

  hao(event) {
    this.bool.emit("");
  }

  keyDown(event) {
    if (event.ctrlKey)
      if (event.keyCode == 16) {
        event.preventDefault();
        this.todoService.delete();
        this.todos = [];
      }
  }
}
