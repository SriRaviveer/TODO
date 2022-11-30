import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faTrashAlt, faCheck } from '@fortawesome/free-solid-svg-icons';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from '../../model/Todo';
import { TodoForm } from '../todo-form/todo-form.component.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  @Input() todos: Todo[];
  @Output() public hai = new EventEmitter();
  length: number;
  showComp: boolean = false;

  faTrashAlt = faTrashAlt;
  faCheck = faCheck;

  constructor(public todoService: TodoService, public todoForm: TodoForm) { }

  ngOnInit(): void {
    // this.todoService.getTodos().subscribe((todos) => {
    //   this.todos = todos;
    // });
    // this.todos = true
    //   ? this.todoService.todosInService
    //   : [
    //     {
    //       id: '111',
    //       title: 'ravi',
    //       isCompleted: true,
    //       date: new Date(),
    //     },
    //     {
    //       id: '222',
    //       title: 'honey',
    //       isCompleted: true,
    //       date: new Date(),
    //     },
    //     {
    //       id: '333',
    //       title: 'sravs',
    //       isCompleted: false,
    //       date: new Date(),
    //     },
    //   ];

    // this.todoService.getTodos().subscribe((todos) => {
    //   this.todos = todos;
    // });
  }
  // ngOnDestroy() {
  //   console.log('ravi');
  // }

  changeTodoStatus(todo: Todo) {
    // this.todoService.changeStatus(todo);
    // todo.isCompleted = !todo.isCompleted;
    this.todoService.todosInService.forEach((singleTodo) => {
      if (singleTodo.id == todo.id) {
        singleTodo.isCompleted = !singleTodo.isCompleted;
      }
    });
    this.todoForm.focus();
    this.todoService.updateCompletedTodo();
  }

  delete() {
    this.todos = [];
    this.todoService.delete();
    this.showComp = false;
    this.hai.emit("hai");
    this.todoForm.focus();
    // this.todoService.showTodos();
  }

  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo);
    this.todoService.updateCompletedTodo();
    this.todoForm.focus();
  }

  showCom() {
    this.showComp = !this.showComp
    this.todoForm.focus();
  }

  checkBox(event) {
    event.preventDefault();
  }

  deleteComplted() {
    this.todoService.deteleCom()
  }

}


